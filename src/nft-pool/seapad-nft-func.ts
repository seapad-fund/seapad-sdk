import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadNftPoolFunc<T> {
  /**
   *
   * @param types <COIN>
   * @param args admin_cap: AdminCap, to: address
   */
  abstract changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args adminCap: &NftAdminCap, owner: address, soft_cap: u64, hard_cap: u64, round: u8, use_whitelist: bool, vesting_time: u64, allocate: u64, start_time: u64, end_time: u64, system_clock: &Clock
   */
  abstract createPool(
    types: { COIN: string },
    args: {
      admin_cap: string,
      owner: string,
      soft_cap: string,
      hard_cap: string,
      round: number,
      use_whitelist: boolean,
      vesting_time: string,
      allocate: string,
      start_time: string,
      end_time: string,
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, name: vector<u8>, description: vector<u8>, url: vector<u8>, price: u64, type: u8
   */
  abstract addTemplate(
    types: { COIN: string },
    args: { admin_cap: string, pool: string, name: string, description: string, url: string, price: string, type: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, system_clock: &Clock
   */
  abstract startPool(
    types: { COIN: string },
    args: { admin_cap: string, pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;

  /**
   *
   * @param types <COIN>
   * @param args coin_in: &mut Coin<COIN>, nft_types:  vector<u8>,  nft_amounts: vector<u64>, pool: &mut NftPool<COIN>, system_clock: &Clock
   */
  abstract buyNft(
    types: { COIN: string },
    args: {
      amount: string,
      coins: string[],
      nft_types: string,
      nft_amounts: string,
      pool: string
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, system_clock: &Clock
   */
  abstract stopPool(
    types: { COIN: string },
    args: {
      admin_cap: string, pool: string
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args pool: &mut NftPool<COIN>, system_clock: &Clock
   */
  abstract claimNft(
    types: { COIN: string },
    args: { pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
    *
    * @param types <COIN>
    * @param args pool: &mut NftPool<COIN>, system_clock: &Clock
    */
  abstract claimRefund(
    types: { COIN: string },
    args: { pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, tos: address
   */
  abstract addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string, pool: string, tos: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args _adminCap: &NftTreasuryCap, pool: &mut NftPool<COIN>, amt: u64,
   */
  abstract withdrawFund(
    types: { COIN: string },
    args: { admin_cap: string, pool: string, amt: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
  /**
   *
   * @param types <COIN>
   * @param args admin_treasury_cap: NftTreasuryCap, to: address
   */
  abstract changeTreasuryAdmin(
    types: { COIN: string },
    args: { admin_treasury_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): T;
}
