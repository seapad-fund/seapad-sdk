import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadNftCampaignFunc } from './seapad-nft-campaign-func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadNftCampaignInput extends SeaPadNftCampaignFunc<TransactionBlock> {
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


  claimNft(
    types: { },
    args: { campaign: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): TransactionBlock {
    let tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module
        }::nft_campaign`,
      arguments: [tx.pure(args.campaign), tx.pure(clock)],
      typeArguments: [],
    });
    tx = configGasBudget(tx, gasBudget)
    return tx;
  }

}
