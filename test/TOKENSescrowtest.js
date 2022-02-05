const TOKENSescrow = artifacts.require("redcriptopayTOKENS");
const mockUSDT = artifacts.require("mockUSDT");
const mockBUSD = artifacts.require("mockBUSD");
const mockUSDC = artifacts.require("mockUSDC");
const truffleAssert = require("truffle-assertions");

contract("redcriptopayTOKENS", (accounts) => {
   let redcriptopaytokens = null;
   let mockusdt = null;
   let mockbusd = null;
   let mockusdc = null;
   before(async() => {   
   redcriptopaytokens = await TOKENSescrow.deployed();
   mockusdt = await mockUSDT.deployed();
   mockbusd = await mockBUSD.deployed();
   mockusdc = await mockUSDC.deployed();
   });

   it("should get the deployer address", async () => {
        const result = await redcriptopaytokens.owner()
        assert(result === accounts[0]);
    });    
   it("should transfer ownership", async () => {
        await redcriptopaytokens.transferOwnership(accounts[1], {from: accounts[0]});
        const result = await redcriptopaytokens.owner()
        assert(result === accounts[1]);    
    });
    it("should not transfer ownership", async () => {
        await truffleAssert.reverts(redcriptopaytokens.transferOwnership(accounts[2], {from: accounts[3]}));   
    });
    it("the judge should be iqual to deployer address", async () => {
        const result = await redcriptopaytokens.Judge()
        assert(result === accounts[0]); 
    });
    it("should set the judge", async () => {
        await redcriptopaytokens.setJudge(accounts[2], {from: accounts[1]});
        const result = await redcriptopaytokens.Judge()
        assert(result === accounts[2]);    
    });
    it("should not set the judge", async () => {
        await truffleAssert.reverts(redcriptopaytokens.setJudge(accounts[4], {from: accounts[2]}));
    });
    it("should get 0 elements from tokens array", async () => {
        const tokenslength = await redcriptopaytokens.getTokensLength()
        assert(tokenslength.toNumber() === 0); 
    });
    it("should not add a token, only owner can", async () => {
        await truffleAssert.reverts(redcriptopaytokens.addToken(mockusdt.address, {from: accounts[0]}));
    });
    it("should add a token", async () => {
        await redcriptopaytokens.addToken(mockusdt.address, {from: accounts[1]});
        const result = await redcriptopaytokens.Tokens("0")
        assert(result === mockusdt.address);    
    });
    it("should get 1 element from tokens array", async () => {
        const tokenslength = await redcriptopaytokens.getTokensLength()
        assert(tokenslength.toNumber() === 1); 
    });
    it("should mint tokens", async () => {
        await mockusdt.mint(accounts[3], web3.utils.toWei("1000000"), {from: accounts[0]});    
    });
    it("should approve expending tokens", async () => {
        await mockusdt.approve(redcriptopaytokens.address, web3.utils.toWei("1000000"), {from: accounts[3]});    
    }); 
    it("should create a deposit", async () => {
        await redcriptopaytokens.createDeposit(accounts[4], "0", web3.utils.toWei("1000"), {from: accounts[3]});
        const transaction = await redcriptopaytokens.TransactionLedger(0)
        assert(transaction[0] === accounts[3]);
        assert(transaction[1] === accounts[4]);
        assert(transaction[2] === mockusdt.address);
        assert(transaction[3].toString() === web3.utils.toWei("1000"));
        assert(transaction[4].toString() === web3.utils.toWei("10"));
        assert(transaction[5].toString() === web3.utils.toWei("20"));
        assert(transaction[6].toString() === web3.utils.toWei("970"));
        assert(transaction[7].toNumber() === 0);
    });
    it("contract has tokens", async () => {
        let balance = await mockusdt.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), web3.utils.toWei("1000"))
    });
    it("should not create a deposit, amount is equal to 0", async () => {
        await truffleAssert.reverts(redcriptopaytokens.createDeposit(accounts[4], "0", "0",  {from: accounts[3], value: 0}));
    });
    it("should not create a deposit, sender is equal to receiver", async () => {
        await truffleAssert.reverts(redcriptopaytokens.createDeposit(accounts[3], "0", "10", {from: accounts[3]}));
    });
    it("should not raise a dispute, judge can not raise a dispute", async () => {
        await truffleAssert.reverts(redcriptopaytokens.raiseDispute("0", {from: accounts[2]}));            
    });
    it("should not raise a dispute, only sender and receiver can", async () => {
        await truffleAssert.reverts(redcriptopaytokens.raiseDispute("0", {from: accounts[5]}));            
    });
    it("should raise a dispute, sender is calling it", async () => {
        await redcriptopaytokens.raiseDispute("0", {from: accounts[3]});
        const transaction = await redcriptopaytokens.TransactionLedger(0)
        assert(transaction[7].toNumber() === 3);    
    });
    it("should not raise a dispute, a dispute has already been called", async () => {
        await truffleAssert.reverts(redcriptopaytokens.raiseDispute("0", {from: accounts[3]}));            
    });
    it("should not raise a dispute, the transaction does not exist", async () => {
        await truffleAssert.reverts(redcriptopaytokens.raiseDispute("1", {from: accounts[3]}));            
    });
    it("should release the funds, sender is calling it", async () => {
        await redcriptopaytokens.releaseFunds("0", {from: accounts[3]});
        const transaction = await redcriptopaytokens.TransactionLedger(0)
        assert(transaction[7].toNumber() === 1);    
    });
    it("contract has no tokens", async () => {
        let balance = await mockusdt.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), web3.utils.toWei("0"))
    });
    it("receiver has tokens", async () => {
        let balance = await mockusdt.balanceOf(accounts[4])
        assert.equal(balance.toString(), web3.utils.toWei("970"))
    });
    it("judge has tokens", async () => {
        let balance = await mockusdt.balanceOf(accounts[2])
        assert.equal(balance.toString(), web3.utils.toWei("10"))
    });
    it("owner has tokens", async () => {
        let balance = await mockusdt.balanceOf(accounts[1])
        assert.equal(balance.toString(), web3.utils.toWei("20"))
    });
    it("should not release the funds, funds have already been sent", async () => {
        await truffleAssert.reverts(redcriptopaytokens.releaseFunds("0", {from: accounts[3]}));            
    });
    it("should not release any funds, the transaction does not exist", async () => {
        await truffleAssert.reverts(redcriptopaytokens.raiseDispute("1", {from: accounts[3]}));            
    });
    it("should add a token", async () => {
        await redcriptopaytokens.addToken(mockbusd.address, {from: accounts[1]});
        const result = await redcriptopaytokens.Tokens("1")
        assert(result === mockbusd.address);
    });
    it("should get 2 elements from tokens array", async () => {
        const tokenslength = await redcriptopaytokens.getTokensLength()
        assert(tokenslength.toNumber() === 2); 
    });    
    it("should mint tokens", async () => {
        await mockbusd.mint(accounts[5], web3.utils.toWei("5000000"), {from: accounts[0]});    
    });
    it("should approve expending tokens", async () => {
        await mockbusd.approve(redcriptopaytokens.address, web3.utils.toWei("5000000"), {from: accounts[5]});    
    });
    it("should create a new deposit", async () => {
        await redcriptopaytokens.createDeposit(accounts[6], "1", "5000000", {from: accounts[5]});
        const transaction = await redcriptopaytokens.TransactionLedger(1)
        assert(transaction[0] === accounts[5]);
        assert(transaction[1] === accounts[6]);
        assert(transaction[2] === mockbusd.address);
        assert(transaction[3].toNumber() === 5000000);
        assert(transaction[4].toNumber() === 50000);
        assert(transaction[5].toNumber() === 100000);
        assert(transaction[6].toNumber() === 4850000);
        assert(transaction[7].toNumber() === 0);
    });
    it("should not remove a token, only owner can", async () => {
        await truffleAssert.reverts(redcriptopaytokens.removeToken("0", {from: accounts[2]}));
    });
    it("should remove a token", async () => {
        await redcriptopaytokens.removeToken("1", {from: accounts[1]});
        const tokenslength = await redcriptopaytokens.getTokensLength()
        assert(tokenslength.toNumber() === 1);    
    });
    it("contract has tokens", async () => {
        let balance = await mockbusd.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), 5000000)
    });
    it("should raise a dispute, receiver is calling it", async () => {
        await redcriptopaytokens.raiseDispute("1", {from: accounts[6]});
        const transaction = await redcriptopaytokens.TransactionLedger(1)
        assert(transaction[7].toNumber() === 3);
    });
    it("should not raise a dispute, a dispute has already been called", async () => {
        await truffleAssert.reverts(redcriptopaytokens.raiseDispute("0", {from: accounts[5]}));            
    });
    it("should not release the funds, only sender and judge can", async () => {
        await truffleAssert.reverts(redcriptopaytokens.releaseFunds("1", {from: accounts[6]}));            
    });
    it("should set the judge", async () => {
        await redcriptopaytokens.setJudge(accounts[7], {from: accounts[1]});
        const result = await redcriptopaytokens.Judge()
        assert(result === accounts[7]);
    });
    it("should not release the funds, old judge can not call it, only new judge can", async () => {
            await truffleAssert.reverts(redcriptopaytokens.releaseFunds("1", {from: accounts[2]}));            
    });
    it("should release the funds, new judge is calling it", async () => {
        await redcriptopaytokens.releaseFunds("1", {from: accounts[7]});
        const transaction = await redcriptopaytokens.TransactionLedger(0)
        assert(transaction[7].toNumber() === 1);
    });
    it("contract has no tokens", async () => {
        let balance = await mockbusd.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), web3.utils.toWei("0"))
    });
    it("receiver has tokens", async () => {
        let balance = await mockbusd.balanceOf(accounts[6])
        assert.equal(balance.toString(), 4850000)
    });
    it("judge has tokens", async () => {
        let balance = await mockbusd.balanceOf(accounts[7])
        assert.equal(balance.toString(), 50000)
    });
    it("owner has tokens", async () => {
        let balance = await mockbusd.balanceOf(accounts[1])
        assert.equal(balance.toString(), 100000)
    });
    it("should not release the funds, funds have already been released", async () => {
        await truffleAssert.reverts(redcriptopaytokens.releaseFunds("1", {from: accounts[7]}));            
    });
    it("should add a token", async () => {
        await redcriptopaytokens.addToken(mockusdc.address, {from: accounts[1]});
        const result = await redcriptopaytokens.Tokens("1")
        assert(result === mockusdc.address);
    });
    it("should get 2 elements from tokens array", async () => {
        const tokenslength = await redcriptopaytokens.getTokensLength()
        assert(tokenslength.toNumber() === 2); 
    });    
    it("should mint tokens", async () => {
        await mockusdc.mint(accounts[8], "1000000000", {from: accounts[0]});    
    });
    it("should approve expending tokens", async () => {
        await mockusdc.approve(redcriptopaytokens.address, "1000000000", {from: accounts[8]});    
    });
    it("should create a deposit id 2", async () => {
        await redcriptopaytokens.createDeposit(accounts[9], "1", "1000000000", {from: accounts[8]});
        const transaction = await redcriptopaytokens.TransactionLedger(2)
        assert(transaction[0] === accounts[8]);
        assert(transaction[1] === accounts[9]);
        assert(transaction[2] === mockusdc.address);
        assert(transaction[3].toNumber() === 1000000000);
        assert(transaction[4].toNumber() === 10000000);
        assert(transaction[5].toNumber() === 20000000);
        assert(transaction[6].toNumber() === 970000000);
        assert(transaction[7].toNumber() === 0);
    });
    it("contract has tokens", async () => {
        let balance = await mockusdc.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), 1000000000)
    });
    it("should not release the funds, only sender and judge can", async () => {
        await truffleAssert.reverts(redcriptopaytokens.releaseFunds("2", {from: accounts[0]}));            
    });
    it("should not refund the funds, only receiver and judge can", async () => {
        await truffleAssert.reverts(redcriptopaytokens.refundSender("2", {from: accounts[4]}));
    });
    it("should not refund the funds, sender can not call this function", async () => {
        await truffleAssert.reverts(redcriptopaytokens.refundSender("2", {from: accounts[8]}));
    });  
    it("should raise a dispute, receiver is calling it", async () => {
        await redcriptopaytokens.raiseDispute("2", {from: accounts[9]});
        const transaction = await redcriptopaytokens.TransactionLedger(2)
        assert(transaction[7].toNumber() === 3); 
    });
    it("should refund the funds, receiver is calling it", async () => {
        await redcriptopaytokens.refundSender("2", {from: accounts[9]});
        const transaction = await redcriptopaytokens.TransactionLedger(2)
        assert(transaction[7].toNumber() === 2);
    });
    it("contract has no tokens", async () => {
        let balance = await mockusdc.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), web3.utils.toWei("0"))
    });
    it("receiver has no tokens", async () => {
        let balance = await mockusdc.balanceOf(accounts[9])
        assert.equal(balance.toString(), 0)
    });
    it("sender has his tokens back - fee", async () => {
        let balance = await mockusdc.balanceOf(accounts[8])
        assert.equal(balance.toString(), 970000000)
    });
    it("judge has tokens", async () => {
        let balance = await mockusdc.balanceOf(accounts[7])
        assert.equal(balance.toString(), 10000000)
    });
    it("owner has tokens", async () => {
        let balance = await mockusdc.balanceOf(accounts[1])
        assert.equal(balance.toString(), 20000000)
    });
    it("should not refund the funds, sender have already been refunded", async () => {
        await truffleAssert.reverts(redcriptopaytokens.refundSender("2", {from: accounts[9]}));
    });
    it("should mint tokens", async () => {
        await mockusdt.mint(accounts[9], web3.utils.toWei("1"), {from: accounts[0]});    
    });
    it("should approve expending tokens", async () => {
        await mockusdt.approve(redcriptopaytokens.address, web3.utils.toWei("1"), {from: accounts[9]});    
    });
    it("should create a deposit id 3", async () => {
        await redcriptopaytokens.createDeposit(accounts[2], "0", web3.utils.toWei("1"), {from: accounts[9]});
        const transaction = await redcriptopaytokens.TransactionLedger(3)
        assert(transaction[0] === accounts[9]);
        assert(transaction[1] === accounts[2]);
        assert(transaction[2] === mockusdt.address);
        assert(transaction[3].toString() === web3.utils.toWei("1"));
        assert(transaction[4].toString() === web3.utils.toWei("0.01"));
        assert(transaction[5].toString() === web3.utils.toWei("0.02"));
        assert(transaction[6].toString() === web3.utils.toWei("0.97"));
        assert(transaction[7].toNumber() === 0);
    });
    it("should add a token", async () => {
        await redcriptopaytokens.addToken(mockbusd.address, {from: accounts[1]});
        const result = await redcriptopaytokens.Tokens("2")
        assert(result === mockbusd.address);
    });
    it("should remove a token", async () => {
        await redcriptopaytokens.removeToken("0", {from: accounts[1]});
        const tokenslength = await redcriptopaytokens.getTokensLength()
        assert(tokenslength.toNumber() === 2);    
    });
    it("should get the mockbusd address as 0 index now", async () => {
        const result = await redcriptopaytokens.Tokens(0)
        assert(result === mockbusd.address);
    });
    it("should get the mock USDC address as 1 index ", async () => {
        const result = await redcriptopaytokens.Tokens(1)
        assert(result === mockusdc.address);
    });

    it("contract has tokens", async () => {
        let balance = await mockusdt.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), web3.utils.toWei("1"))
    });
    it("should set the judge", async () => {
        await redcriptopaytokens.setJudge(accounts[0], {from: accounts[1]});
        const result = await redcriptopaytokens.Judge()
        assert(result === accounts[0]);
    });
    it("should not refund the funds, only recevier and judge can refund the sender", async () => {
        await truffleAssert.reverts(redcriptopaytokens.refundSender("3", {from: accounts[1]}));
    });
    it("should refund the funds, new judge is calling it", async () => {
        await redcriptopaytokens.refundSender("3", {from: accounts[0]});
        const transaction = await redcriptopaytokens.TransactionLedger(3)
        assert(transaction[7].toNumber() === 2);
    });
    it("contract has no tokens", async () => {
        let balance = await mockusdt.balanceOf(redcriptopaytokens.address)
        assert.equal(balance.toString(), web3.utils.toWei("0"))
    });
    it("sender has his tokens back - fee", async () => {
        let balance = await mockusdt.balanceOf(accounts[9])
        assert.equal(balance.toString(), web3.utils.toWei("0.97"))
    });
    it("judge has tokens", async () => {
        let balance = await mockusdt.balanceOf(accounts[0])
        assert.equal(balance.toString(), web3.utils.toWei("10000.01"))
    });
    it("owner has tokens", async () => {
        let balance = await mockusdt.balanceOf(accounts[1])
        assert.equal(balance.toString(), web3.utils.toWei("20.02"))
    });
    it("Receiver has the same token balance", async () => {
        let balance = await mockusdt.balanceOf(accounts[2])
        assert.equal(balance.toString(), web3.utils.toWei("10"))
    });
    it("should not refund the funds, sender have already been refunded", async () => {
        await truffleAssert.reverts(redcriptopaytokens.refundSender("3", {from: accounts[0]}));
    });
    it("should not refund the funds, transaction does not exist", async () => {
        await truffleAssert.reverts(redcriptopaytokens.refundSender("10", {from: accounts[0]}));
    });
    it("judge should be updated", async () => {
        const result = await redcriptopaytokens.Judge()
        assert(result === accounts[0]); 
    });
    it("should get 1 as length, 1 as receiver", async () => {
        const length = await redcriptopaytokens.getReceiverLedgerLength(accounts[2])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as receiver", async () => {
        const length = await redcriptopaytokens.getReceiverLedgerLength(accounts[4])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as receiver", async () => {
        const length = await redcriptopaytokens.getReceiverLedgerLength(accounts[6])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender 1 as receiver", async () => {
        const length = await redcriptopaytokens.getReceiverLedgerLength(accounts[9])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender", async () => {
        const length = await redcriptopaytokens.getSenderLedgerLength(accounts[3])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender", async () => {
        const length = await redcriptopaytokens.getSenderLedgerLength(accounts[5])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender", async () => {
        const length = await redcriptopaytokens.getSenderLedgerLength(accounts[8])
        assert(length.toNumber() === 1);
    });
    it("should get 1 as length, 1 as sender 1 as receiver", async () => {
        const length = await redcriptopaytokens.getSenderLedgerLength(accounts[9])
        assert(length.toNumber() === 1);
    });
});