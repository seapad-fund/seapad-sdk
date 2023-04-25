import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
} from '@mysten/sui.js';
import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { SeaPadStakePoolInput } from './seapad-sp-input';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeaPadStakePoolAdapter extends SeaPadStakePoolFunc<
  Promise<SuiTransactionBlockResponse>
> {
  _suiProvider: JsonRpcProvider;
  _seaPadStakePoolInput: SeaPadStakePoolInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadStakePoolInput = new SeaPadStakePoolInput(
      packageObjectId,
      module,
    );
    this._signer = signer;
    this._suiProvider = signer.provider;
  }

  _getOptionTx(optionTx: OptionTx): OptionTx {
    if (optionTx) {
      return optionTx;
    }
    return {
      options: {
        showInput: true,
        showEffects: true,
        showEvents: true,
        showObjectChanges: false,
        showBalanceChanges: false,
      },
      requestType: 'WaitForEffectsCert',
    };
  }

  async registerPool(
    types: { S: string; R: string },
    args: {
      num_rewards: string;
      duration: string;
      global_config: string;
      decimalS: number;
      decimalR: number;
      duration_unstake_time_ms: number;
      max_stake: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    let _coins: string[] = await getCoinObjects(types.R, args.num_rewards, userAddress, this._suiProvider)
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.registerPool(
        types,
        { ...args, rewards: _coins },
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async stake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    let _coins: string[] = await getCoinObjects(types.R, args.amount, userAddress, this._suiProvider)
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.stake(
        types,
        { ...args, coins: _coins },
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async unstake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.unstake(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async harvest(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.harvest(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async depositRewardCoins(
    types: { S: string; R: string },
    args: {
      pool: string;
      num_rewards: string;
      global_config: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    let _coins: string[] = await getCoinObjects(types.R, args.num_rewards, userAddress, this._suiProvider)
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.depositRewardCoins(
        types,
        { ...args, reward_coins: _coins },
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async enableEmergency(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.enableEmergency(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async emergencyUnstake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.emergencyUnstake(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async withdrawRewardToTreasury(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadStakePoolInput.withdrawRewardToTreasury(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId
      ),
      ...this._getOptionTx(optionTx),
    });
  }
}
