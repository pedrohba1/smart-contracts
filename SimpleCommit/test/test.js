const TestSimpleCommit = artifacts.require("TestSimpleCommit");
const crypto = require('crypto');

function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}

contract("Testes do SimpleCommit", async accounts => {
    it("O deploy do contrato deveria ser feito", async () => {
        const instance = await TestSimpleCommit.deployed();
        console.log(instance.address);
    });
    it("Um segredo deveria ser enviado para o contrato e revelado após compromisso", async () => {
        const instance = await TestSimpleCommit.deployed();

        //cria um nonce
        var nonce = crypto.createHash('md5').update('nonce1').digest('hex');
        var segredo = 'A';

        console.log('pra garantir que o segredo tem 1 byte', byteCount(segredo));
        console.log('O nonce pode ter até 32 bytes', byteCount(nonce));

        //faz um hash com o nonce
        var hash = crypto.createHash('md5').update(nonce).update(segredo).digest('hex');

        //converter a string do hash para pegar o valor dela:
        console.log('tamanho da hash em bytes sem conversão', byteCount(hash));

        //converte apra string, e pega o valueOf:
        hash = web3.utils.asciiToHex(hash);
        segredo = web3.utils.asciiToHex(segredo);
        nonce = web3.utils.asciiToHex(nonce);
        await instance.doTest(hash, segredo,nonce);
        console.log(await instance.getResult.call());
    });
});