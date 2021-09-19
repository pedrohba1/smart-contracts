pragma solidity >=0.4.25 <0.6.0;

contract LMU {
    enum EstadosLeilao {
        LancesEstado,
        FinalizadoEstado
    }
    EstadosLeilao meuEstado;

    struct LancesValor {
        uint256 valor;
        bool ehUnico;
        address[] usuarios;
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

    function verificaFim() private {
        if (block.number > blocklimit) {
            meuEstado = EstadosLeilao.FinalizadoEstado;
        }
    }
}