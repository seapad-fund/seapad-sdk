import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadTierFunc } from './seapad-tier-func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadTierInput extends SeaPadTierFunc<TransactionBlock> {


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

  createPool(types: { TOKEN: string; }, args: { admin_cap: string; minLock: string; lockPeriodMs: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::createPool`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.minLock),
        tx.pure(args.lockPeriodMs),
      ],
      typeArguments: [types.TOKEN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  setEmergency(types: { TOKEN: string; }, args: { admin_cap: string; pool: string; emergency: boolean; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::setEmergency`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.pool),
        tx.pure(args.emergency),
      ],
      typeArguments: [types.TOKEN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  lock(types: { TOKEN: string; }, args: { amount: string; deal: string[]; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock {
    let tx = new TransactionBlock();
    const coin_trans: TransactionArgument = manageObjectCoin(
      types.TOKEN,
      args.deal,
      args.amount,
      tx,
    );
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::lock`,
      arguments: [
        coin_trans,
        tx.pure(args.pool),
        tx.pure(clock),
      ],
      typeArguments: [types.TOKEN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  unlock(types: { TOKEN: string; }, args: { amount: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::unlock`,
      arguments: [
        tx.pure(args.amount),
        tx.pure(args.pool),
        tx.pure(clock),
      ],
      typeArguments: [types.TOKEN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }
  unlockEmergency(types: { TOKEN: string; }, args: { pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::unlockEmergency`,
      arguments: [
        tx.pure(args.pool),
        tx.pure(clock),
      ],
      typeArguments: [types.TOKEN],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }

}
