const redcriptopayTOKENS = artifacts.require("redcriptopayTOKENS");

module.exports = function (deployer) {
  deployer.deploy(redcriptopayTOKENS);
};