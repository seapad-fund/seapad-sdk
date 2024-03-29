import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadStakePoolFunc<T> {
  /**
   *
   * @param types <S, R>
   * @param args num_rewards, rewards: Coin<R>, duration: u64, global_config: &GlobalConfig, decimalS: u8, decimalR: u8, system_clock: &Clock
   */
  abstract registerPool(
    types: { S: string; R: string },
    args: {
      num_rewards: string;
      rewards: string[] | undefined;
      duration: string;
      global_config: string;
      decimalS: number;
      decimalR: number;
      duration_unstake_time_ms: number;
      max_stake: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;
  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, coins: Coin<S>, global_config: &GlobalConfig, system_clock: &Clock
   */
  abstract stake(
    types: { S: string; R: string },
    args: { pool: string; coins: string[] | undefined; amount: string, global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;
  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, amount: u64, global_config: &GlobalConfig, system_clock: &Clock
   */
  abstract unstake(
    types: { S: string; R: string },
    args: {
      pool: string;
      amount: string;
      global_config: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;
  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, global_config: &GlobalConfig, system_clock: &Clock
   */
  abstract harvest(
    types: { S: string; R: string },
    args: { pool: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;

  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, reward_coins: Coin<R>, global_config: &GlobalConfig, system_clock: &Clock
   */
  abstract depositRewardCoins(
    types: { S: string; R: string },
    args: {
      pool: string;
      num_rewards: string;
      reward_coins: string[] | undefined;
      global_config: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;

  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, global_config: &GlobalConfig
   */
  abstract enableEmergency(
    types: { S: string; R: string },
    args: {
      pool: string;
      global_config: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;
  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, amount: u64, global_config: &GlobalConfig, system_clock: &Clock
   */
  abstract emergencyUnstake(
    types: { S: string; R: string },
    args: {
      pool: string;
      amount: string;
      global_config: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;
  /**
   *
   * @param types <S, R>
   * @param args pool: &mut StakePool<S, R>, amount: u64, global_config: &GlobalConfig, system_clock: &Clock,
   */
  abstract withdrawRewardToTreasury(
    types: { S: string; R: string },
    args: { pool: string; amount: string; global_config: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null
  ): T;
}
