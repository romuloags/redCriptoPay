pragma solidity ^0.8.4;

//redcriptopay

import "./Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract redcriptopayBNB is Ownable, ReentrancyGuard {

    enum TransactionStatus { FundsReceived, FundsReleased, Refunded, AwaitingResolution }

    event DepositCreation(address indexed Sender, address indexed Receiver, uint indexed id, uint amount, uint value);
    event DepositCompleted(address indexed Sender, address indexed Receiver, uint indexed id, uint value, TransactionStatus status);
    event Dispute(address indexed Sender, address indexed Receiver, uint indexed id, uint value);
    
    address public Judge;
    
    constructor () {
     Judge = msg.sender;   
    }
    
    struct Transaction{
        address Sender;
        address Receiver;
        uint amount;
        uint judgeFee;
        uint ownerFee;
        uint value;
        TransactionStatus status;
        
    }
    
    Transaction[] public TransactionLedger;

    mapping(address => uint[]) public SenderLedger;
    mapping(address => uint[]) public ReceiverLedger;
    
    modifier onlyEOA() {
    require(tx.origin == msg.sender, "Contracts can not call this function");
    _;
    }
    
    function setJudge(address _judge) external onlyOwner {
        Judge = _judge;
    }
    
    function createDeposit(address _receiver) payable external onlyEOA {
        require(msg.value > 0, 'amount has to be > 0');
        require(msg.sender != _receiver, " receiver and sender can not be the same.");
        
        uint judgeFee = (msg.value * 10) / 1000;
        uint ownerFee = (msg.value * 10) / 500;
        uint value = msg.value - ownerFee - judgeFee;
        
        Transaction memory NewTransaction = Transaction({
            Sender: msg.sender, 
            Receiver: _receiver,
            amount: msg.value,
            judgeFee: judgeFee,
            ownerFee: ownerFee,
            value: msg.value - ownerFee - judgeFee,
            status: TransactionStatus.FundsReceived
        });
        
        TransactionLedger.push(NewTransaction);
        uint id = TransactionLedger.length -1;
        SenderLedger[msg.sender].push(id);
        ReceiverLedger[_receiver].push(id);
        
         emit DepositCreation(msg.sender, _receiver, id, msg.value, value);
    }

     function getSenderLedgerLength(address user) public view returns (uint){
        return (SenderLedger[user].length);
    }
    
    function getReceiverLedgerLength(address user) public view returns (uint){
        return (ReceiverLedger[user].length);
    }
    
    function releaseFunds(uint id) external nonReentrant onlyEOA {
        Transaction storage t = TransactionLedger[id];
        require(t.Sender == msg.sender || Judge == msg.sender, "only sender or judge can call this function.");
        require(t.status == TransactionStatus.FundsReceived || t.status == TransactionStatus.AwaitingResolution);
        
        t.status = TransactionStatus.FundsReleased;
       
        payable(t.Receiver).transfer(t.value);
        payable(Judge).transfer(t.judgeFee);
        payable(owner).transfer(t.ownerFee);
        
        emit DepositCompleted(t.Sender, t.Receiver, id, t.value, t.status);
    }

    function refundSender(uint id) external nonReentrant onlyEOA{
        Transaction storage t = TransactionLedger[id];
        require(t.Receiver == msg.sender || Judge == msg.sender, "only receiver or judge can call this function.");
        require(t.status == TransactionStatus.FundsReceived || t.status == TransactionStatus.AwaitingResolution);

        t.status = TransactionStatus.Refunded;
        
        payable(t.Sender).transfer(t.value);
        payable(Judge).transfer(t.judgeFee);
        payable(owner).transfer(t.ownerFee);
        
        emit DepositCompleted(t.Sender, t.Receiver, id, t.value, t.status);
    }

    function raiseDispute(uint id) external onlyEOA {
        Transaction storage t = TransactionLedger[id];
        require(t.Sender == msg.sender || t.Receiver == msg.sender, "Only sender or Receiver can call this function.");
        require(t.status == TransactionStatus.FundsReceived, "only FundsReceived status is allowed to call this function");

        t.status = TransactionStatus.AwaitingResolution;
        
        emit Dispute(t.Sender, t.Receiver, id, t.value);
    }
}      