import { MoveCallTransaction } from "@mysten/sui.js";
import { SeaPadFunc } from "./seapad-func";
export type GasBudget = number | null;
export declare function getGasBudget(gasBudget?: GasBudget): number;
export declare class SeaPadInput extends SeaPadFunc {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    changeAdmin(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        to: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    addProject(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        round: number;
        usewhitelist: boolean;
        softCap: string;
        hardCap: string;
        swapRatioSui: string;
        swapRatioToken: string;
        maxAllocate: string;
        vestingType: number;
        firstVestingTime: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    addMileStone(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
        time: string;
        percent: number;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    updateProject(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
        round: number;
        usewhitelist: boolean;
        swapRatioSui: string;
        swapRatioToken: string;
        maxAllocate: string;
        startTime: string;
        endTime: string;
        softCap: string;
        hardCap: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    saveProfile(types: {
        COIN: string;
    }, args: {
        adminCap: string;
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
        adminCap: string;
        project: string;
        user: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    buy(types: {
        COIN: string;
    }, args: {
        suis: string;
        amount: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    endRefund(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    distributeRaisedFund(types: {
        P: string;
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
        projectOwner: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    refundToken(types: {
        COIN: string;
    }, args: {
        cap: string;
        project: string;
        projectOwner: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string;
        value: string;
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    receiveToken(types: {
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
    like(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
    watch(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): MoveCallTransaction;
}
//# sourceMappingURL=seapad-input.d.ts.map