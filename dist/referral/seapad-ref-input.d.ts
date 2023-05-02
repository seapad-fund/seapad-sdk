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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    upsertReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
        rewards: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    removeReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
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
        admin_cap: string;
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