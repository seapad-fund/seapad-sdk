import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';

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
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::change_admin`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.to
      }],
      typeArguments: [],
    });
    return tx;
  }
  changeOwner(
    args: { admin_cap: string; new_owner: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::change_owner`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.new_owner
      }],
      typeArguments: [],
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
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::create_project`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.owner
      }, {
        kind: "Input",
        index: 2,
        value: args.vesting_type
      }, {
        kind: "Input",
        index: 3,
        value: args.coin_metadata
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  addMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::add_milestone`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }, {
        kind: "Input",
        index: 2,
        value: args.time
      }, {
        kind: "Input",
        index: 3,
        value: args.percent
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  resetMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget | undefined,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::reset_milestone`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }],
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
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::reset_milestone`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }, {
        kind: "Input",
        index: 2,
        value: args.round
      }, {
        kind: "Input",
        index: 3,
        value: args.usewhitelist
      }, {
        kind: "Input",
        index: 4,
        value: args.swap_ratio_sui
      }, {
        kind: "Input",
        index: 5,
        value: args.swap_ratio_token
      }, {
        kind: "Input",
        index: 6,
        value: args.max_allocate
      }, {
        kind: "Input",
        index: 7,
        value: args.start_time
      }, {
        kind: "Input",
        index: 8,
        value: args.end_time
      }, {
        kind: "Input",
        index: 9,
        value: args.soft_cap
      }, {
        kind: "Input",
        index: 10,
        value: args.hard_cap
      }],
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
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::save_profile`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }, {
        kind: "Input",
        index: 2,
        value: args.name
      }, {
        kind: "Input",
        index: 3,
        value: args.twitter
      }, {
        kind: "Input",
        index: 4,
        value: args.discord
      }, {
        kind: "Input",
        index: 5,
        value: args.telegram
      }, {
        kind: "Input",
        index: 6,
        value: args.website
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::add_whitelist`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }, {
        kind: "Input",
        index: 2,
        value: args.user_list
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  removeWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::removeWhitelist`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }, {
        kind: "Input",
        index: 2,
        value: args.user_list
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  startFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::removeWhitelist`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  buy(
    types: { COIN: string },
    args: { coins: string[]; amount: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::buy`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.coins
      }, {
        kind: "Input",
        index: 1,
        value: args.amount
      }, {
        kind: "Input",
        index: 2,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  endFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::end_fund_raising`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  endRefund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::end_refund`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  distributeRaisedFund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::distribute_raised_fund`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  refundTokenToOwner(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::refund_token_to_owner`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  depositProject(
    types: { COIN: string },
    args: { coins: string[]; value: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::deposit_by_owner`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.coins
      }, {
        kind: "Input",
        index: 1,
        value: args.value
      }, {
        kind: "Input",
        index: 2,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  userClaimToken(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::claim_token`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  claimRefund(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::claim_refund`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }
  vote(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::vote`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.project
      }],
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
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.user
      }, {
        kind: "Input",
        index: 2,
        value: args.max_allocate
      }, {
        kind: "Input",
        index: 3,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  removeMaxAllocate(
    types: { COIN: string },
    args: { admin_cap: string; user: string; project: string },
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
      arguments: [{
        kind: "Input",
        index: 0,
        value: args.admin_cap
      }, {
        kind: "Input",
        index: 1,
        value: args.user
      }, {
        kind: "Input",
        index: 2,
        value: args.project
      }],
      typeArguments: [types.COIN],
    });
    return tx;
  }

  splitCoin(coinId: string, splits: number[]): TransactionBlock {
    const tx = new TransactionBlock();
    let amounts: ({ kind: "Input"; index: number; type?: "object" | "pure" | undefined; value?: any; } | { kind: "GasCoin"; } | { kind: "Result"; index: number; } | { kind: "NestedResult"; index: number; resultIndex: number; })[] = []
    splits.forEach((obj, i) => {
      amounts.push({
        kind: "Input",
        index: i,
        value: obj
      })
    });
    tx.splitCoins({
      kind: "Input",
      index: 0,
      value: coinId
    }, amounts);
    return tx;
  }
}
