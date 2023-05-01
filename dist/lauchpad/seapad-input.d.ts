import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadInput extends SeaPadFunc<TransactionBlock> {
    _module: string;
    _packageObjectId: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    createProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        vesting_type: number;
        linear_time: number | 0;
        coin_decimals: number;
        token_decimals: number;
        require_kyc: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    addMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    resetMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    addWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    removeWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    startFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    buy(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        coins: string[];
        amount: string;
        project: string;
        kyc: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    endFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    endRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    distributeRaisedFund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    refundTokenToOwner(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    depositProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        coins: string[];
        value: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    userClaimToken(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    claimRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    vote(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    addMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    removeMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): TransactionBlock;
    splitCoin(amount: number, to: string): TransactionBlock;
    splitCoins(amounts: string[], to: string): TransactionBlock;
}
//# sourceMappingURL=seapad-input.d.ts.map