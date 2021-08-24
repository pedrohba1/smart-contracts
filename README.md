 # Very Simple smart contract

A ideia desse projeto é criar um contrato e descobrir as falhas de segurança dele.

## Getting Started

### Dependencies

Este projeto utiliza `truffle` e `ganache`. O melhor é instalar o `truffle` com o `npm install -g truffle`.
O `ganache` eu achei melhor só usar o o `AppImage`.  

### Executing program

Primeiro você tem que estar rodando o `ganache`. Certifique-se que a porta e o endereço batem com os do arquivo `truffle-config.js`.
Daí rode os seguintes comandos:

```
truffle compile
truffle migrate
truffle exec src/scripts/interage.js 
```
