const ContactINFO = artifacts.require("redcriptopaycontactINFO");

contract("redcriptopaycontactINFO", (accounts) => {
    let redcriptopaycontactinfo = null;
    before(async() => {   
    redcriptopaycontactinfo = await ContactINFO.deployed();
   });

   it("should set the value in the key", async () => {
       await redcriptopaycontactinfo.Setusercontactinfo("contactinfo", {from: accounts[1]});
       const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[1])
       assert(result === "contactinfo");
   });
   it("should get the value in the key", async () => {
       const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[0])
       assert(result === "");
   });
   it("should set the value in the key", async () => {
       await redcriptopaycontactinfo.Setusercontactinfo("lasacacias", {from: accounts[7]});
       const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[7])
       assert(result === "lasacacias");
   });
   it("should set the value in the key", async () => {
       await redcriptopaycontactinfo.Setusercontactinfo("laesperanza", {from: accounts[7]});
       const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[7])
       assert(result === "laesperanza");
   });
   it("should get the value in the key", async () => {
       const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[7])
       assert(result === "laesperanza");
   });
   it("should get the value in the key", async () => {
    const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[1])
    assert(result === "contactinfo");
   });
   it("should get an empty value in the key", async () => {
      const result = await redcriptopaycontactinfo.getusercontactinfo(accounts[2])
      assert(result === "");
     });
});