import { SeaPadClaimPortalFunc } from './seapad-claim-portal-func';
import { SeaPadClaimPortalInput } from './seapad-claim-portal-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadWalletClaimPortalAdapter extends SeaPadClaimPortalFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _seaPadClaimPortalInput: SeaPadClaimPortalInput;
    _suiProvider: JsonRpcProvider;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string, suiProvider: JsonRpcProvider);
    claim(types: {
        COIN: string;
    }, args: {
        fee: string;
        project: string;
        version: string;
        projectRegistry: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addFunds(types: {
        COIN: string;
    }, args: {
        admin: string;
        owners: string[];
        values: string[];
        totalFund: string;
        project: string;
        registry: string;
        version: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-claim-portal-wallet-adapter.d.ts.map