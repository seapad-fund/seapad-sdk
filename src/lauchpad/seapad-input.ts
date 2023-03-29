import { TransactionBlock } from '@mysten/sui.js';
import { OptionTx, SeaPadFunc } from './seapad-func';

export type GasBudget = number | null;

export function getGasBudget(gasBudget?: GasBudget): number {
  if (typeof gasBudget == undefined || gasBudget == null || gasBudget < 1000) {
    return 5000;
  } else {
    return gasBudget;
  }
}

export class SeaPadInput extends SeaPadFunc<TransactionBlock> {
  _packageObjectId: string;
  _module: string;

  constructor(packageObjectId: string, module: string) {
    super();
    this._packageObjectId = packageObjectId;
    this._module = module;
  }

  changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::change_admin`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.to)],
    });
    return tx;
  }
  changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::change_owner`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.new_owner)],
    });
    return tx;
  }
  createProject(
    types: { COIN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      coin_metadata: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::create_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.owner),
        tx.pure(args.vesting_type),
        tx.pure(args.coin_metadata),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  addMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::add_milestone`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.time),
        tx.pure(args.percent),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  resetMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::reset_milestone`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  setupProject(
    types: { COIN: string },
    args: {
      admin_cap: string;
      project: string;
      round: number;
      usewhitelist: boolean;
      swap_ratio_sui: string;
      swap_ratio_token: string;
      max_allocate: string;
      start_time: number;
      end_time: number;
      soft_cap: string;
      hard_cap: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::setup_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.round),
        tx.pure(args.usewhitelist),
        tx.pure(args.swap_ratio_sui),
        tx.pure(args.swap_ratio_token),
        tx.pure(args.max_allocate),
        tx.pure(args.start_time),
        tx.pure(args.end_time),
        tx.pure(args.soft_cap),
        tx.pure(args.hard_cap),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  saveProfile(
    types: { COIN: string },
    args: {
      admin_cap: string;
      project: string;
      name: string;
      twitter: string;
      discord: string;
      telegram: string;
      website: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::save_profile`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.name),
        tx.pure(args.twitter),
        tx.pure(args.discord),
        tx.pure(args.telegram),
        tx.pure(args.website),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::add_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.makeMoveVec({ objects: args.user_list.map((id) => tx.object(id)) }),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  removeWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::remove_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.makeMoveVec({ objects: args.user_list.map((id) => tx.object(id)) }),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  startFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::start_fund_raising`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  buy(
    types: { COIN: string },
    args: { coins: string[]; amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::buy`,
      arguments: [
        tx.makeMoveVec({ objects: args.coins.map((id) => tx.object(id)) }),
        tx.pure(args.amount),
        tx.pure(args.project),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  endFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::end_fund_raising`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  endRefund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::end_refund`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  distributeRaisedFund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::distribute_raised_fund`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  refundTokenToOwner(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::refund_token_to_owner`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  depositProject(
    types: { COIN: string },
    args: { coins: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::deposit_by_owner`,
      arguments: [
        tx.makeMoveVec({ objects: args.coins.map((id) => tx.object(id)) }),
        tx.pure(args.value),
        tx.pure(args.project),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  userClaimToken(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::claim_token`,
      arguments: [tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  claimRefund(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::claim_refund`,
      arguments: [tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  vote(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::vote`,
      arguments: [tx.pure(args.project)],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  addMaxAllocate(
    types: { COIN: string },
    args: {
      admin_cap: string;
      user: string;
      max_allocate: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.user),
        tx.pure(args.max_allocate),
        tx.pure(args.project),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  removeMaxAllocate(
    types: { COIN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.user),
        tx.pure(args.project),
      ],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  splitCoin(splits: number[]): TransactionBlock {
    const tx = new TransactionBlock();
    tx.splitCoins(
      tx.gas,
      tx.makeMoveVec({ objects: splits.map((id) => tx.pure(id)) }),
    );
    return tx;
  }
}
