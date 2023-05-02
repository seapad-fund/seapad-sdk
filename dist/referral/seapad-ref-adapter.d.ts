import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { SeaPadReferralFunc } from './seapad-ref-func';
import { SeaPadReferralInput } from './seapad-ref-input';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadReferralAdapter extends SeaPadReferralFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadReferralInput: SeaPadReferralInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    _getOptionTx(optionTx: OptionTx): OptionTx;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    upsertReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
        rewards: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    removeReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    startClaimProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    claimReward(types: {
        COIN: string;
    }, args: {
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    closeProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    depositProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        amount: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    withdrawProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
}
//# sourceMappingURL=seapad-ref-adapter.d.ts.map