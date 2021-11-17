const mockBUSD = artifacts.require("mockBUSD");

module.exports = function (deployer) {
  deployer.deploy(mockBUSD);
};
