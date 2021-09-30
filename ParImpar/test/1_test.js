const ParImpar = artifacts.require("ParImpar");

const nonce1 = "13396leet51523nbhd345noce";
const nonce2 = "1339123213126leet686noce";

contract("Testes do ParImpar", async accounts => {
    it("O deploy do contrato deveria ser feito", async () => {
        const instance = await ParImpar.deployed();
        console.log(instance.address);
    });

    it(`jogadores deveriam ser capazes de escolher par ou ímpar`, async () =>{
        const instance = await ParImpar.deployed();
        await instance.choosePlay("PAR", {from: accounts[0]});
        await instance.choosePlay("IMPAR", {from: accounts[1]});

    });

    it("Deveria ser possível fazer commit", async () => {
        const instance = await ParImpar.deployed();
        const hash1 = await instance.hashData.call(nonce1, 20);
        const hash2 = await instance.hashData.call(nonce2, 1);
        console.log(hash2);
        await instance.doCommit(hash1, {from: accounts[0], value: web3.utils.toWei('1', 'ether')});
        await instance.doCommit(hash2, {from: accounts[1], value: web3.utils.toWei('1', 'ether')});
    });

    it("Deveria ser possível revelar commit", async() =>{
        const instance = await ParImpar.deployed();
        await instance.doReveal(nonce1,20, {from: accounts[0]});
        await instance.doReveal(nonce2,1, {from: accounts[1]});
    });

    it("Variável ok deveria ser true", async() =>{
        const instance = await ParImpar.deployed();
        const res = await instance.getResult.call();
        console.log(res);
    });

    it("Deveria transferir fundos adequadamente", async() =>{
        const instance = await ParImpar.deployed();
        const res = await instance.distributeFunds.call();
        console.log(res.toString());
    });
});