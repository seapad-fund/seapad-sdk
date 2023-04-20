import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { GasBudget, OptionTx, getGasBudget } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadStakePoolInput extends SeaPadStakePoolFunc<TransactionBlock> {
  _packageObjectId: string;
  _module: string;

  constructor(packageObjectId: string, module: string) {
    super();
    this._packageObjectId = packageObjectId;
    this._module = module;
  }

  registerPool(
    types: { S: string; R: string },
    args: {
      rewards: string;
      duration: string;
      global_config: string;
      decimalS: number;
      decimalR: number;
      duration_unstake_time_ms: number;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::register_pool`,
      arguments: [
        tx.pure(args.rewards),
        tx.pure(args.duration),
        tx.pure(args.global_config),
        tx.pure(args.decimalS),
        tx.pure(args.decimalR),
        tx.pure(clock),
        tx.pure(args.duration_unstake_time_ms),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  stake(
    types: { S: string; R: string },
    args: { pool: string; coins: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::stake`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.coins),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  unstake(
    types: { S: string; R: string },
    args: { pool: string; stake_amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::unstake`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.stake_amount),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  harvest(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::harvest`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  depositRewardCoins(
    types: { S: string; R: string },
    args: { pool: string; reward_coins: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::deposit_reward_coins`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.reward_coins),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  enableEmergency(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::enable_emergency`,
      arguments: [tx.pure(args.pool), tx.pure(args.global_config)],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  emergencyUnstake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::emergency_unstake`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.amount),
        tx.pure(args.global_config),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  withdrawRewardToTreasury(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::withdraw_reward_to_treasury`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.amount),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
}
