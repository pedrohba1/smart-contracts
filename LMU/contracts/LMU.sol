pragma solidity >=0.4.25 <0.6.0;

import "hardhat/console.sol";

contract LMU {
    enum EstadosLeilao {
        LancesEstado,
        FinalizadoEstado
    }

    EstadosLeilao meuEstado;

    struct LancesValor {
        uint256 valor;
        bool ehUnico;
        address payable[] usuarios;
    }

    mapping(uint256 => LancesValor) lances;

    uint256 blocklimit;
    address vencedor;
    address payable dono;
    uint256 vencedorval;
    bool pagou;
    uint256 premio;

    constructor(uint256 tempo) public payable {
        blocklimit = block.number + tempo;
        meuEstado = EstadosLeilao.LancesEstado;
        vencedorval = 0;
        dono = msg.sender;
        pagou = false;
        premio = msg.value;
    }

    function pegaMLU() public view returns (uint256) {
        uint256 v = 0;
        LancesValor storage l = lances[v];
        while (v < 10 ^ 18) {
            l = lances[v];
            if (l.ehUnico) {
                return v;
            }
            v += 1;
            l = lances[v];
        }
        return 0;
    }

    function fazLance() public payable {
        verificaFim();
        require(meuEstado == EstadosLeilao.LancesEstado, "Fim dos lances...");
        LancesValor storage l = lances[msg.value];
        if (l.valor > 0) {
            l.ehUnico = false;
            l.usuarios.push(msg.sender);
        } else {
            l.ehUnico = true;
            l.valor = msg.value;
            l.usuarios.push(msg.sender);
        }
    }


    function pegaVencedor() public {
        require(meuEstado == EstadosLeilao.FinalizadoEstado, "O leilão ainda nãoa acabou");
        require(pagou ==false, "Premio já foi pago");
        uint v = pegaMLU();
        LancesValor storage l  = lances[v];
        l.usuarios[0].send(premio);
        pagou = true;
        if(!l.usuarios[0].send(premio)){
            pagou = false;
        }
    }

    function verificaFim() private {
        if (block.number > blocklimit) {
            meuEstado = EstadosLeilao.FinalizadoEstado;
        }
    }
}
