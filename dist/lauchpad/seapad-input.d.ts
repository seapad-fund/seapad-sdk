import { MoveCallTransaction } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
export type GasBudget = number | null;
export declare function getGasBudget(gasBudget?: GasBudget): number;
export declare class SeaPadInput extends SeaPadFunc<MoveCallTransaction> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        coin_metadata: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    addMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    resetMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): MoveCallTransaction;
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
    }, gasBudget?: GasBudget): MoveCallTransaction;
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
    }, gasBudget?: GasBudget): MoveCallTransaction;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget): MoveCallTransaction;
    removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget): MoveCallTransaction;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    buy(types: {
        COIN: string;
    }, args: {
        coins: string[];
        amount: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    endRefund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    distributeRaisedFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    refundTokenToOwner(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string[];
        value: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    userClaimToken(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    claimRefund(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    vote(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    addMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    removeMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
}
//# sourceMappingURL=seapad-input.d.ts.map