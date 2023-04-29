import { SeaPadNftPoolFunc } from './seapad-nft-func';
import { SeaPadNftPoolInput } from './seapad-nft-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput } from '@mysten/wallet-standard';
import { GasBudget, OptionTx } from '../common';
export declare class SeapadWalletNftPoolAdapter extends SeaPadNftPoolFunc<Promise<SuiSignAndExecuteTransactionBlockOutput>> {
    _walletContextState: WalletContextState;
    _seaPadNftPoolInput: SeaPadNftPoolInput;
    _suiProvider: JsonRpcProvider;
    constructor(walletContextState: WalletContextState, packageObjectId: string, module: string, suiProvider: JsonRpcProvider);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buyNft(types: {
        COIN: string;
    }, args: {
        nft_types: string[];
        nft_amounts: string[];
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        tos: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-nft-wallet-adapter.d.ts.map