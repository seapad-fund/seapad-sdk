import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadClaimPortalFunc } from './seapad-claim-portal-func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadClaimPortalInput extends SeaPadClaimPortalFunc<TransactionBlock> {
  _packageObjectId: string;
  _module: string;

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


  claim(
    types: {COIN: string },
    args: {
      project: string,
      version: string
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::claim`,
      arguments: [
        tx.pure(args.project),
        tx.pure(clock),
        tx.pure(args.version),
      ],
      typeArguments: [],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }

}
