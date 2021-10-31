//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Schelling {
    
    uint256 P;
    constructor() payable {
        P = msg.value;
    }
    
    // def do valor de P,
    //d eposito para pagar os participantes
    // adicionar endereços(?)
    // coletar os votos
    // revelar os votos
    // pagar os vencedores
    // lucro(?) O dinheiro vai ser dividido igualmente entre participantes, então vai sobrar um poquinho
    // vou fazer o pouquinho que sobrar voltar pro owner
    // funcao view para saber o resultado
}
