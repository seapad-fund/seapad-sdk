import {
    SuiTransactionBlockResponseOptions,
    ExecuteTransactionRequestType,
    TransactionBlock,
    TransactionArgument,
    PaginatedCoins,
    JsonRpcProvider,
} from '@mysten/sui.js';

export type OptionTx =
    | {
        options?: SuiTransactionBlockResponseOptions;
        requestType?: ExecuteTransactionRequestType;
    }
    | undefined;


export type GasBudget = number | null;

export function getGasBudget(gasBudget?: GasBudget): number {
    if (
        typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 350000000
    ) {
        return 350000000;
    } else {
        return gasBudget;
    }
}

/**
   * Fetch coin owned by an address
   */
export const getCoins = async (walletAddress: string, coinType: string, suiProvider: JsonRpcProvider) => {
    try {
        let data: any = [];
        let hasNextPage = true;
        let nextCursor: string | null = null;
        while (hasNextPage) {
            const response: PaginatedCoins = await suiProvider.getCoins({
                owner: walletAddress,
                coinType: coinType,
                cursor: nextCursor,
                limit: 1000,
            });
            data = response.data.filter((coin) => Number(coin.balance) > 0);
            nextCursor = response.nextCursor;
            hasNextPage = response.hasNextPage;
        }

        return data;
    } catch (error: any) {
        return []
    }
};
export const pickupCoin = async (
    coinType: string,
    expect_balance: number,
    userAddress: string,
    suiProvider: JsonRpcProvider
) => {
    const allCoin = await getCoins(userAddress, coinType, suiProvider);
    const coin: any = allCoin.data
        ?.sort((a: any, b: any) => b.balance - a.balance)
        .find((coin: any) => {
            return Number(coin.balance) >= expect_balance;
        });

    return {
        coin: coin?.coinObjectId as string,
        isPicked: coin !== undefined,
        coinTrans: allCoin.data
    };
};

export function manageObjectCoin(coin_type: string, coins: string[], amount: string, tx: TransactionBlock): TransactionArgument {
    let coin_trans: TransactionArgument;
    if (coins === null || typeof coins === undefined || coins.length === 0) {
        throw new Error('Not coin transfer');
    }

    if (coins.length === 1) {
        if (coin_type === '0x2::sui::SUI') {
            const [sui_trans] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
            coin_trans = sui_trans;
        } else {
            coin_trans = tx.pure(coins[0]);
        }
    } else {
        const coin_base = coins.pop() as string;
        tx.mergeCoins(
            tx.object(coin_base),
            coins.map((coin) => tx.object(coin)),
        );
        coin_trans = tx.pure(coin_base);
    }
    return coin_trans
}

export async function getCoinObjects(coin_type: string, amount: string, address: string, suiProvider: JsonRpcProvider) {
    let coins: string[];

    const pickCoinTrans = await pickupCoin(
        coin_type,
        Number(amount),
        address,
        suiProvider
    );
    if (pickCoinTrans.isPicked) {
        coins = [pickCoinTrans.coin];
    } else {
        coins = pickCoinTrans.coinTrans;
    }
    return coins
}