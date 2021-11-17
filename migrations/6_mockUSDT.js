const mockUSDT = artifacts.require("mockUSDT");

module.exports = function (deployer) {
  deployer.deploy(mockUSDT);
};
