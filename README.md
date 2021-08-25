 # Very Simple smart contract

A ideia desse projeto é criar um contrato e descobrir as falhas de segurança dele.

## Getting Started

### Dependências

Este projeto utiliza `truffle` e `ganache`. O melhor é instalar o `truffle` com o `npm install -g truffle`.
O `ganache` eu achei melhor só usar o o `AppImage`, mas supostamente tem também o `ganache-cli`.

### Executando o programa

Primeiro você tem que estar rodando o `ganache`. Certifique-se que a porta e o endereço batem com os do arquivo `truffle-config.js`.
Daí rode os seguintes comandos:

```
truffle compile
truffle migrate
truffle exec src/scripts/interage.js 
```

### motivações desse projeto

Esse projeto consiste em testar o underflow e o overflow na linguagem solidity na versão 0.5.10.

Um dos jeitos foi usando o contrato `UnsignedSafeMath.sol` disponibilizado pelo OpenZeppelin. Esse contrato estabelece um valor máximo para operações aritméticas e outras validações que evitam a ocorrência de overflows e underflows.

O outro jeito que é bem mais simples do que usar esse contrato é usar uma versão do Solidity maior que 0.8.0. Dessa versão em diante o Solidity já checa e evita a ocorrência de overflows e underflows por padrão. 