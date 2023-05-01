import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { SeaPadInput } from './seapad-input';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadAdapter extends SeaPadFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadInput: SeaPadInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    _getOptionTx(optionTx: OptionTx): OptionTx;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
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
        require_kyc: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    addMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    resetMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    addWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    removeWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    startFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    buy(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        amount: string;
        project: string;
        kyc: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    endFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    endRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    distributeRaisedFund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        projectOwner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    refundTokenToOwner(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        projectOwner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    depositProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        value: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    userClaimToken(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    claimRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    vote(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    addMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    removeMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    getTokenInfo(coinType: string): Promise<{
        coin_metadata_object_id: string | null | undefined;
        decimals: number | undefined;
        icon_url: string | null | undefined;
        description: string | undefined;
        symbol: string | undefined;
        total_supply: string;
    }>;
    splitCoin(amount: number, to: string): Promise<SuiTransactionBlockResponse>;
    splitCoins(amounts: string[], to: string): Promise<SuiTransactionBlockResponse>;
}
//# sourceMappingURL=seapad-adapter.d.ts.map