const instance = artifacts.require("VerySimpleFix");

contract("VerySimpleFix", accounts =>{

    it('deveria  não fazer overflow', async () => {
        const contract = await instance.deployed();
        var balance = await contract.getBalance.call();
        console.log('valor do balance em hexadecimal antes do overflow:');
        console.log(balance.toString(16));
        console.log('bits ocupados antes da tentativa de overflow:', balance.bitLength());
        try {
        const res = await contract.inc();
        } catch (e) {
            console.log(e.message);
        }
    })
});