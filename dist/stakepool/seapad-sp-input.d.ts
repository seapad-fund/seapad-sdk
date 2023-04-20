import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadStakePoolInput extends SeaPadStakePoolFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    registerPool(types: {
        S: string;
        R: string;
    }, args: {
        rewards: string;
        duration: string;
        global_config: string;
        decimalS: number;
        decimalR: number;
        duration_unstake_time_ms: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    stake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        coins: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    unstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        stake_amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    harvest(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    depositRewardCoins(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        reward_coins: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    enableEmergency(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    emergencyUnstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    withdrawRewardToTreasury(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
}
//# sourceMappingURL=seapad-sp-input.d.ts.map