const mockETH = artifacts.require("mockETH");

module.exports = function (deployer) {
  deployer.deploy(mockETH);
};
