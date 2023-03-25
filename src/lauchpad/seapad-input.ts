import { MoveCallTransaction } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';

export type GasBudget = number | null;

export function getGasBudget(gasBudget?: GasBudget): number {
  if (typeof gasBudget == undefined || gasBudget == null || gasBudget < 1000) {
    return 5000;
  } else {
    return gasBudget;
  }
}

export class SeaPadInput extends SeaPadFunc<MoveCallTransaction> {
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
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'change_admin',
      typeArguments: [],
      arguments: [args.admin_cap, args.to],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  changeOwner(
    args: { admin_cap: string; new_owner: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'change_admin',
      typeArguments: [],
      arguments: [args.admin_cap, args.new_owner],
      gasBudget: getGasBudget(gasBudget),
    };
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
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'create_project',
      typeArguments: [types.COIN],
      arguments: [
        args.admin_cap,
        args.owner,
        args.vesting_type,
        args.coin_metadata,
      ],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  addMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'add_milestone',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project, args.time, args.percent],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  resetMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget | undefined,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'reset_milestone',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
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
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'setup_project',
      typeArguments: [types.COIN],
      arguments: [
        args.admin_cap,
        args.project,
        args.round,
        args.usewhitelist,
        args.swap_ratio_sui,
        args.swap_ratio_token,
        args.max_allocate,
        args.start_time,
        args.end_time,
        args.soft_cap,
        args.hard_cap,
      ],
      gasBudget: getGasBudget(gasBudget),
    };
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
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'save_profile',
      typeArguments: [types.COIN],
      arguments: [
        args.admin_cap,
        args.project,
        args.name,
        args.twitter,
        args.discord,
        args.telegram,
        args.website,
        args.website,
      ],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'add_whitelist',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project, args.user_list],
      gasBudget: getGasBudget(gasBudget),
    };
  }

  removeWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'remove_whitelist',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project, args.user_list],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  startFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'start_fund_raising',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  buy(
    types: { COIN: string },
    args: { coins: string[]; amount: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'buy',
      typeArguments: [types.COIN],
      arguments: [args.coins, args.amount, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  endFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'end_fund_raising',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  endRefund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'end_refund',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  distributeRaisedFund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'distribute_raised_fund',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  refundTokenToOwner(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'refund_token_to_owner',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  depositProject(
    types: { COIN: string },
    args: { coins: string[]; value: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'deposit_by_owner',
      typeArguments: [types.COIN],
      arguments: [args.coins, args.value, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  userClaimToken(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'claim_token',
      typeArguments: [types.COIN],
      arguments: [args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  claimRefund(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'claim_refund',
      typeArguments: [types.COIN],
      arguments: [args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  vote(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'vote',
      typeArguments: [types.COIN],
      arguments: [args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  like(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'like',
      typeArguments: [types.COIN],
      arguments: [args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
  watch(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'watch',
      typeArguments: [types.COIN],
      arguments: [args.project],
      gasBudget: getGasBudget(gasBudget),
    };
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
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'set_max_allocate',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.user, args.max_allocate, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }

  removeMaxAllocate(
    types: { COIN: string },
    args: { admin_cap: string; user: string; project: string },
    gasBudget?: GasBudget,
  ): MoveCallTransaction {
    return {
      packageObjectId: this._packageObjectId,
      module: this._module,
      function: 'clear_max_allocate',
      typeArguments: [types.COIN],
      arguments: [args.admin_cap, args.user, args.project],
      gasBudget: getGasBudget(gasBudget),
    };
  }
}
