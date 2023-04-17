import { GasBudget } from './seapad-sp-input';
import { SuiTransactionBlockResponseOptions, ExecuteTransactionRequestType } from '@mysten/sui.js';
export type OptionTx = {
    options?: SuiTransactionBlockResponseOptions;
    requestType?: ExecuteTransactionRequestType;
} | undefined;
export declare abstract class SeaPadStakePoolFunc<T> {
    /**
     *
     * @param types <S, R>
     * @param args rewards: Coin<R>, duration: u64, global_config: &GlobalConfig, decimalS: u8, decimalR: u8, system_clock: &Clock
     */
    abstract registerPool(types: {
        S: string;
        R: string;
    }, args: {
        rewards: string;
        duration: string;
        global_config: string;
        decimalS: number;
        decimalR: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, coins: Coin<S>, global_config: &GlobalConfig, system_clock: &Clock
     */
    abstract stake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        coins: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, stake_amount: u64, global_config: &GlobalConfig, system_clock: &Clock
     */
    abstract unstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        stake_amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, global_config: &GlobalConfig, system_clock: &Clock
     */
    abstract harvest(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, reward_coins: Coin<R>, global_config: &GlobalConfig, system_clock: &Clock
     */
    abstract depositRewardCoins(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        reward_coins: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, global_config: &GlobalConfig
     */
    abstract enableEmergency(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, amount: u64, global_config: &GlobalConfig, system_clock: &Clock
     */
    abstract emergencyUnstake(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
    /**
     *
     * @param types <S, R>
     * @param args pool: &mut StakePool<S, R>, amount: u64, global_config: &GlobalConfig, system_clock: &Clock,
     */
    abstract withdrawRewardToTreasury(types: {
        S: string;
        R: string;
    }, args: {
        pool: string;
        amount: string;
        global_config: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): T;
}
//# sourceMappingURL=seapad-sp-func.d.ts.map