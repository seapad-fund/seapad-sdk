import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { SeaPadClaimPortalFunc } from './seapad-claim-portal-func';
import { GasBudget, OptionTx } from '../common';
import { SeaPadClaimPortalInput } from './seapad-claim-portal-input';
export declare class SeaPadClaimPortalAdapter extends SeaPadClaimPortalFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadNftPoolInput: SeaPadClaimPortalInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    claim(types: {
        COIN: string;
    }, args: {
        fee: string;
        project: string;
        version: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    addFunds(types: {
        COIN: string;
    }, args: {
        admin: string;
        owners: string[];
        values: string[];
        project: string;
        registry: string;
        version: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    _getOptionTx(optionTx: OptionTx): OptionTx;
}
//# sourceMappingURL=seapad-claim-portal-adapter.d.ts.map