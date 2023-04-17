import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { OptionTx, SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';
export declare class SeaPadAdapter extends SeaPadFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadInput: SeaPadInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    _getOptionTx(optionTx: OptionTx): OptionTx;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    changeOwner(args: {
        admin_cap: string;
        new_owner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    addMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        time: number;
        percent: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    resetMilestone(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    addWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    removeWhitelist(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        user_list: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    startFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    buy(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        coin: string;
        amount: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    endFundRaising(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    endRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    distributeRaisedFund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        projectOwner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    refundTokenToOwner(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        project: string;
        projectOwner: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    depositProject(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        coin: string;
        value: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    userClaimToken(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    claimRefund(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    vote(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    addMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        max_allocate: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    removeMaxAllocate(types: {
        COIN: string;
        TOKEN: string;
    }, args: {
        admin_cap: string;
        user: string;
        project: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget): Promise<SuiTransactionBlockResponse>;
    getTokenInfo(coinType: string): Promise<{
        coin_metadata_object_id: string | null;
        decimals: number;
        icon_url: string | null;
        description: string;
        symbol: string;
        total_supply: string;
    }>;
    splitCoin(amount: number, to: string): Promise<SuiTransactionBlockResponse>;
    splitCoins(amounts: string[], to: string): Promise<SuiTransactionBlockResponse>;
}
//# sourceMappingURL=seapad-adapter.d.ts.map