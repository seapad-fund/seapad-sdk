import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';

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

  _getPackageObjectId = (packageObjectId?: string | null) => {
    if (packageObjectId != null && packageObjectId != undefined) {
      return packageObjectId
    }
    return this._packageObjectId
  }

  registerPool(
    types: { S: string; R: string },
    args: {
      num_rewards: string;
      rewards: string[];
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
  ): TransactionBlock {
    let tx = new TransactionBlock();
    let coin_trans: TransactionArgument = manageObjectCoin(types.R, args.rewards, args.num_rewards, tx)

    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::register_pool`,
      arguments: [
        coin_trans,
        tx.pure(args.duration),
        tx.pure(args.global_config),
        tx.pure(args.decimalS),
        tx.pure(args.decimalR),
        tx.pure(clock),
        tx.pure(args.duration_unstake_time_ms),
        tx.pure(args.max_stake)
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  stake(
    types: { S: string; R: string },
    args: { pool: string; coins: string[]; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    let coin_trans: TransactionArgument = manageObjectCoin(types.R, args.coins, args.amount, tx)
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::stake`,
      arguments: [
        tx.pure(args.pool),
        coin_trans,
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  unstake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::unstake`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.amount),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  harvest(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::harvest`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  depositRewardCoins(
    types: { S: string; R: string },
    args: { pool: string; num_rewards: string; reward_coins: string[]; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    let coin_trans: TransactionArgument = manageObjectCoin(types.R, args.reward_coins, args.num_rewards, tx)

    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::deposit_reward_coins`,
      arguments: [
        tx.pure(args.pool),
        coin_trans,
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  enableEmergency(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::enable_emergency`,
      arguments: [tx.pure(args.pool), tx.pure(args.global_config)],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  emergencyUnstake(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::emergency_unstake`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.amount),
        tx.pure(args.global_config),
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  withdrawRewardToTreasury(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::withdraw_reward_to_treasury`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(args.amount),
        tx.pure(args.global_config),
        tx.pure(clock),
      ],
      typeArguments: [types.S, types.R],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
}
