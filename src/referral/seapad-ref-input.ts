import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadReferralFunc } from './seapad-ref-func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadReferralInput extends SeaPadReferralFunc<TransactionBlock> {

  _module: string;
  _packageObjectId: string;

  constructor(packageObjectId: string, module: string) {
    super();
    this._packageObjectId = packageObjectId;
    this._module = module;
  }

  _getPackageObjectId = (packageObjectId?: string | null) => {
    if (packageObjectId != null && packageObjectId != undefined) {
      return packageObjectId;
    }
    return this._packageObjectId;
  };

  changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::change_admin`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.to)],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  createProject(
    types: { COIN: string; },
    args: {
      admin_cap: string;
      distribute_time_ms: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::create_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.distribute_time_ms),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  upsertReferral(
    types: { COIN: string; },
    args: { admin_cap: string; referral: string; users: string[]; rewards: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::upsert_Referral`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.referral),
        tx.pure(args.users),
        tx.pure(args.rewards),
        // tx.object(clock),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  removeReferral(
    types: { COIN: string; },
    args: { admin_cap: string; referral: string, users: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::remove_Referral`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.referral),
        tx.pure(args.users),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)

    return tx;
  }
  updateDistributeTime(types: { COIN: string; }, args: { admin_cap: string; distribute_time_ms: string; referral: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::update_distribute_time`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.distribute_time_ms),
        tx.pure(args.referral),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)

    return tx;
  }
  startClaimProject(
    types: { COIN: string; },
    args: { admin_cap: string; referral: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::start_claim_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.referral),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)

    return tx;
  }

  claimReward(
    types: { COIN: string; },
    args: { referral: string; },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::claim_reward`,
      arguments: [
        tx.pure(args.referral),
        tx.object(clock),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)

    return tx;
  }

  closeProject(
    types: { COIN: string; },
    args: { admin_cap: string; referral: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::close_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.referral),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)

    return tx;
  }
  depositProjectFund(
    types: { COIN: string; },
    args: { coins: string[]; amount: string; referral: string; },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    const coin_trans: TransactionArgument = manageObjectCoin(
      types.COIN,
      args.coins,
      args.amount,
      tx,
    );

    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::deposit_project_fund`,
      arguments: [
        tx.pure(args.referral),
        coin_trans,
      ],
      typeArguments: [types.COIN],
    });

    tx = configGasBudget(tx, gasBudget)

    return tx;
  }
  withdrawProjectFund(
    types: { COIN: string; },
    args: { admin_cap: string; referral: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::withdraw_project_fund`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.referral),
        tx.pure(args.to),
      ],
      typeArguments: [types.COIN],
    });
    tx = configGasBudget(tx, gasBudget)

    return tx;
  }

}
