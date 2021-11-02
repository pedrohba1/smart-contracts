/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Schelling, SchellingInterface } from "../Schelling";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_votingCase",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "h",
        type: "bytes32",
      },
    ],
    name: "commit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nonce",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "generateHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getMajority",
    outputs: [
      {
        internalType: "enum Schelling.PossibleVotes",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNoVoters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getYesVoters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nonce",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "reveal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seeCommit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setFinishedState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setMajority",
    outputs: [
      {
        internalType: "enum Schelling.PossibleVotes",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setRevealingState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "showCurrentState",
    outputs: [
      {
        internalType: "enum Schelling.RevealingState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600355600060045560405162001be038038062001be083398181016040528101906200003391906200020f565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346000819055506000600560006101000a81548160ff02191690836002811115620000c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055508060029080519060200190620000e5929190620000ed565b5050620003c4565b828054620000fb90620002e9565b90600052602060002090601f0160209004810192826200011f57600085556200016b565b82601f106200013a57805160ff19168380011785556200016b565b828001600101855582156200016b579182015b828111156200016a5782518255916020019190600101906200014d565b5b5090506200017a91906200017e565b5090565b5b80821115620001995760008160009055506001016200017f565b5090565b6000620001b4620001ae846200027d565b62000254565b905082815260208101848484011115620001cd57600080fd5b620001da848285620002b3565b509392505050565b600082601f830112620001f457600080fd5b8151620002068482602086016200019d565b91505092915050565b6000602082840312156200022257600080fd5b600082015167ffffffffffffffff8111156200023d57600080fd5b6200024b84828501620001e2565b91505092915050565b60006200026062000273565b90506200026e82826200031f565b919050565b6000604051905090565b600067ffffffffffffffff8211156200029b576200029a62000384565b5b620002a682620003b3565b9050602081019050919050565b60005b83811015620002d3578082015181840152602081019050620002b6565b83811115620002e3576000848401525b50505050565b600060028204905060018216806200030257607f821691505b6020821081141562000319576200031862000355565b5b50919050565b6200032a82620003b3565b810181811067ffffffffffffffff821117156200034c576200034b62000384565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61180c80620003d46000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063b88a802f11610071578063b88a802f14610143578063db8aa9881461014d578063e12ed1571461017d578063f02115811461019b578063f14fcbc8146101b9578063f45845ce146101e9576100b4565b80630230a700146100b957806304e544cf146100c357806313b7ce3c146100e157806356051d74146100ff578063708b47301461011d5780639e8adaad14610139575b600080fd5b6100c1610207565b005b6100cb6102ea565b6040516100d89190611233565b60405180910390f35b6100e9610301565b6040516100f69190611390565b60405180910390f35b61010761030b565b60405161011491906111fd565b60405180910390f35b61013760048036038101906101329190610f5b565b6103dc565b005b610141610560565b005b61014b610643565b005b61016760048036038101906101629190610f5b565b610a36565b60405161017491906111fd565b60405180910390f35b610185610ab1565b6040516101929190611390565b60405180910390f35b6101a3610abb565b6040516101b09190611218565b60405180910390f35b6101d360048036038101906101ce9190610f09565b610b21565b6040516101e091906111e2565b60405180910390f35b6101f1610c99565b6040516101fe9190611218565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610297576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028e9061126e565b60405180910390fd5b6001600560006101000a81548160ff021916908360028111156102e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550565b6000600560009054906101000a900460ff16905090565b6000600354905090565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000173__$614c41c9c50fcb0ed3ca03c352eb95b0f0$__63b99407ec90916040518263ffffffff1660e01b8152600401610387919061130e565b60206040518083038186803b15801561039f57600080fd5b505af41580156103b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d79190610f32565b905090565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000173__$614c41c9c50fcb0ed3ca03c352eb95b0f0$__636936fb88909184846040518463ffffffff1660e01b815260040161045a93929190611352565b60006040518083038186803b15801561047257600080fd5b505af4158015610486573d6000803e3d6000fd5b505050506001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016001015414156104f3576001600460008282546104eb919061144f565b925050819055505b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160010154141561055c57600160036000828254610554919061144f565b925050819055505b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e79061126e565b60405180910390fd5b6002600560006101000a81548160ff0219169083600281111561063c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550565b60028081111561067c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560009054906101000a900460ff1660028111156106c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610704576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb9061128e565b60405180910390fd5b60011515600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160020160009054906101000a900460ff1615151461079d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610794906112ae565b60405180910390fd5b600560019054906101000a900460ff1660018111156107e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600101541461086b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108629061124e565b60405180910390fd5b600060018111156108a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560019054906101000a900460ff1660018111156108ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561095057600060035460005461090591906114a5565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561094d573d6000803e3d6000fd5b50505b600180811115610989577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560019054906101000a900460ff1660018111156109d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610a345760006003546000546109e991906114a5565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a31573d6000803e3d6000fd5b50505b565b600060028383604051602001610a4d9291906111ba565b604051602081830303815290604052604051610a6991906111a3565b602060405180830381855afa158015610a86573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250810190610aa99190610f32565b905092915050565b6000600454905090565b60006004546003541415610b04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afb906112ee565b60405180910390fd5b6004546003541115610b195760009050610b1e565b600190505b90565b6000806002811115610b5c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560009054906101000a900460ff166002811115610ba4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb906112ce565b60405180910390fd5b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000173__$614c41c9c50fcb0ed3ca03c352eb95b0f0$__63eaf69a789091846040518363ffffffff1660e01b8152600401610c60929190611329565b60006040518083038186803b158015610c7857600080fd5b505af4158015610c8c573d6000803e3d6000fd5b5050505060019050919050565b6000600280811115610cd4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560009054906101000a900460ff166002811115610d1c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610d5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d539061128e565b60405180910390fd5b6004546003541415610da3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9a906112ee565b60405180910390fd5b6004546003541115610e09576000600560016101000a81548160ff02191690836001811115610dfb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060009050610e5f565b6001600560016101000a81548160ff02191690836001811115610e55577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600190505b90565b6000610e75610e70846113d0565b6113ab565b905082815260208101848484011115610e8d57600080fd5b610e98848285611540565b509392505050565b600081359050610eaf816117a8565b92915050565b600081519050610ec4816117a8565b92915050565b600082601f830112610edb57600080fd5b8135610eeb848260208601610e62565b91505092915050565b600081359050610f03816117bf565b92915050565b600060208284031215610f1b57600080fd5b6000610f2984828501610ea0565b91505092915050565b600060208284031215610f4457600080fd5b6000610f5284828501610eb5565b91505092915050565b60008060408385031215610f6e57600080fd5b600083013567ffffffffffffffff811115610f8857600080fd5b610f9485828601610eca565b9250506020610fa585828601610ef4565b9150509250929050565b610fb8816114d6565b82525050565b610fc7816114e2565b82525050565b610fd6816114e2565b82525050565b6000610fe782611401565b610ff18185611417565b935061100181856020860161154f565b80840191505092915050565b6110168161151c565b82525050565b6110258161152e565b82525050565b60006110368261140c565b6110408185611433565b935061105081856020860161154f565b61105981611679565b840191505092915050565b600061106f8261140c565b6110798185611444565b935061108981856020860161154f565b80840191505092915050565b60006110a2601c83611422565b91506110ad8261168a565b602082019050919050565b60006110c5601583611422565b91506110d0826116b3565b602082019050919050565b60006110e8601183611422565b91506110f3826116dc565b602082019050919050565b600061110b601683611422565b915061111682611705565b602082019050919050565b600061112e601783611422565b91506111398261172e565b602082019050919050565b6000611151600383611422565b915061115c82611757565b602082019050919050565b8082525050565b61117781611512565b82525050565b61118681611512565b82525050565b61119d61119882611512565b6115b3565b82525050565b60006111af8284610fdc565b915081905092915050565b60006111c68285611064565b91506111d2828461118c565b6020820191508190509392505050565b60006020820190506111f76000830184610faf565b92915050565b60006020820190506112126000830184610fbe565b92915050565b600060208201905061122d600083018461100d565b92915050565b6000602082019050611248600083018461101c565b92915050565b6000602082019050818103600083015261126781611095565b9050919050565b60006020820190508181036000830152611287816110b8565b9050919050565b600060208201905081810360008301526112a7816110db565b9050919050565b600060208201905081810360008301526112c7816110fe565b9050919050565b600060208201905081810360008301526112e781611121565b9050919050565b6000602082019050818103600083015261130781611144565b9050919050565b60006020820190506113236000830184611167565b92915050565b600060408201905061133e6000830185611167565b61134b6020830184610fcd565b9392505050565b60006060820190506113676000830186611167565b8181036020830152611379818561102b565b9050611388604083018461117d565b949350505050565b60006020820190506113a5600083018461116e565b92915050565b60006113b56113c6565b90506113c18282611582565b919050565b6000604051905090565b600067ffffffffffffffff8211156113eb576113ea61164a565b5b6113f482611679565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061145a82611512565b915061146583611512565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561149a576114996115bd565b5b828201905092915050565b60006114b082611512565b91506114bb83611512565b9250826114cb576114ca6115ec565b5b828204905092915050565b60008115159050919050565b6000819050919050565b60008190506114fa82611780565b919050565b600081905061150d82611794565b919050565b6000819050919050565b6000611527826114ec565b9050919050565b6000611539826114ff565b9050919050565b82818337600083830152505050565b60005b8381101561156d578082015181840152602081019050611552565b8381111561157c576000848401525b50505050565b61158b82611679565b810181811067ffffffffffffffff821117156115aa576115a961164a565b5b80604052505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f766f7465206973206e6f742073616d65206173206d616a6f7269747900000000600082015250565b7f796f7520617265206e6f7420746865206f776e65720000000000000000000000600082015250565b7f69742069736e27742066696e6973686564000000000000000000000000000000600082015250565b7f636f6d6d6974206973206e6f7420766572696669656400000000000000000000600082015250565b7f69742773206e6f742074696d6520746f20636f6d6d6974000000000000000000600082015250565b7f7469650000000000000000000000000000000000000000000000000000000000600082015250565b600281106117915761179061161b565b5b50565b600381106117a5576117a461161b565b5b50565b6117b1816114e2565b81146117bc57600080fd5b50565b6117c881611512565b81146117d357600080fd5b5056fea26469706673582212208e703cb8d89024158dca464b6f9a6a0d24d8ddb18a8c9e3c8deb7015e26caefc64736f6c63430008040033";

type SchellingConstructorParams =
  | [linkLibraryAddresses: SchellingLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SchellingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Schelling__factory extends ContractFactory {
  constructor(...args: SchellingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        Schelling__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: SchellingLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$614c41c9c50fcb0ed3ca03c352eb95b0f0\\$__", "g"),
      linkLibraryAddresses["contracts/CommitLib.sol:CommitLib"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _votingCase: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Schelling> {
    return super.deploy(_votingCase, overrides || {}) as Promise<Schelling>;
  }
  getDeployTransaction(
    _votingCase: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_votingCase, overrides || {});
  }
  attach(address: string): Schelling {
    return super.attach(address) as Schelling;
  }
  connect(signer: Signer): Schelling__factory {
    return super.connect(signer) as Schelling__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SchellingInterface {
    return new utils.Interface(_abi) as SchellingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Schelling {
    return new Contract(address, _abi, signerOrProvider) as Schelling;
  }
}

export interface SchellingLibraryAddresses {
  ["contracts/CommitLib.sol:CommitLib"]: string;
}
