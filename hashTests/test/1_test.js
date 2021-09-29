const HashContract = artifacts.require("HashContract");
const CryptoJS = require('crypto-js');
var SHA256 = require("crypto-js/sha256");

function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

function padUntil32Bytes(string) {
    string = string.padEnd(32,'0');
    return string;
}

contract("Testes do SimpleCommit", async accounts => {
    it("O deploy do contrato deveria ser feito", async () => {
        const instance = await HashContract.deployed();
    });
    it("A hash retornada deveria ser igual a criada fora do contrato", async () => {
        const instance = await HashContract.deployed();
        let secret = web3.utils.toHex('A');
        const result = await instance.SimpleHash.call(secret);
        await debug( instance.SimpleHash.call(secret));
        console.log('function return',result);
        hash = SHA256(secret);
        console.log('hash outside the contract',hash.toString());
    });
});