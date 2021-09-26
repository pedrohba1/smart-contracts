const HashContract = artifacts.require("HashContract");

module.exports = function (deployer) {
  deployer.deploy(HashContract);
};
