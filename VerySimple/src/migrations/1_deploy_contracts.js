const verySimple = artifacts.require("VerySimple");
const BN = web3.utils.BN;

module.exports = function (deployer) {
  var a = new BN(2);
  var b = new BN(255);
  var MAX_INT = a.pow(b).sub(new BN(1));
  deployer.deploy(verySimple, MAX_INT);
};