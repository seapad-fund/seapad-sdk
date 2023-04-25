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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    createPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        owner: string;
        soft_cap: string;
        hard_cap: string;
        round: number;
        use_whitelist: boolean;
        vesting_time: string;
        allocate: string;
        start_time: string;
        end_time: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    addTemplate(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        name: string;
        description: string;
        url: string;
        price: string;
        type: number;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    buyNft(types: {
        COIN: string;
    }, args: {
        amount: string;
        nft_types: string;
        nft_amounts: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        tos: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiTransactionBlockResponse>;
    _getOptionTx(optionTx: OptionTx): OptionTx;
}
//# sourceMappingURL=seapad-nft-adapter.d.ts.map