const HashContract = artifacts.require("HashContract");
const crypto = require('crypto')

function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

contract("Testes do SimpleCommit", async accounts => {
    it("O deploy do contrato deveria ser feito", async () => {
        const instance = await HashContract.deployed();
    });
    it("A hash retornada deveria ser igual a criada fora do contrato", async () => {
        const instance = await HashContract.deployed();
        segredo = web3.utils.asciiToHex('A');
        console.log('segredo em hexa', web3.utils.asciiToHex('A'));
        const result = await instance.SimpleHash.call(segredo);
        console.log('hash resultante da palavra A no contrato', result);

        const SHA256 = crypto.createHash('sha256').update('A', 'hex').digest('hex');
        console.log('hash fora do contrato', SHA256);
    });
});