import { GasBudget, OptionTx } from '../common';
export declare abstract class SeaPadReferralFunc<T> {
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
     * @param args admin_cap: &AdminCap, distribute_time_ms
     */
    abstract createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        distribute_time_ms: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _admin: &RAdminCap, referral: &mut Referal<COIN>, users: vector<address>, rewards: vector<u64>
     */
    abstract upsertReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
        rewards: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _admin: &RAdminCap, referral: &mut Referal<COIN>, users: vector<address>,
     */
    abstract removeReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
      *
      * @param types <COIN>
      * @param args _admin: &RAdminCap, distribute_time_ms: u64, referral: &mut Referal<COIN>
      */
    abstract updateDistributeTime(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        distribute_time_ms: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _admin: &RAdminCap, referral: &mut Referal<COIN>
     */
    abstract startClaimProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args referral: &mut Referal<COIN>
     */
    abstract claimReward(types: {
        COIN: string;
    }, args: {
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _admin: &RAdminCap, referral: &mut Referal<COIN>
     */
    abstract closeProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types
     * @param args _admin: &RAdminCap, referral: &mut Referal<COIN>, to: address
     * @param optionTx
     * @param gasBudget
     * @param packageObjectId
     */
    abstract withdrawProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _admin: &RAdminCap, referral: &mut Referal<COIN>, fund: Coin<COIN>
     */
    abstract depositProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        amount: string;
        coins: string[] | undefined;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
}
//# sourceMappingURL=seapad-ref-func.d.ts.map