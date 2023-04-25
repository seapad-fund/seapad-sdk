import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadStakePoolFunc } from './seapad-sp-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadStakePoolInput extends SeaPadStakePoolFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    registerPool(types: {
        S: string;
        R: string;
    }, args: {
        num_rewards: string;
        rewards: string[];
        duration: string;
        global_config: string;
        decimalS: number;
        decimalR: number;
        duration_unstake_time_ms: number;
        max_stake: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    stake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        coins: string[];
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    unstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    harvest(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    depositRewardCoins(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        num_rewards: string;
        reward_coins: string[];
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    enableEmergency(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    emergencyUnstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    withdrawRewardToTreasury(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
}
//# sourceMappingURL=seapad-sp-input.d.ts.map