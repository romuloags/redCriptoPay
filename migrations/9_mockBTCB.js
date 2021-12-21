const mockBTCB = artifacts.require("mockBTCB");

module.exports = function (deployer) {
  deployer.deploy(mockBTCB);
};