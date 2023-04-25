import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { SeaPadStakePoolInput } from './seapad-sp-input';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadStakePoolAdapter extends SeaPadStakePoolFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadStakePoolInput: SeaPadStakePoolInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    _getOptionTx(optionTx: OptionTx): OptionTx;
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
        max_stake: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    stake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    unstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    harvest(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    depositRewardCoins(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        num_rewards: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    enableEmergency(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    emergencyUnstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    withdrawRewardToTreasury(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
}
//# sourceMappingURL=seapad-sp-adapter.d.ts.map