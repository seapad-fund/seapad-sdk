import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { SeaPadStakePoolInput } from './seapad-sp-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';

export class SeapadWalletSpAdapter extends SeaPadStakePoolFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {
  _walletContextState: WalletContextState;
  _seaPadStakePoolInput: SeaPadStakePoolInput;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
  ) {
    super();
    this._seaPadStakePoolInput = new SeaPadStakePoolInput(
      packageObjectId,
      module,
    );
    this._walletContextState = walletContextState;
  }

  async registerPool(
    types: { S: string; R: string },
    args: {
      num_rewards: string;
      rewards: string;
      duration: string;
      global_config: string;
      decimalS: number;
      decimalR: number;
      duration_unstake_time_ms: number;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.registerPool(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async stake(
    types: { S: string; R: string },
    args: { pool: string; coins: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.stake(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async unstake(
    types: { S: string; R: string },
    args: { pool: string; stake_amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.unstake(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async harvest(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.harvest(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async depositRewardCoins(
    types: { S: string; R: string },
    args: { pool: string; num_rewards: string; reward_coins: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.depositRewardCoins(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async enableEmergency(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.enableEmergency(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async emergencyUnstake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.emergencyUnstake(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async withdrawRewardToTreasury(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadStakePoolInput.withdrawRewardToTreasury(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }

  buildTx(
    message: TransactionBlock,
  ): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'> {
    return {
      transactionBlock: message,
      options: {
        showInput: false,
        showEffects: true,
        showEvents: true,
        showObjectChanges: false,
        showBalanceChanges: false,
      },
      requestType: 'WaitForEffectsCert',
    };
  }
}
