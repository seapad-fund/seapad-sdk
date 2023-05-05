import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadFunc<T> {
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: AdminCap, to: address
   */
  abstract changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: AdminCap, to: address
   */
  abstract changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param argsadminCap: &AdminCap,
                                                 owner: address,
                                                 vesting_type: u8,
                                                 cliff_time: u64,
                                                 tge: u64,
                                                 unlock_percent: u64,
                                                 coin_decimals: u8,
                                                 token_decimals: u8,
                                                 linear_time_ms: u64,
                                                 require_kyc: bool,
                                                 version: &mut Version,
                                                 clock: &Clock,
   */
  abstract createProject(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      cliff_time: string;
      tge: string;
      unlock_percent: string;
      linear_time: number;
      coin_decimals: number;
      token_decimals: number;
      require_kyc: boolean;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, time: u64, percent: u8,
   */
  abstract addMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>,
   */
  abstract resetMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, usewhitelist: bool, swap_ratio_sui: u64, swap_ratio_token: u64, max_allocate: u64, start_time: u64, end_time: u64, soft_cap: u64, hard_cap: u64,
   */
  abstract setupProject(
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
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args _adminCap: &AdminCap, project: &mut Project<COIN>, name: vector<u8>, twitter: vector<u8>, discord: vector<u8>, telegram: vector<u8>, website: vector<u8>
   */
  abstract saveProfile(
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
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, user: address
   */
  abstract addWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  abstract removeWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>
   */
  abstract startFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args suis: vector<Coin<SUI>>, amount: u64, project: &mut Project<COIN>
   */
  abstract buy(
    types: { COIN: string; TOKEN: string },
    args: {
      coins: string[] | undefined;
      amount: string;
      project: string;
      kyc: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>
   */
  abstract endFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>
   */
  abstract endRefund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <P, COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, projectOwner: address,
   */
  abstract distributeRaisedFund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args cap: &AdminCap, project: &mut Project<COIN>, projectOwner: address,
   */
  abstract refundTokenToOwner(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args coins: vector<Coin<COIN>>, value: u64, project: &mut Project<COIN>
   */
  abstract depositProject(
    types: { COIN: string; TOKEN: string },
    args: { coins?: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args project: &mut Project<COIN>
   */
  abstract userClaimToken(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args project: &mut Project<COIN>
   */
  abstract claimRefund(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args project: &mut Project<COIN>
   */
  abstract vote(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  abstract addMaxAllocate(
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
  ): T;

  abstract removeMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      user: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  ///common func
  abstract splitCoin(amount: number, to: string): T;

  abstract splitCoins(amounts: string[], to: string): T;
}
