import { RawSigner, JsonRpcProvider, SuiTransactionBlockResponse } from '@mysten/sui.js';
import { SeaPadNftPoolFunc } from './seapad-nft-func';
import { GasBudget, OptionTx } from '../common';
import { SeaPadNftPoolInput } from './seapad-nft-input';
export declare class SeaPadNftPoolAdapter extends SeaPadNftPoolFunc<Promise<SuiTransactionBlockResponse>> {
    _suiProvider: JsonRpcProvider;
    _seaPadNftPoolInput: SeaPadNftPoolInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    createPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        soft_cap_percent: number;
        round: number;
        use_whitelist: boolean;
        vesting_time_ms: string;
        start_time: string;
        end_time: string;
        require_kyc: boolean;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    addCollection(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        cap: string;
        allocate: string;
        price: string;
        type: number;
        name: string;
        link: string;
        image_url: string;
        description: string;
        project_url: string;
        edition: string;
        thumbnail_url: string;
        creator: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    buyNft(types: {
        COIN: string;
    }, args: {
        nft_types: string[];
        nft_amounts: string[];
        pool: string;
        kyc: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        tos: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    removeWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        froms: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiTransactionBlockResponse>;
    _getOptionTx(optionTx: OptionTx): OptionTx;
}
//# sourceMappingURL=seapad-nft-adapter.d.ts.map