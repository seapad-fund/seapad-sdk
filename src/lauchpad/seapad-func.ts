import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadFunc<T> {
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: AdminCap, to: address
   */
  abstract changeAdmin(
    packageObjectId: string,
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: AdminCap, to: address
   */
  abstract changeOwner(
    packageObjectId: string,
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, owner: address, vesting_type: u8, coin_metadata: &CoinMetadata<COIN>,
   */
  abstract createProject(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      linear_time: number;
      coin_decimals: number;
      token_decimals: number;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, time: u64, percent: u8,
   */
  abstract addMilestone(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>,
   */
  abstract resetMilestone(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, usewhitelist: bool, swap_ratio_sui: u64, swap_ratio_token: u64, max_allocate: u64, start_time: u64, end_time: u64, soft_cap: u64, hard_cap: u64,
   */
  abstract setupProject(
    packageObjectId: string,
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
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args _adminCap: &AdminCap, project: &mut Project<COIN>, name: vector<u8>, twitter: vector<u8>, discord: vector<u8>, telegram: vector<u8>, website: vector<u8>
   */
  abstract saveProfile(
    packageObjectId: string,
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
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, user: address
   */
  abstract addWhitelist(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  abstract removeWhitelist(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>
   */
  abstract startFundRaising(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args suis: vector<Coin<SUI>>, amount: u64, project: &mut Project<COIN>
   */
  abstract buy(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { coins: string[] | undefined; amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>
   */
  abstract endFundRaising(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>
   */
  abstract endRefund(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <P, COIN>
   * @param args admin_cap: &AdminCap, project: &mut Project<COIN>, projectOwner: address,
   */
  abstract distributeRaisedFund(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args cap: &AdminCap, project: &mut Project<COIN>, projectOwner: address,
   */
  abstract refundTokenToOwner(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args coins: vector<Coin<COIN>>, value: u64, project: &mut Project<COIN>
   */
  abstract depositProject(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { coins?: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args project: &mut Project<COIN>
   */
  abstract userClaimToken(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args project: &mut Project<COIN>
   */
  abstract claimRefund(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args project: &mut Project<COIN>
   */
  abstract vote(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  abstract addMaxAllocate(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      user: string;
      max_allocate: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  abstract removeMaxAllocate(
    packageObjectId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      user: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  ///common func
  abstract splitCoin(amount: number, to: string): T;

  abstract splitCoins(amounts: string[], to: string): T;
}
