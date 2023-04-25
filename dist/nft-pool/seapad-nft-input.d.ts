import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadNftPoolFunc } from './seapad-nft-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadNftPoolInput extends SeaPadNftPoolFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    changeAdmin(args: {
        admin_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
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
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    startPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    buyNft(types: {
        COIN: string;
    }, args: {
        amount: string;
        coins: string[];
        nft_types: string;
        nft_amounts: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    stopPool(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    claimNft(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    claimRefund(types: {
        COIN: string;
    }, args: {
        pool: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    addWhitelist(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        tos: string[];
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    withdrawFund(types: {
        COIN: string;
    }, args: {
        admin_cap: string;
        pool: string;
        amt: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
    changeTreasuryAdmin(types: {
        COIN: string;
    }, args: {
        admin_treasury_cap: string;
        to: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
}
//# sourceMappingURL=seapad-nft-input.d.ts.map