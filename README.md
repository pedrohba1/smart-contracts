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