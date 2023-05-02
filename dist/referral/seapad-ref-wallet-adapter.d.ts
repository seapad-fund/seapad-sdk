import { SeaPadReferralFunc } from './seapad-ref-func';
import { SeaPadReferralInput } from './seapad-ref-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadReferralWalletAdapter extends SeaPadReferralFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _SeaPadReferralInput: SeaPadReferralInput;
    _suiProvider: JsonRpcProvider;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string, suiProvider: JsonRpcProvider);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    upsertReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
        rewards: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeReferal(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        users: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    startClaimProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimReward(types: {
        COIN: string;
    }, args: {
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    closeProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    withdrawProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    depositProjectFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        referral: string;
        amount: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-ref-wallet-adapter.d.ts.map