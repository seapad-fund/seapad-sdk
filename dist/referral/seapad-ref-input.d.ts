import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadReferralFunc } from './seapad-ref-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadReferralInput extends SeaPadReferralFunc<TransactionBlock> {
    _module: string;
    _packageObjectId: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        distribute_time_ms: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    upsertReferral(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
        rewards: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    removeReferral(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    updateDistributeTime(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        distribute_time_ms: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock;
    startClaimProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    claimReward(types: {
        COIN: string;
    }, args: {
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    closeProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    depositProjectFund(types: {
        COIN: string;
    }, args: {
        coins: string[];
        amount: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    withdrawProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
}
//# sourceMappingURL=seapad-ref-input.d.ts.map