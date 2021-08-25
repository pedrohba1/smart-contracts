const verySimple = artifacts.require("VerySimple");

module.exports = function (deployer) {
  var a = new web3.utils.BN(2);
  var b = new web3.utils.BN(255);
  MAX_INT = a.pow(b).sub( new web3.utils.BN(1));
  deployer.deploy(verySimple, MAX_INT);
};