import { SuiTransactionBlockResponseOptions, ExecuteTransactionRequestType, TransactionBlock, TransactionArgument, JsonRpcProvider } from '@mysten/sui.js';
export type OptionTx = {
    options?: SuiTransactionBlockResponseOptions;
    requestType?: ExecuteTransactionRequestType;
} | undefined;
export type GasBudget = number | null;
export declare function getGasBudget(gasBudget?: GasBudget): number;
/**
 * Fetch coin owned by an address
 */
export declare const getCoins: (walletAddress: string, coinType: string, suiProvider: JsonRpcProvider) => Promise<any>;
export declare const pickupCoin: (coinType: string, expect_balance: number, userAddress: string, suiProvider: JsonRpcProvider) => Promise<{
    coin: string;
    isPicked: boolean;
    coinTrans: string[];
}>;
export declare function manageObjectCoin(coin_type: string, coins: string[], amount: string, tx: TransactionBlock): TransactionArgument;
export declare function getCoinObjects(coin_type: string, amount: string, address: string, suiProvider: JsonRpcProvider): Promise<string[]>;
export declare function calculateAmount(a: string[], b: string[]): string;
//# sourceMappingURL=common.d.ts.map