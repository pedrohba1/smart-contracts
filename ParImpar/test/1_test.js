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
        await instance.chooseEven({from: accounts[0]});
        await instance.chooseOdd({from: accounts[1]});
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
        assert.equal(res, true);
    });

    it("Deveria transferir fundos adequadamente", async() =>{
        const instance = await ParImpar.deployed();
        //nesse caso quem ganhou foi o accounts[1] porque ele apostou impar.
        const prevWalletBalance = await web3.eth.getBalance(accounts[1]);
        console.log('balanço antes', prevWalletBalance)
        await instance.distributeFunds();
        walletBalance = await web3.eth.getBalance(accounts[1]);
        console.log('balanço depois da distribuição', walletBalance);
        var difference = walletBalance - prevWalletBalance;
        difference = web3.utils.fromWei(difference.toString(), 'ether');
        console.log('diferença entre antes e depois em ether', difference);
        assert.equal(difference, 2);
    });
});