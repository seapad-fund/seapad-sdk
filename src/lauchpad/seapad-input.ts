import { TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { GasBudget, OptionTx, getGasBudget, manageObjectCoin } from '../common';

const clock =
  '0x0000000000000000000000000000000000000000000000000000000000000006';

export class SeaPadInput extends SeaPadFunc<TransactionBlock> {
  _module: string;

  constructor(module: string) {
    super();
    this._module = module;
  }

  changeAdmin(
    packageId: string,
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::change_admin`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.to)],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  changeOwner(
    packageId: string,
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::change_owner`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.new_owner)],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  createProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      linear_time: number | 0;
      coin_decimals: number;
      token_decimals: number;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::create_project`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.owner),
        tx.pure(args.vesting_type),
        tx.pure(args.coin_decimals),
        tx.pure(args.token_decimals),
        tx.pure(args.linear_time),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  addMilestone(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::add_milestone`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.time),
        tx.pure(args.percent),
        tx.object(clock),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));
    return tx;
  }
  resetMilestone(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::reset_milestone`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  setupProject(
    packageId: string,
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
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::setup_project`,
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
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  saveProfile(
    packageId: string,
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
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::save_profile`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.name),
        tx.pure(args.twitter),
        tx.pure(args.discord),
        tx.pure(args.telegram),
        tx.pure(args.website),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  addWhitelist(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::add_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.user_list),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  removeWhitelist(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::remove_whitelist`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.pure(args.user_list),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  startFundRaising(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::start_fund_raising`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.object(clock),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  buy(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { coins: string[]; amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    const coin_trans: TransactionArgument = manageObjectCoin(
      types.COIN,
      args.coins,
      args.amount,
      tx,
    );

    tx.moveCall({
      target: `${packageId}::${this._module}::buy`,
      arguments: [
        coin_trans,
        tx.pure(args.amount),
        tx.pure(args.project),
        tx.object(clock),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });

    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  endFundRaising(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::end_fund_raising`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.project),
        tx.object(clock),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  endRefund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::end_refund`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  distributeRaisedFund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::distribute_raised_fund`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  refundTokenToOwner(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::refund_token_to_owner`,
      arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  depositProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { coins: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    const coin_trans: TransactionArgument = manageObjectCoin(
      types.COIN,
      args.coins,
      args.value,
      tx,
    );

    tx.moveCall({
      target: `${packageId}::${this._module}::deposit_by_owner`,
      arguments: [coin_trans, tx.pure(args.value), tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  userClaimToken(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::claim_token`,
      arguments: [tx.pure(args.project), tx.object(clock)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  claimRefund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::claim_refund`,
      arguments: [tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }
  vote(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::vote`,
      arguments: [tx.pure(args.project)],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  addMaxAllocate(
    packageId: string,
    types: { COIN: string; TOKEN: string },
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
      target: `${packageId}::${this._module}::set_max_allocate`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.user),
        tx.pure(args.max_allocate),
        tx.pure(args.project),
      ],
      typeArguments: [types.COIN, types.TOKEN],
    });
    tx.setGasBudget(getGasBudget(gasBudget));

    return tx;
  }

  removeMaxAllocate(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): TransactionBlock {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${packageId}::${this._module}::set_max_allocate`,
      arguments: [
        tx.pure(args.admin_cap),
        tx.pure(args.user),
        tx.pure(args.project),
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
