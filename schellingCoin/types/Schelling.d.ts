/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SchellingInterface extends ethers.utils.Interface {
  functions: {
    "claimReward()": FunctionFragment;
    "commit(bytes32)": FunctionFragment;
    "geCommitValue(address)": FunctionFragment;
    "generateHash(string,uint256)": FunctionFragment;
    "getMajority()": FunctionFragment;
    "getNoVoters()": FunctionFragment;
    "getYesVoters()": FunctionFragment;
    "participants(address)": FunctionFragment;
    "reveal(string,uint256)": FunctionFragment;
    "seeCommit()": FunctionFragment;
    "setFinishedState()": FunctionFragment;
    "setMajority()": FunctionFragment;
    "setRevealingState()": FunctionFragment;
    "showCurrentState()": FunctionFragment;
    "state()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "commit", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "geCommitValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "generateHash",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMajority",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNoVoters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYesVoters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "participants",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "seeCommit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFinishedState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMajority",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRevealingState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "showCurrentState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "geCommitValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMajority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNoVoters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYesVoters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seeCommit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFinishedState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMajority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRevealingState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "showCurrentState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;

  events: {};
}

export class Schelling extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SchellingInterface;

  functions: {
    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimReward()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commit(
      h: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "commit(bytes32)"(
      h: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    geCommitValue(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "geCommitValue(address)"(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    generateHash(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "generateHash(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMajority(overrides?: CallOverrides): Promise<[number]>;

    "getMajority()"(overrides?: CallOverrides): Promise<[number]>;

    getNoVoters(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getNoVoters()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getYesVoters(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getYesVoters()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    participants(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, boolean, number] & {
          commited: string;
          value: BigNumber;
          verified: boolean;
          myState: number;
        }
      ] & {
        sc: [string, BigNumber, boolean, number] & {
          commited: string;
          value: BigNumber;
          verified: boolean;
          myState: number;
        };
      }
    >;

    "participants(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, boolean, number] & {
          commited: string;
          value: BigNumber;
          verified: boolean;
          myState: number;
        }
      ] & {
        sc: [string, BigNumber, boolean, number] & {
          commited: string;
          value: BigNumber;
          verified: boolean;
          myState: number;
        };
      }
    >;

    reveal(
      nonce: string,
      val: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "reveal(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seeCommit(overrides?: CallOverrides): Promise<[string]>;

    "seeCommit()"(overrides?: CallOverrides): Promise<[string]>;

    setFinishedState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFinishedState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMajority(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMajority()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRevealingState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setRevealingState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    showCurrentState(overrides?: CallOverrides): Promise<[number]>;

    "showCurrentState()"(overrides?: CallOverrides): Promise<[number]>;

    state(overrides?: CallOverrides): Promise<[number]>;

    "state()"(overrides?: CallOverrides): Promise<[number]>;
  };

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimReward()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commit(
    h: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "commit(bytes32)"(
    h: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  geCommitValue(_sender: string, overrides?: CallOverrides): Promise<BigNumber>;

  "geCommitValue(address)"(
    _sender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  generateHash(
    nonce: string,
    val: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "generateHash(string,uint256)"(
    nonce: string,
    val: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getMajority(overrides?: CallOverrides): Promise<number>;

  "getMajority()"(overrides?: CallOverrides): Promise<number>;

  getNoVoters(overrides?: CallOverrides): Promise<BigNumber>;

  "getNoVoters()"(overrides?: CallOverrides): Promise<BigNumber>;

  getYesVoters(overrides?: CallOverrides): Promise<BigNumber>;

  "getYesVoters()"(overrides?: CallOverrides): Promise<BigNumber>;

  participants(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, boolean, number] & {
      commited: string;
      value: BigNumber;
      verified: boolean;
      myState: number;
    }
  >;

  "participants(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, boolean, number] & {
      commited: string;
      value: BigNumber;
      verified: boolean;
      myState: number;
    }
  >;

  reveal(
    nonce: string,
    val: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "reveal(string,uint256)"(
    nonce: string,
    val: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seeCommit(overrides?: CallOverrides): Promise<string>;

  "seeCommit()"(overrides?: CallOverrides): Promise<string>;

  setFinishedState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFinishedState()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMajority(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMajority()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRevealingState(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setRevealingState()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  showCurrentState(overrides?: CallOverrides): Promise<number>;

  "showCurrentState()"(overrides?: CallOverrides): Promise<number>;

  state(overrides?: CallOverrides): Promise<number>;

  "state()"(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    claimReward(overrides?: CallOverrides): Promise<void>;

    "claimReward()"(overrides?: CallOverrides): Promise<void>;

    commit(h: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "commit(bytes32)"(
      h: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    geCommitValue(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "geCommitValue(address)"(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateHash(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "generateHash(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getMajority(overrides?: CallOverrides): Promise<number>;

    "getMajority()"(overrides?: CallOverrides): Promise<number>;

    getNoVoters(overrides?: CallOverrides): Promise<BigNumber>;

    "getNoVoters()"(overrides?: CallOverrides): Promise<BigNumber>;

    getYesVoters(overrides?: CallOverrides): Promise<BigNumber>;

    "getYesVoters()"(overrides?: CallOverrides): Promise<BigNumber>;

    participants(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean, number] & {
        commited: string;
        value: BigNumber;
        verified: boolean;
        myState: number;
      }
    >;

    "participants(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean, number] & {
        commited: string;
        value: BigNumber;
        verified: boolean;
        myState: number;
      }
    >;

    reveal(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "reveal(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    seeCommit(overrides?: CallOverrides): Promise<string>;

    "seeCommit()"(overrides?: CallOverrides): Promise<string>;

    setFinishedState(overrides?: CallOverrides): Promise<void>;

    "setFinishedState()"(overrides?: CallOverrides): Promise<void>;

    setMajority(overrides?: CallOverrides): Promise<number>;

    "setMajority()"(overrides?: CallOverrides): Promise<number>;

    setRevealingState(overrides?: CallOverrides): Promise<void>;

    "setRevealingState()"(overrides?: CallOverrides): Promise<void>;

    showCurrentState(overrides?: CallOverrides): Promise<number>;

    "showCurrentState()"(overrides?: CallOverrides): Promise<number>;

    state(overrides?: CallOverrides): Promise<number>;

    "state()"(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimReward()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commit(
      h: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "commit(bytes32)"(
      h: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    geCommitValue(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "geCommitValue(address)"(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateHash(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "generateHash(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMajority(overrides?: CallOverrides): Promise<BigNumber>;

    "getMajority()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNoVoters(overrides?: CallOverrides): Promise<BigNumber>;

    "getNoVoters()"(overrides?: CallOverrides): Promise<BigNumber>;

    getYesVoters(overrides?: CallOverrides): Promise<BigNumber>;

    "getYesVoters()"(overrides?: CallOverrides): Promise<BigNumber>;

    participants(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "participants(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reveal(
      nonce: string,
      val: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "reveal(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seeCommit(overrides?: CallOverrides): Promise<BigNumber>;

    "seeCommit()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFinishedState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFinishedState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMajority(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMajority()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRevealingState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setRevealingState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    showCurrentState(overrides?: CallOverrides): Promise<BigNumber>;

    "showCurrentState()"(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    "state()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimReward()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commit(
      h: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "commit(bytes32)"(
      h: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    geCommitValue(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "geCommitValue(address)"(
      _sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateHash(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "generateHash(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMajority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getMajority()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNoVoters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNoVoters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getYesVoters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getYesVoters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participants(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "participants(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reveal(
      nonce: string,
      val: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "reveal(string,uint256)"(
      nonce: string,
      val: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seeCommit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "seeCommit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFinishedState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFinishedState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMajority(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMajority()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRevealingState(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setRevealingState()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    showCurrentState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "showCurrentState()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "state()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
