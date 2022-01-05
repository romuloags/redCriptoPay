const mockLEC = artifacts.require("mockLEC");

module.exports = function (deployer) {
  deployer.deploy(mockLEC);
};
