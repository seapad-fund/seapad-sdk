import { SeaPadTierFunc } from './seapad-tier-func';
import { SeaPadTierInput } from './seapad-tier-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadTierWalletAdapter extends SeaPadTierFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _SeaPadTierInput: SeaPadTierInput;
    _suiProvider: JsonRpcProvider;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string, suiProvider: JsonRpcProvider);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    createPool(types: {
        TOKEN: string;
    }, args: {
        admin_cap: string;
        minLock: string;
        lockPeriodMs: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    setEmergency(types: {
        TOKEN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        emergency: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    lock(types: {
        TOKEN: string;
    }, args: {
        amount: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    unlock(types: {
        TOKEN: string;
    }, args: {
        amount: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    unlockEmergency(types: {
        TOKEN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-tier-wallet-adapter.d.ts.map