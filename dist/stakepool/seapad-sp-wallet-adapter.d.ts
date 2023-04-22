import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { SeaPadStakePoolInput } from './seapad-sp-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadWalletSpAdapter extends SeaPadStakePoolFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _seaPadStakePoolInput: SeaPadStakePoolInput;
    _suiProvider: JsonRpcProvider;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string, suiProvider: JsonRpcProvider);
    registerPool(types: {
        S: string;
        R: string;
    }, args: {
        num_rewards: string;
        duration: string;
        global_config: string;
        decimalS: number;
        decimalR: number;
        duration_unstake_time_ms: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    stake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    unstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    harvest(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    depositRewardCoins(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        num_rewards: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    enableEmergency(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    emergencyUnstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    withdrawRewardToTreasury(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-sp-wallet-adapter.d.ts.map