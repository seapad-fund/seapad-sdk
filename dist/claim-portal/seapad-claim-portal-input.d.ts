import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadClaimPortalFunc } from './seapad-claim-portal-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadClaimPortalInput extends SeaPadClaimPortalFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    claim(types: {
        COIN: string;
    }, args: {
        project: string;
        version: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    addFunds(types: {
        COIN: string;
    }, args: {
        admin: string;
        owners: string[];
        values: string[];
        coins: string[];
        totalFund: string;
        project: string;
        registry: string;
        version: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
}
//# sourceMappingURL=seapad-claim-portal-input.d.ts.map