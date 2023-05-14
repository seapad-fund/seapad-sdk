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
     * @param args _admin: &RAdminCap, referral: &mut Referral<COIN>, users: vector<address>, rewards: vector<u64>
     */
    abstract upsertReferral(types: {
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
     * @param args _admin: &RAdminCap, referral: &mut Referral<COIN>, users: vector<address>,
     */
    abstract removeReferral(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
      *
      * @param types <COIN>
      * @param args _admin: &RAdminCap, distribute_time_ms: u64, referral: &mut Referral<COIN>
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
     * @param args _admin: &RAdminCap, referral: &mut Referral<COIN>
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
     * @param args referral: &mut Referral<COIN>
     */
    abstract claimReward(types: {
        COIN: string;
    }, args: {
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
    /**
     *
     * @param types <COIN>
     * @param args _admin: &RAdminCap, referral: &mut Referral<COIN>
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
     * @param args _admin: &RAdminCap, referral: &mut Referral<COIN>, to: address
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
     * @param args _admin: &RAdminCap, referral: &mut Referral<COIN>, fund: Coin<COIN>
     */
    abstract depositProjectFund(types: {
        COIN: string;
    }, args: {
        referral: string;
        amount: string;
        coins: string[] | undefined;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
}
//# sourceMappingURL=seapad-ref-func.d.ts.map