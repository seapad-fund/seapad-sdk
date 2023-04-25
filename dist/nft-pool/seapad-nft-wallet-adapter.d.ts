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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buyNft(types: {
        COIN: string;
    }, args: {
        amount: string;
        nft_types: string;
        nft_amounts: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        white: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    buildTx(message: TransactionBlock): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>;
}
//# sourceMappingURL=seapad-nft-wallet-adapter.d.ts.map