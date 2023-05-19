import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadTierFunc } from './seapad-tier-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadTierInput extends SeaPadTierFunc<TransactionBlock> {
    _module: string;
    _packageObjectId: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    createPool(types: {
        TOKEN: string;
    }, args: {
        admin_cap: string;
        minLock: string;
        lockPeriodMs: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock;
    setEmergency(types: {
        TOKEN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        emergency: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock;
    lock(types: {
        TOKEN: string;
    }, args: {
        amount: string;
        deal: string[];
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock;
    unlock(types: {
        TOKEN: string;
    }, args: {
        amount: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock;
    unlockEmergency(types: {
        TOKEN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): TransactionBlock;
}
//# sourceMappingURL=seapad-tier-input.d.ts.map