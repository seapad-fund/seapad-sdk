import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadNftPoolFunc } from './seapad-nft-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadNftPoolInput extends SeaPadNftPoolFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    buyNft(types: {
        COIN: string;
    }, args: {
        amount: string;
        coins: string[];
        nft_types: string;
        nft_amounts: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        tos: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
    changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined): TransactionBlock;
}
//# sourceMappingURL=seapad-nft-input.d.ts.map