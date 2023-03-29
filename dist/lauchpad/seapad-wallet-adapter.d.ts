import { SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from "@mysten/wallet-standard";
export declare class SeapadWalletAdapter extends SeaPadFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _seaPadInput: SeaPadInput;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    createProject(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        coin_metadata: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    resetMilestone(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    startFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buy(types: {
        COIN: string;
    }, args: {
        coins: string[];
        amount: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    endFundRaising(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    endRefund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    distributeRaisedFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    refundTokenToOwner(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    depositProject(types: {
        COIN: string;
    }, args: {
        coins: string[];
        value: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    userClaimToken(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    vote(types: {
        COIN: string;
    }, args: {
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeMaxAllocate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    splitCoin(coinId: string, splits: number[]): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-wallet-adapter.d.ts.map