import { SeaPadFunc } from "./seapad-func";
import { GasBudget, SeaPadInput } from "./seapad-input";
import { WalletContextState } from "@suiet/wallet-kit";
import { SuiSignAndExecuteTransactionInput, SuiSignAndExecuteTransactionOutput } from "@mysten/wallet-standard";
import { MoveCallTransaction } from "@mysten/sui.js";
export declare class SeapadWalletAdapter extends SeaPadFunc<Promise<SuiSignAndExecuteTransactionOutput>> {
    _walletContextState: WalletContextState;
    _seaPadInput: SeaPadInput;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string);
    changeAdmin(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        to: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        coin_metadata: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    addMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    resetMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    setupProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        usewhitelist: boolean;
        swap_ratio_sui: string;
        swap_ratio_token: string;
        max_allocate: string;
        start_time: number;
        end_time: number;
        soft_cap: string;
        hard_cap: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
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
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    buy(types: {
        COIN: string;
    }, args: {
        coins: string[];
        amount: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    endRefund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    distributeRaisedFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    refundTokenToOwner(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string[];
        value: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    userClaimToken(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    vote(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    like(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    watch(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    addMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    removeMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionOutput>;
    buildTx(message: MoveCallTransaction): SuiSignAndExecuteTransactionInput;
}
//# sourceMappingURL=seapad-wallet-adapter.d.ts.map