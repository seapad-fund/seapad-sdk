import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadNftPoolFunc } from './seapad-nft-func';
import { GasBudget, OptionTx, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadNftPoolInput extends SeaPadNftPoolFunc<TransactionBlock> {

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

  changeAdmin(args: { admin_cap: string; to: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::change_admin`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.to)],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  createPool(types: { COIN: string; }, args: { admin_cap: string; owner: string; soft_cap: string; hard_cap: string; round: number; use_whitelist: boolean; vesting_time: string; allocate: string; start_time: string; end_time: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::create_pool`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.owner),
        tx.pure(args.soft_cap),
        tx.pure(args.hard_cap),
        tx.pure(args.round),
        tx.pure(args.use_whitelist),
        tx.pure(args.vesting_time),
        tx.pure(args.allocate),
        tx.pure(args.start_time),
        tx.pure(args.end_time),
        tx.pure(clock),
      ],
      typeArguments: [types.COIN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  addTemplate(types: { COIN: string; }, args: { admin_cap: string; pool: string; name: string; description: string; url: string; price: string; type: number; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::add_template`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.pool),
        tx.pure(args.name),
        tx.pure(args.description),
        tx.pure(args.url),
        tx.pure(args.price),
        tx.pure(args.type),
        tx.pure(clock)
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  startPool(types: { COIN: string; }, args: { admin_cap: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::start_pool`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.pool),
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  buyNft(types: { COIN: string; }, args: { amount: string; coins: string[]; nft_types: string; nft_amounts: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    let coin_trans: TransactionArgument = manageObjectCoin(types.COIN, args.coins, args.amount, tx)

    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::buy_nft`,
      arguments: [
        coin_trans,
        tx.pure(args.nft_types),
        tx.pure(args.nft_amounts),
        tx.pure(args.pool),
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  stopPool(types: { COIN: string; }, args: { admin_cap: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::stop_pool`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.pool)
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  claimNft(types: { COIN: string; }, args: { pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::claim_nft`,
      arguments: [
        tx.pure(args.pool)
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  claimRefund(types: { COIN: string; }, args: { pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::claim_refund`,
      arguments: [
        tx.pure(args.pool)
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  addWhitelist(types: { COIN: string; }, args: { admin_cap: string; pool: string; tos: string[]; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::add_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.pool),
        tx.pure(args.tos)
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  withdrawFund(types: { COIN: string; }, args: { admin_cap: string; pool: string; amt: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::add_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.pool),
        tx.pure(args.amt)
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  changeTreasuryAdmin(types: { COIN: string; }, args: { admin_treasury_cap: string; to: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::add_whitelist`,
      arguments: [
        tx.pure(args.admin_treasury_cap),
        tx.pure(args.to),
      ],
      typeArguments: [types.COIN]
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }


}
