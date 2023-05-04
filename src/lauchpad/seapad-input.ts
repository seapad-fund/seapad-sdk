import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { GasBudget, OptionTx, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';
const version_default = "0x24750c4da43beea085caa121477f36eeb529255c867773069d64de153f3a6a09"
export class SeaPadInput extends SeaPadFunc<TransactionBlock> {
  _version?: string;
  _module: string;
  _packageObjectId: string;

  constructor(packageObjectId: string, module: string, version?: string) {
    super();
    this._packageObjectId = packageObjectId;
    this._module = module;
    this._version = version?.length? version: version_default
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
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::change_admin`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.to),
        tx.pure(this._version)
      ],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::change_owner`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.new_owner),
        tx.pure(this._version)
      ],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  createProject(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      linear_time: number | 0;
      coin_decimals: number;
      token_decimals: number;
      require_kyc: boolean;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::create_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.owner),
        tx.pure(args.vesting_type),
        tx.pure(args.coin_decimals),
        tx.pure(args.token_decimals),
        tx.pure(args.linear_time),
        tx.pure(args.require_kyc),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  addMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::add_milestone`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.time),
        tx.pure(args.percent),
        tx.object(clock),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  resetMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::reset_milestone`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  setupProject(
    types: { COIN: string; TOKEN: string },
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
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::setup_project`,
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
        tx.object(clock),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  saveProfile(
    types: { COIN: string; TOKEN: string },
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
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::save_profile`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.name),
        tx.pure(args.twitter),
        tx.pure(args.discord),
        tx.pure(args.telegram),
        tx.pure(args.website),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  addWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::add_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.user_list),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  removeWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::remove_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.user_list),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  startFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::start_fund_raising`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.object(clock),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  buy(
    types: { COIN: string; TOKEN: string },
    args: { coins: string[]; amount: string; project: string; kyc: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    const coin_trans: TransactionArgument = manageObjectCoin(
      types.COIN,
      args.coins,
      args.amount,
      tx,
    );

    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::buy`,
      arguments: [
        coin_trans,
        tx.pure(args.amount),
        tx.pure(args.project),
        tx.object(clock),
        tx.pure(args.kyc),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });

    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  endFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::end_fund_raising`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.object(clock),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  endRefund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::end_refund`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  distributeRaisedFund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::distribute_raised_fund`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  refundTokenToOwner(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::refund_token_to_owner`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  depositProject(
    types: { COIN: string; TOKEN: string },
    args: { coins: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    const coin_trans: TransactionArgument = manageObjectCoin(
      types.TOKEN,
      args.coins,
      args.value,
      tx,
    );

    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::deposit_by_owner`,
      arguments: [
        coin_trans, tx.pure(args.value),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  userClaimToken(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::claim_token`,
      arguments: [
        tx.pure(args.project),
        tx.object(clock),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  claimRefund(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::claim_refund`,
      arguments: [
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  vote(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::vote`,
      arguments: [
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  addMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      user: string;
      max_allocate: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::set_max_allocate`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.user),
        tx.pure(args.max_allocate),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  removeMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${this._getPackageObjectId(packageObjectId)}::${
        this._module
      }::set_max_allocate`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.user),
        tx.pure(args.project),
        tx.pure(this._version)
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  splitCoin(amount: number, to: string): TransactionBlock {
    const tx = new TransactionBlock();
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
    tx.transferObjects([coin], tx.object(to));
    return tx;
  }

  splitCoins(amounts: string[], to: string): TransactionBlock {
    const tx = new TransactionBlock();
    const [coin] = tx.splitCoins(
      tx.gas,
      amounts.map((amount) => tx.pure(amount)),
    );
    tx.transferObjects([coin], tx.object(to));
    return tx;
  }
}
