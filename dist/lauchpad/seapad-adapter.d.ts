import { RawSigner, SuiExecuteTransactionResponse } from "@mysten/sui.js";
import { SeaPadFunc } from "./seapad-func";
import { GasBudget, SeaPadInput } from "./seapad-input";
export declare class SeaPadAdapter extends SeaPadFunc {
    _seaPadInput: SeaPadInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    changeAdmin(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        to: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
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
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    addMileStone(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
        time: string;
        percent: number;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
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
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
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
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
        user: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    buy(types: {
        COIN: string;
    }, args: {
        suis: string;
        amount: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    endRefund(types: {
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    distributeRaisedFund(types: {
        P: string;
        COIN: string;
    }, args: {
        adminCap: string;
        project: string;
        projectOwner: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    refundToken(types: {
        COIN: string;
    }, args: {
        cap: string;
        project: string;
        projectOwner: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string;
        value: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    receiveToken(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    vote(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    like(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    watch(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
}
//# sourceMappingURL=seapad-adapter.d.ts.map