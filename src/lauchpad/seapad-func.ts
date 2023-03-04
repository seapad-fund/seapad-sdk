import { SuiExecuteTransactionResponse } from "@mysten/sui.js";
import { GasBudget, SeaPadDataInput } from "./seapad-input";


export abstract class SeaPadFunc {
    /**
     *
     * @param types <COIN>
     * @param args adminCap: AdminCap, to: address
     */
    abstract changeAdmin(types: { COIN: string }, args: { adminCap: string, to: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, round: u8, name: vector<u8>, twitter: vector<u8>, discord: vector<u8>, telegram: vector<u8>, website: vector<u8>, usewhitelist: bool, soft_cap: u64, hard_cap: u64, swap_ratio_sui: u64, swap_ratio_token: u64, max_allocate: u64, vesting_type: u8, first_mlst_time: u64, first_mlst_percent: u8, second_mlst_time: u64, second_mlst_percent: u8, third_first_mlst_time: u64, third_first_mlst_percent: u8, fourth_first_mlst_time: u64, fourth_first_mlst_percent: u8, coin_metadata: &CoinMetadata<COIN>,
     */
    abstract addProject(types: { COIN: string }, args: { adminCap: string, round: number, name: string, twitter: string, discord: string, telegram: string, website: string, usewhitelist: boolean, soft_cap: string, hard_cap: string, swap_ratio_sui: string, swap_ratio_token: string, max_allocate: string, vesting_type: number, first_mlst_time: string, first_mlst_percent: number, second_mlst_time: string, second_mlst_percent: number, third_first_mlst_time: string, third_first_mlst_percent: number, fourth_first_mlst_time: string, fourth_first_mlst_percent: number, coin_metadata: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, time: u64, percent: u8,
     */
    abstract addMileStone(types: { COIN: string }, args: { adminCap: string, project: string, time: string, percent: number }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, round: u8, usewhitelist: bool, swap_ratio_sui: u64, swap_ratio_token: u64, max_allocate: u64, start_time: u64, soft_cap: u64, hard_cap: u64, end_time: u64
     */
    abstract updateProject(types: { COIN: string }, args: { adminCap: string, project: string, round: number, usewhitelist: boolean, swap_ratio_sui: string, swap_ratio_token: string, max_allocate: string, start_time: string, soft_cap: string, hard_cap: string, end_time: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, user: address
     */
    abstract addWhitelist(types: { COIN: string }, args: { adminCap: string, project: string, user: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>
     */
    abstract startFundRaising(types: { COIN: string }, args: { adminCap: string, project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args suis: vector<Coin<SUI>>, amount: u64, project: &mut Project<COIN>
     */
    abstract buy(types: { COIN: string }, args: { suis: string, amount: string, project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>
     */
    abstract endFundRaising(types: { COIN: string }, args: { adminCap: string, project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>
     */
    abstract endFund(types: { COIN: string }, args: { adminCap: string, project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <P, COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, project_owner: address,
     */
    abstract distributeRaisedFund(types: { P: string, COIN: string }, args: { adminCap: string, project: string, project_owner: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args cap: &AdminCap, project: &mut Project<COIN>, project_owner: address,
     */
    abstract refundToken(types: { COIN: string }, args: { cap: string, project: string, project_owner: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args coins: vector<Coin<COIN>>, value: u64, project: &mut Project<COIN>
     */
    abstract depositProject(types: { COIN: string }, args: { coins: string, value: string, project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract receiveToken(types: { COIN: string }, args: { project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract claimRefund(types: { COIN: string }, args: { project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract vote(types: { COIN: string }, args: { project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract like(types: { COIN: string }, args: { project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract watch(types: { COIN: string }, args: { project: string }, gasBudget?: GasBudget): SeaPadDataInput | Promise<SuiExecuteTransactionResponse>
}