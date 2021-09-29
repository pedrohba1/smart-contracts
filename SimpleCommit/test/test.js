const TestSimpleCommit = artifacts.require("TestSimpleCommit");
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
        const instance = await TestSimpleCommit.deployed();
        console.log(instance.address);
    });
    it("Um segredo deveria ser enviado para o contrato e revelado após compromisso", async () => {
        const instance = await TestSimpleCommit.deployed();

        secret = web3.utils.toHex('A');
        secret = padUntil32Bytes(secret)

        
        // //cria um nonce
        // var nonce = crypto.createHash('sha256').update('nonce1').digest('hex');
        // var segredo = 'A';

        // console.log('pra garantir que o segredo tem 1 byte', byteCount(segredo));
        // console.log('O nonce pode ter até 32 bytes', byteCount(nonce));

        // //faz um hash com o nonce
        // var hash = crypto.createHash('sha256').update(nonce).update(segredo).digest('hex');

        // //converter a string do hash para pegar o valor dela:
        // console.log('tamanho da hash em bytes sem conversão', byteCount(hash));

        // //converte apra string, e pega o valueOf:
        // hash = web3.utils.asciiToHex(hash);
        // segredo = web3.utils.asciiToHex(segredo);
        // nonce = web3.utils.asciiToHex(nonce);
        // instance.doTest(hash, segredo,nonce);
        // console.log(await instance.getResult.call());
    });
});