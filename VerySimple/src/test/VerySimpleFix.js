const instance = artifacts.require("VerySimpleFix");

contract("VerySimpleFix", accounts =>{

    it('deveria  não fazer overflow', async () => {
        const contract = await instance.deployed();
        var balance = await contract.getBalance.call();
        console.log('valor do balance em hexadecimal antes do overflow:');
        console.log(balance.toString(16));
        console.log('bits ocupados antes da tentativa de overflow:', balance.bitLength());
        try {
        await contract.inc();
        } catch (e) {
            console.log(e.message);
        }
    })

    it('deveria  ser capaz de decrementar e incrementar, nessa ordem, normalmente', async () => {
        const contract = await instance.deployed();
        var balance = await contract.getBalance.call();
        console.log('balanço antes do teste de incremento e decremento');
        console.log(balance.toString(16));
        console.log('bits ocupados antes da tentativa de 2 decrementos:', balance.bitLength());
        try {
        await contract.dec();
        await contract.dec();
        var balance = await contract.getBalance.call();
        console.log('valor em hexadecimal depois de 2 decrementos:');
        console.log(balance.toString(16));
        } catch (e) {
            console.log(e.message);
        }
        await contract.inc();


        var balance = await contract.getBalance.call();
        console.log('valor em hexadecimal depois de 1 incremento:');
        console.log(balance.toString(16));
        console.log('bits ocupados:', balance.bitLength());
    })
});