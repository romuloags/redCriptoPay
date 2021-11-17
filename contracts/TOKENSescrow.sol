pragma solidity ^0.8.4;

//redcriptopay

import "./Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract redcriptopayTOKENS is Ownable, ReentrancyGuard {
    
    using SafeERC20 for IERC20;

    enum TransactionStatus { FundsReceived, FundsReleased, Refunded, AwaitingResolution }

    event DepositCreation(address indexed Sender, address indexed Receiver, uint indexed id, IERC20 token, uint amount, uint value);
    event DepositCompleted(address indexed Sender, address indexed Receiver, uint indexed id, IERC20 token, uint amount, uint value, TransactionStatus status);
    event Dispute(address indexed Sender, address indexed Receiver, uint indexed id, IERC20 token, uint value, uint amount);
    
    address public Judge;
    IERC20[] public Tokens;
    
    constructor () {
     Judge = msg.sender;    
    }
    
    struct Transaction{
        address Sender;
        address Receiver;
        IERC20 token;
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
    
    function setJudge(address _judge) external onlyOwner onlyEOA {
        Judge = _judge;
    }
    
    function addToken(IERC20 tokencontractaddress) external onlyOwner onlyEOA {
        Tokens.push(tokencontractaddress);
    }
    
    function getTokensLength() external view returns (uint) {
       return Tokens.length;
    }
    
    function removeToken(uint tokenindex) external onlyOwner onlyEOA {
        Tokens[tokenindex] = Tokens[Tokens.length - 1];
        Tokens.pop();
    }
    
    function createDeposit(address _receiver, uint tokenindex, uint _amount) external onlyEOA {
        require(_amount > 0, 'amount can not be 0');
        require(msg.sender != _receiver, "Receiver and sender can not be the same");
        
        Tokens[tokenindex].safeTransferFrom(msg.sender, address(this), _amount);

        uint judgeFee = (_amount * 10) / 1000;
        uint ownerFee = (_amount * 10) / 500;
        uint value = _amount - ownerFee - judgeFee;
        
        Transaction memory NewTransaction = Transaction({ 
            Sender: msg.sender, 
            Receiver: _receiver, 
            token: Tokens[tokenindex],
            amount: _amount,
            judgeFee: judgeFee,
            ownerFee: ownerFee,
            value: _amount - ownerFee - judgeFee,
            status: TransactionStatus.FundsReceived
        });
        
        TransactionLedger.push(NewTransaction);
        uint id = TransactionLedger.length -1;
        SenderLedger[msg.sender].push(id);
        ReceiverLedger[_receiver].push(id);
 
        
         emit DepositCreation(msg.sender, _receiver, id, Tokens[tokenindex], _amount, value);
    }
    
    function getSenderLedgerLength(address user) public view returns (uint){
        return (SenderLedger[user].length);
    }
    
    function getReceiverLedgerLength(address user) public view returns (uint){
        return (ReceiverLedger[user].length);
    }
    
    function releaseFunds(uint id) external nonReentrant onlyEOA {
        Transaction storage t = TransactionLedger[id];
        require(t.Sender == msg.sender || Judge == msg.sender, "only sender or judge can call this function");
        require(t.status == TransactionStatus.FundsReceived || t.status == TransactionStatus.AwaitingResolution);
        
        t.status = TransactionStatus.FundsReleased;
       
        t.token.safeTransfer(t.Receiver,t.value);
        t.token.safeTransfer(Judge, t.judgeFee);
        t.token.safeTransfer(owner, t.ownerFee);
        
        emit DepositCompleted(t.Sender, t.Receiver, id, t.token, t.amount, t.value, t.status);
    }

    function refundSender(uint id) external nonReentrant onlyEOA{
        Transaction storage t = TransactionLedger[id];
        require(t.Receiver == msg.sender || Judge == msg.sender, "only receiver or judge can call this function");
        require(t.status == TransactionStatus.FundsReceived || t.status == TransactionStatus.AwaitingResolution);

        t.status = TransactionStatus.Refunded;
        
        t.token.safeTransfer(t.Sender, t.value);
        t.token.safeTransfer(Judge, t.judgeFee);
        t.token.safeTransfer(owner, t.ownerFee);
        
        emit DepositCompleted(t.Sender, t.Receiver, id, t.token, t.amount, t.value, t.status);
    }

    function raiseDispute(uint id) external onlyEOA {
        Transaction storage t = TransactionLedger[id];
        require(t.Sender == msg.sender || t.Receiver == msg.sender, "Only sender or receiver can call this function");
        require(t.status == TransactionStatus.FundsReceived, "only FundsReceived status is allowed to call this function");

        t.status = TransactionStatus.AwaitingResolution;
        
        emit Dispute(t.Sender, t.Receiver, id, t.token, t.amount, t.value);
    }
}