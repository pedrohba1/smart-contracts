 # Schelling Coin e contrato de suborno.

Uma coisa que eu estou pensando aqui é que no suborno é melhor NÂO fazer um contrato em que os usuários
pedem um suborno e recebem ele, porque outros usuários podem saber por acaso (olhando transações) se outros
usuários estão assinando nesse contrato e isso pode acabar resultando no "cancelamento" do Schelling coin (usuários
podem simplesmente decidir não participar ou o contrato pode ter uma função de emergência que devolve os fundos
em caso de algo ocorrer errado). Até mesmo poderia ser escrita uma rotina off-chain que verifica as transações das carteiras participantes procurando por algo suspeito que pudesse ser um suborno requisitado para uma votação no contrato Schelling, dificultando ainda mais a ocorrência.

Um jeito melhor (mais pilantra, pois tem menos chances de ser descoberto), porém mais difícil de conseguir subornados, seria no deploy do contrato cadastrar todos os endereços das carteiras que vão receber suborno. Nisso, como as carteiras não estão pedindo suborno direto para esse contrato, não há transações que liguem eles ao contrato do suborno, mas eles vão receber o suborno se votarem corretamente. 
Poderia também ser uma função que permite o cadastro de subornados, só que apenas o owner do contrato faria o cadastro de subornados e seus valores.