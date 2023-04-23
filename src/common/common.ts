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
                limit: 100,
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
    const coin: any = allCoin
        ?.sort((a: any, b: any) => b.balance - a.balance)
        .find((coin: any) => {
            return Number(coin.balance) >= expect_balance;
        });
    let totalBalance: number = 0
    const coins: string[] = allCoin?.map((ele: any) => {
        totalBalance += Number(ele?.balance)
        return ele?.coinObjectId
    })

    if ((coinType !== "0x2::sui::SUI" && totalBalance < expect_balance) || (coinType === "0x2::sui::SUI" && totalBalance < expect_balance + getGasBudget())) {
        throw new Error('Not enough balance');
    }

    console.log(totalBalance, coins)

    return {
        coin: coin?.coinObjectId as string,
        isPicked: coin !== undefined,
        coinTrans: coins
    };
};

export function manageObjectCoin(coin_type: string, coins: string[], amount: string, tx: TransactionBlock): TransactionArgument {
    let coin_trans: TransactionArgument;
    if (coins === null || coins === undefined || coins.length === 0) {
        throw new Error('Not coin transfer');
    }

    if (coins.length === 1) {
        if (coin_type === '0x2::sui::SUI') {
            const [sui_trans] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
            coin_trans = sui_trans;
        } else {
            const [_coin_trans] = tx.splitCoins(tx.pure(coins[0]), [tx.pure(amount)]);
            coin_trans = _coin_trans;
        }
    } else {
        const [mergeObj] = tx.mergeCoins(
            tx.object(coins.pop() as string),
            coins.map((coin) => tx.object(coin)),
        );
        const [splitCoin] = tx.splitCoins(mergeObj, [tx.pure(amount)]);
        coin_trans = splitCoin
    }
    //check balance
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