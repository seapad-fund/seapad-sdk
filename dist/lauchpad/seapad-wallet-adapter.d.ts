import { SeaPadFunc } from './seapad-func';
import { SeaPadInput } from './seapad-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadWalletAdapter extends SeaPadFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _seaPadInput: SeaPadInput;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    createProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        linear_time: number;
        coin_decimals: number;
        token_decimals: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    resetMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    setupProject(types: {
        COIN: string;
        TOKEN: string;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    saveProfile(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        name: string;
        twitter: string;
        discord: string;
        telegram: string;
        website: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    startFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buy(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        coins: string[];
        amount: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    endFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    endRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    distributeRaisedFund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    refundTokenToOwner(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    depositProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        coin: string;
        value: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    userClaimToken(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    vote(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    splitCoin(amount: number, to: string): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    splitCoins(amounts: string[], to: string): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-wallet-adapter.d.ts.map