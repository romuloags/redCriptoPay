const mockUSDC = artifacts.require("mockUSDC");

module.exports = function (deployer) {
  deployer.deploy(mockUSDC);
};
