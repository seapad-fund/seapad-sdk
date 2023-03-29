import { TransactionBlock } from '@mysten/sui.js';
import { OptionTx, SeaPadFunc } from './seapad-func';
export type GasBudget = number | null;
export declare function getGasBudget(gasBudget?: GasBudget): number;
export declare class SeaPadInput extends SeaPadFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        coin_metadata: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    addMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    resetMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    setupProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        round: number;
        usewhitelist: boolean;
        swap_ratio_sui: string;
        swap_ratio_token: string;
        max_allocate: string;
        start_time: number;
        end_time: number;
        soft_cap: string;
        hard_cap: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    saveProfile(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        name: string;
        twitter: string;
        discord: string;
        telegram: string;
        website: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    buy(types: {
        COIN: string;
    }, args: {
        coins: string[];
        amount: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    endRefund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    distributeRaisedFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    refundTokenToOwner(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string[];
        value: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    userClaimToken(types: {
        COIN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    claimRefund(types: {
        COIN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    vote(types: {
        COIN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    addMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    removeMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): TransactionBlock;
    splitCoin(amount: number, to: string): TransactionBlock;
    splitCoins(amounts: string[], to: string): TransactionBlock;
}
//# sourceMappingURL=seapad-input.d.ts.map