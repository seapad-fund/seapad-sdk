import {
    MoveCallTransaction,
    SuiExecuteTransactionResponse,
} from '@mysten/sui.js';
import { GasBudget } from './seapad-input';

export abstract class SeaPadFunc {
    /**
     *
     * @param types <COIN>
     * @param args adminCap: AdminCap, to: address
     */
    abstract changeAdmin(
        types: { COIN: string },
        args: { adminCap: string; to: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args _adminCap: &AdminCap, round: u8, usewhitelist: bool, softCap: u64, hardCap: u64, swapRatioSui: u64, swapRatioToken: u64, maxAllocate: u64, vestingType: u8, firstVestingTime: u64
     */
    abstract createProject(
        types: { COIN: string },
        args: {
            adminCap: string;
            owner: string;
            vestingType: number;
            coin_metadata: string;
        },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, time: u64, percent: u8,
     */
    abstract addMilestone(
        types: { COIN: string },
        args: { adminCap: string; project: string; time: string; percent: number },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, round: u8, usewhitelist: bool, swapRatioSui: u64, swapRatioToken: u64, maxAllocate: u64, startTime: u64, endTime: u64, softCap: u64, hardCap: u64
     */
    abstract setupProject(
        types: { COIN: string },
        args: {
            adminCap: string;
            project: string;
            usewhitelist: boolean;
            swap_ratio_sui: number;
            swap_ratio_token: number;
            max_allocate: number;
            start_time: number;
            end_time: number;
            soft_cap: number;
            hard_cap: number;
        },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args _adminCap: &AdminCap, project: &mut Project<COIN>, name: vector<u8>, twitter: vector<u8>, discord: vector<u8>, telegram: vector<u8>, website: vector<u8>
     */
    abstract saveProfile(
        types: { COIN: string },
        args: {
            adminCap: string;
            project: string;
            name: string;
            twitter: string;
            discord: string;
            telegram: string;
            website: string;
        },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, user: address
     */
    abstract addWhitelist(
        types: { COIN: string },
        args: { adminCap: string; project: string; user_list: string[] },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;

    abstract removeWhitelist(
        types: { COIN: string },
        args: { adminCap: string; project: string; user_list: string[] },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>
     */
    abstract startFundRaising(
        types: { COIN: string },
        args: { adminCap: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args suis: vector<Coin<SUI>>, amount: u64, project: &mut Project<COIN>
     */
    abstract buy(
        types: { COIN: string },
        args: { suis: string[]; amount: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>
     */
    abstract endFundRaising(
        types: { COIN: string },
        args: { adminCap: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>
     */
    abstract endRefund(
        types: { COIN: string },
        args: { adminCap: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <P, COIN>
     * @param args adminCap: &AdminCap, project: &mut Project<COIN>, projectOwner: address,
     */
    abstract distributeRaisedFund(
        types: { P: string; COIN: string },
        args: { adminCap: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args cap: &AdminCap, project: &mut Project<COIN>, projectOwner: address,
     */
    abstract refundTokenToOwner(
        types: { COIN: string },
        args: { cap: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args coins: vector<Coin<COIN>>, value: u64, project: &mut Project<COIN>
     */
    abstract depositProject(
        types: { COIN: string },
        args: { coins: string[]; value: string; project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract userClaimToken(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract claimRefund(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract vote(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract like(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
    /**
     *
     * @param types <COIN>
     * @param args project: &mut Project<COIN>
     */
    abstract watch(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;

    abstract addMaxAllocate(
        types: { COIN: string },
        args: {
            adminCap: string;
            user: string;
            max_allocate: string;
            project: string;
        },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;

    abstract removeMaxAllocate(
        types: { COIN: string },
        args: {
            adminCap: string;
            user: string;
            project: string;
        },
        gasBudget?: GasBudget,
    ): MoveCallTransaction | Promise<SuiExecuteTransactionResponse>;
}
