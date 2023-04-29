import { GasBudget, OptionTx } from '../common';
export declare abstract class SeaPadNftPoolFunc<T> {
    /**
     *
     * @param types <COIN>
     * @param args admin_cap: AdminCap, to: address
     */
    abstract changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &NftAdminCap, owner: address, soft_cap_percent: u64, round: u8, use_whitelist: bool, vesting_time: u64, allocate: u64, start_time: u64, end_time: u64, system_clock: &Clock
     */
    abstract createPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        soft_cap_percent: number;
        round: number;
        use_whitelist: boolean;
        vesting_time_ms: string;
        start_time: string;
        end_time: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, cap: u64, //max of NFT to sale allocate: u64,    //max allocate per user price: u64,   //price with coin type: u8, //collection type name: string, link: string, image_url: string, description: string, project_url: string, edition: u64, thumbnail_url: string, creator: string,
     */
    abstract addCollection(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        cap: string;
        allocate: string;
        price: string;
        type: number;
        name: string;
        link: string;
        image_url: string;
        description: string;
        project_url: string;
        edition: string;
        thumbnail_url: string;
        creator: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, system_clock: &Clock
     */
    abstract startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args coin_in: &mut Coin<COIN>, nft_types:  string,  nft_amounts: vector<u64>, pool: &mut NftPool<COIN>, system_clock: &Clock
     */
    abstract buyNft(types: {
        COIN: string;
    }, args: {
        amount: string;
        coins: string[] | undefined;
        nft_types: string[];
        nft_amounts: string[];
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, system_clock: &Clock
     */
    abstract stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args pool: &mut NftPool<COIN>, system_clock: &Clock
     */
    abstract claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
      *
      * @param types <COIN>
      * @param args pool: &mut NftPool<COIN>, system_clock: &Clock
      */
    abstract claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, tos: address
     */
    abstract addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        tos: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
   *
   * @param types <COIN>
   * @param args _adminCap: &NftAdminCap, pool: &mut NftPool<COIN>, tos: address
   */
    abstract removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        froms: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _adminCap: &NftTreasuryCap, pool: &mut NftPool<COIN>, amt: u64,
     */
    abstract withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args admin_treasury_cap: NftTreasuryCap, to: address
     */
    abstract changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
}
//# sourceMappingURL=seapad-nft-func.d.ts.map