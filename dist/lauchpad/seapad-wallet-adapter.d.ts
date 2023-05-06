import { SeaPadFunc } from './seapad-func';
import { SeaPadInput } from './seapad-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadWalletAdapter extends SeaPadFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _seaPadInput: SeaPadInput;
    _suiProvider: JsonRpcProvider;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string, suiProvider: JsonRpcProvider, version?: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    createProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        linear_time: number;
        cliff_time: string;
        tge: string;
        unlock_percent: string;
        coin_decimals: number;
        token_decimals: number;
        require_kyc: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    resetMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    startFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buy(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        amount: string;
        project: string;
        kyc: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    endFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    endRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    distributeRaisedFund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    refundTokenToOwner(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    depositProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        value: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    userClaimToken(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null, versionId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    vote(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    removeMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    splitCoin(amount: number, to: string): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    splitCoins(amounts: string[], to: string): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-wallet-adapter.d.ts.map