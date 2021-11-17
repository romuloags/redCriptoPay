const BNBescrow = artifacts.require("redcriptopayBNB");

const truffleAssert = require("truffle-assertions");

contract("redcriptopayBNB", (accounts) => {
   let redcriptopaybnb = null;
   before(async() => {   
   redcriptopaybnb = await BNBescrow.deployed();
   });

   it("should get the deployer address", async () => {
        const result = await redcriptopaybnb.owner()
        assert(result === accounts[0]);
    });    
   it("should transfer ownership", async () => {
        await redcriptopaybnb.transferOwnership(accounts[1], {from: accounts[0]});
        const result = await redcriptopaybnb.owner()
        assert(result === accounts[1]);    
    });
    it("should not transfer ownership", async () => {
        await truffleAssert.reverts(redcriptopaybnb.transferOwnership(accounts[2], {from: accounts[3]}));   
    });
    it("the judge should be iqual to deployer address", async () => {
        const result = await redcriptopaybnb.Judge()
        assert(result === accounts[0]); 
    });
    it("should set the judge", async () => {
        await redcriptopaybnb.setJudge(accounts[2], {from: accounts[1]});
        const result = await redcriptopaybnb.Judge()
        assert(result === accounts[2]);    
    });
    it("should not set the judge", async () => {
        await truffleAssert.reverts(redcriptopaybnb.setJudge(accounts[4], {from: accounts[2]}));
    });
    it("should create a deposit", async () => {
        await redcriptopaybnb.createDeposit(accounts[4], {from: accounts[3], value: 1000});
        const transaction = await redcriptopaybnb.TransactionLedger(0)
        assert(transaction[0] === accounts[3]);
        assert(transaction[1] === accounts[4]);
        assert(transaction[2].toNumber() === 1000);
        assert(transaction[3].toNumber() === 10);
        assert(transaction[4].toNumber() === 20);
        assert(transaction[5].toNumber() === 970);
        assert(transaction[6].toNumber() === 0);
    });
    it("should not create a deposit, amount is equal to 0", async () => {
        await truffleAssert.reverts(redcriptopaybnb.createDeposit(accounts[4], {from: accounts[3], value: 0}));
    });
    it("should not create a deposit, sender is equal to receiver", async () => {
        await truffleAssert.reverts(redcriptopaybnb.createDeposit(accounts[3], {from: accounts[3], value: 1000}));
    });
    it("should not raise a dispute, judge can not raise a dispute", async () => {
        await truffleAssert.reverts(redcriptopaybnb.raiseDispute("0", {from: accounts[2]}));            
    });
    it("should not raise a dispute, only sender and receiver can", async () => {
        await truffleAssert.reverts(redcriptopaybnb.raiseDispute("0", {from: accounts[5]}));            
    });
    it("should raise a dispute, sender is calling it", async () => {
        await redcriptopaybnb.raiseDispute("0", {from: accounts[3]});
        const transaction = await redcriptopaybnb.TransactionLedger(0)
        assert(transaction[6].toNumber() === 3);    
    });
    it("should not raise a dispute, a dispute has already been called", async () => {
        await truffleAssert.reverts(redcriptopaybnb.raiseDispute("0", {from: accounts[3]}));            
    });
    it("should not raise a dispute, the transaction does not exist", async () => {
        await truffleAssert.reverts(redcriptopaybnb.raiseDispute("1", {from: accounts[3]}));            
    });
    it("should release the funds, sender is calling it", async () => {
        await redcriptopaybnb.releaseFunds("0", {from: accounts[3]});
        const transaction = await redcriptopaybnb.TransactionLedger(0)
        assert(transaction[6].toNumber() === 1);    
    });
    it("should not release the funds, funds have already been sent", async () => {
        await truffleAssert.reverts(redcriptopaybnb.releaseFunds("0", {from: accounts[3]}));            
    });
    it("should not release any funds, the transaction does not exist", async () => {
        await truffleAssert.reverts(redcriptopaybnb.raiseDispute("1", {from: accounts[3]}));            
    });
    it("should create a new deposit", async () => {
        await redcriptopaybnb.createDeposit(accounts[6], {from: accounts[5], value: 5000000});
        const transaction = await redcriptopaybnb.TransactionLedger(1)
        assert(transaction[0] === accounts[5]);
        assert(transaction[1] === accounts[6]);
        assert(transaction[2].toNumber() === 5000000);
        assert(transaction[3].toNumber() === 50000);
        assert(transaction[4].toNumber() === 100000);
        assert(transaction[5].toNumber() === 4850000);
        assert(transaction[6].toNumber() === 0);
    });
    it("should raise a dispute, receiver is calling it", async () => {
        await redcriptopaybnb.raiseDispute("1", {from: accounts[6]});
        const transaction = await redcriptopaybnb.TransactionLedger(1)
        assert(transaction[6].toNumber() === 3);
    });
    it("should not raise a dispute, a dispute has already been called", async () => {
        await truffleAssert.reverts(redcriptopaybnb.raiseDispute("0", {from: accounts[5]}));            
    });
    it("should not release the funds, only sender and judge can", async () => {
        await truffleAssert.reverts(redcriptopaybnb.releaseFunds("1", {from: accounts[6]}));            
    });
    it("should set the judge", async () => {
        await redcriptopaybnb.setJudge(accounts[7], {from: accounts[1]});
        const result = await redcriptopaybnb.Judge()
        assert(result === accounts[7]);
    });
    it("should not release the funds, old judge can not call it, only new judge can", async () => {
            await truffleAssert.reverts(redcriptopaybnb.releaseFunds("1", {from: accounts[2]}));            
    });
    it("should release the funds, new judge is calling it", async () => {
        await redcriptopaybnb.releaseFunds("1", {from: accounts[7]});
        const transaction = await redcriptopaybnb.TransactionLedger(0)
        assert(transaction[6].toNumber() === 1);
    });
    it("should not release the funds, funds have already been released", async () => {
        await truffleAssert.reverts(redcriptopaybnb.releaseFunds("1", {from: accounts[2]}));            
    });
    it("should create a deposit id 2", async () => {
        await redcriptopaybnb.createDeposit(accounts[9], {from: accounts[8], value: 1000000000});
        const transaction = await redcriptopaybnb.TransactionLedger(2)
        assert(transaction[0] === accounts[8]);
        assert(transaction[1] === accounts[9]);
        assert(transaction[2].toNumber() === 1000000000);
        assert(transaction[3].toNumber() === 10000000);
        assert(transaction[4].toNumber() === 20000000);
        assert(transaction[5].toNumber() === 970000000);
        assert(transaction[6].toNumber() === 0);
    });
    it("should not release the funds, only sender and judge can", async () => {
        await truffleAssert.reverts(redcriptopaybnb.releaseFunds("2", {from: accounts[0]}));            
    });
    it("should not refund the funds, only receiver and judge can", async () => {
        await truffleAssert.reverts(redcriptopaybnb.refundSender("2", {from: accounts[4]}));
    });
    it("should not refund the funds, sender can not call this function", async () => {
        await truffleAssert.reverts(redcriptopaybnb.refundSender("2", {from: accounts[8]}));
    });
    it("should refund the funds, receiver is calling it", async () => {
        await redcriptopaybnb.refundSender("2", {from: accounts[9]});
        const transaction = await redcriptopaybnb.TransactionLedger(2)
        assert(transaction[6].toNumber() === 2);
    });
    it("should not refund the funds, sender have already been refunded", async () => {
        await truffleAssert.reverts(redcriptopaybnb.refundSender("2", {from: accounts[9]}));
    });
    it("should create a deposit id 3", async () => {
        await redcriptopaybnb.createDeposit(accounts[2], {from: accounts[9], value: web3.utils.toWei("1")});
        const transaction = await redcriptopaybnb.TransactionLedger(3)
        assert(transaction[0] === accounts[9]);
        assert(transaction[1] === accounts[2]);
        assert(transaction[2].toString() === web3.utils.toWei("1"));
        assert(transaction[3].toString() === web3.utils.toWei("0.01"));
        assert(transaction[4].toString() === web3.utils.toWei("0.02"));
        assert(transaction[5].toString() === web3.utils.toWei("0.97"));
        assert(transaction[6].toNumber() === 0);
    });
    it("should set the judge", async () => {
        await redcriptopaybnb.setJudge(accounts[0], {from: accounts[1]});
        const result = await redcriptopaybnb.Judge()
        assert(result === accounts[0]);
    });
    it("should not refund the funds, only recevier and new judge can refund the sender", async () => {
        await truffleAssert.reverts(redcriptopaybnb.refundSender("2", {from: accounts[7]}));
    });
    it("should refund the funds, new judge is calling it", async () => {
        await redcriptopaybnb.refundSender("3", {from: accounts[0]});
        const transaction = await redcriptopaybnb.TransactionLedger(3)
        assert(transaction[6].toNumber() === 2);
    });
    it("should not refund the funds, sender have already been refunded", async () => {
        await truffleAssert.reverts(redcriptopaybnb.refundSender("3", {from: accounts[0]}));
    });
    it("should not refund the funds, transaction does not exist", async () => {
        await truffleAssert.reverts(redcriptopaybnb.refundSender("10", {from: accounts[7]}));
    });
    it("judge should be updated", async () => {
        const result = await redcriptopaybnb.Judge()
        assert(result === accounts[0]); 
    });

    it("should get 1 as length as receiver", async () => {
        const length = await redcriptopaybnb.getReceiverLedgerLength(accounts[2])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as receiver", async () => {
        const length = await redcriptopaybnb.getReceiverLedgerLength(accounts[4])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as receiver", async () => {
        const length = await redcriptopaybnb.getReceiverLedgerLength(accounts[6])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender 1 as receiver", async () => {
        const length = await redcriptopaybnb.getReceiverLedgerLength(accounts[9])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender", async () => {
        const length = await redcriptopaybnb.getSenderLedgerLength(accounts[3])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender", async () => {
        const length = await redcriptopaybnb.getSenderLedgerLength(accounts[5])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender", async () => {
        const length = await redcriptopaybnb.getSenderLedgerLength(accounts[8])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender 1 as receiver", async () => {
        const length = await redcriptopaybnb.getSenderLedgerLength(accounts[9])
        assert(length.toNumber() === 1);
    });

});
