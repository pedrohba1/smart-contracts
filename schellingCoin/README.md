# Schelling Coin e contrato de suborno.

Uma coisa que eu estou pensando aqui é que no suborno é melhor NÂO fazer um contrato em que os usuários pedem um suborno e recebem ele, porque outros usuários podem saber por acaso (olhando transações) se outros usuários estão assinando nesse contrato e isso pode acabar resultando no "cancelamento" do Schelling coin (usuários podem simplesmente decidir não participar ou o contrato pode ter uma função de emergência que devolve os fundos em caso de algo ocorrer errado). Até mesmo poderia ser escrita uma rotina off-chain que verifica as transações das carteiras participantes procurando por algo suspeito que pudesse ser um suborno requisitado para uma votação no contrato Schelling, dificultando ainda mais a ocorrência.

Um jeito melhor (mais pilantra, pois tem menos chances de ser descoberto), porém mais difícil de conseguir subornados, seria no deploy do contrato cadastrar todos os endereços das carteiras que vão receber suborno. Nisso, como as carteiras não estão pedindo suborno direto para esse contrato, não há transações que liguem eles ao contrato do suborno, mas eles vão receber o suborno se votarem corretamente. Poderia também ser uma função que permite o cadastro de subornados, só que apenas o owner do contrato faria o cadastro de subornados e seus valores.

## Sobre o Schelling

Dessa vez eu pesquisei um pouco mais para calcular o SHA256. Acontece que dá pra gerar o mesmo SHA256 do Solidity
usando o module `ethers`. Ele tem uma função que funciona. Portanto, não tem mais o problema de gerar uma hash por meio de uma `pure function` no contrato inteligente e correr o risco de que esse hash seja visto.

Também pensei em fazer o Schelling como se fosse um proto Kleros. O contrato é construído como um "julgamento" de um "caso" e os votantes votam sim e não dependendo do que está descrito no caso. Por exemplo, o deploy do contrato é feito com a pergunta "O contratante da empresa ACME deveria pagar o seguro?". Os participantes então votam sim ou não para esse caso.

## Sobre o Bribe

Uma coisa que eu percebi do bribe é que só de colocar algumas variáveis como `private` no contrato do Schelling já torna minha vida mais difícil no contrato de suborno. Por exemplo, eu queria checar se o endereço que está requisitando o endereço do suborno era um participante do "Schelling" e qual o valor que ele votou. Mudei algumas variáveis do "Schelling" para public por causa disso, além de ter adicionado uma função que permite checar o valor do commit de um usuário após ele ter sido revelado. Isso foi suficiente para fazer o "Bribe" funcionar.

