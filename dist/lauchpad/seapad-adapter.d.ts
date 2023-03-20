import { RawSigner, SuiExecuteTransactionResponse } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';
export declare class SeaPadAdapter extends SeaPadFunc {
    _seaPadInput: SeaPadInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    changeAdmin(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        to: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        coin_metadata: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    addMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: string;
        percent: number;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    resetMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiExecuteTransactionResponse>;
    setupProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        usewhitelist: boolean;
        swap_ratio_sui: number;
        swap_ratio_token: number;
        max_allocate: number;
        start_time: number;
        end_time: number;
        soft_cap: number;
        hard_cap: number;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
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
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    buy(types: {
        COIN: string;
    }, args: {
        suis: string[];
        amount: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    endRefund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    distributeRaisedFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        projectOwner: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    refundTokenToOwner(types: {
        COIN: string;
    }, args: {
        cap: string;
        project: string;
        projectOwner: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string[];
        value: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    userClaimToken(types: {
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
    addMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
    removeMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse>;
}
//# sourceMappingURL=seapad-adapter.d.ts.map