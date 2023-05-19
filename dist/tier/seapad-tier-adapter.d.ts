import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { SeaPadTierFunc } from './seapad-tier-func';
import { SeaPadTierInput } from './seapad-tier-input';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadTierAdapter extends SeaPadTierFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadTierInput: SeaPadTierInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    _getOptionTx(optionTx: OptionTx): OptionTx;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    createPool(types: {
        TOKEN: string;
    }, args: {
        admin_cap: string;
        minLock: string;
        lockPeriodMs: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse>;
    setEmergency(types: {
        TOKEN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        emergency: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse>;
    lock(types: {
        TOKEN: string;
    }, args: {
        amount: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse>;
    unlock(types: {
        TOKEN: string;
    }, args: {
        amount: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse>;
    unlockEmergency(types: {
        TOKEN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse>;
}
//# sourceMappingURL=seapad-tier-adapter.d.ts.map