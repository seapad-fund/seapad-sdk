import {
  SuiTransactionBlockResponseOptions,
  ExecuteTransactionRequestType,
  TransactionBlock,
  TransactionArgument,
  PaginatedCoins,
  JsonRpcProvider,
} from '@mysten/sui.js';

import Decimal from 'decimal.js';

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
    gasBudget < 100000000
  ) {
    return 300000000;
  } else {
    return gasBudget;
  }
}

export function configGasBudget(tx: TransactionBlock, gasBudget?: GasBudget): TransactionBlock {
  if (
    typeof gasBudget == undefined ||
    gasBudget == null ||
    gasBudget < 100000000
  ) {
    return tx
  } else {
    tx.setGasBudget(gasBudget);
    return tx
  }
}



/**
 * Fetch coin owned by an address
 */
export const getCoins = async (
  walletAddress: string,
  coinType: string,
  suiProvider: JsonRpcProvider,
) => {
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
      data = response.data;
      nextCursor = response.nextCursor;
      hasNextPage = response.hasNextPage;
    }
    console.log(`getCoins data`, data)
    return data;
  } catch (error: any) {
    return [];
  }
};
export const pickupCoin = async (
  coinType: string,
  expect_balance: number,
  userAddress: string,
  suiProvider: JsonRpcProvider,
) => {
  const allCoin = await getCoins(userAddress, coinType, suiProvider);
  const coin: any = allCoin
    ?.sort((a: any, b: any) => b.balance - a.balance)
    .find((coin: any) => {
      return Number(coin.balance) >= expect_balance;
    });
  let totalBalance = 0;
  const coins: string[] = allCoin?.map((ele: any) => {
    totalBalance += Number(ele?.balance);
    return ele?.coinObjectId;
  });

  if (
    totalBalance < expect_balance
  ) {
    throw new Error(`Not enough balance (${coinType})`);
  }

  // console.log(totalBalance, coins);

  return {
    coin: coin?.coinObjectId as string,
    isPicked: coin !== undefined,
    coinTrans: coins,
  };
};

export function manageObjectCoin(
  coin_type: string,
  coins: string[],
  amount: string,
  tx: TransactionBlock,
): TransactionArgument {
  let coin_trans: TransactionArgument;
  if (coins === null || coins === undefined || coins.length === 0) {
    throw new Error('Not coin transfer');
  }
  console.log(`coins`, coins)

  if (coins.length === 1) {
    if (coin_type === '0x2::sui::SUI') {
      const [sui_trans] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
      coin_trans = sui_trans;
    } else {
      const [_coin_trans] = tx.splitCoins(tx.pure(coins[0]), [tx.pure(amount)]);
      coin_trans = _coin_trans;
    }
  } else {
    if (coin_type === '0x2::sui::SUI') {
      tx.mergeCoins(
        tx.gas,
        coins.map(coin => tx.object(coin))
      );

      const [splitCoin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
      coin_trans = splitCoin;
    } else {
      tx.mergeCoins(
        tx.object(coins[0]),
        (coins.slice(1)).map(coin => tx.object(coin))
      );
      console.log(`mergecoin ok`, coins[0])
      const [splitCoin] = tx.splitCoins(tx.object(coins[0]), [tx.pure(amount)]);
      console.log(`splitcoin ok`, coins[0])
      coin_trans = splitCoin;
    }

  }
  //check balance
  return coin_trans;
}

export async function getCoinObjects(
  coin_type: string,
  amount: string,
  address: string,
  suiProvider: JsonRpcProvider,
) {
  let coins: string[];

  const pickCoinTrans = await pickupCoin(
    coin_type,
    Number(amount),
    address,
    suiProvider,
  );
  if (pickCoinTrans.isPicked) {
    coins = [pickCoinTrans.coin];
  } else {
    coins = pickCoinTrans.coinTrans;
  }
  return coins;
}

export function calculateAmount(a: string[], b: string[]): string {
  let total = new Decimal(0);
  a.map((ele, i) => {
    total = total.add(new Decimal(ele).mul(new Decimal(b[i])));
  });
  return total.toFixed(0);
}

export function calculateAmountSameType(a: string[]): string {
  let total = new Decimal(0);
  a.map((ele) => {
    total = total.add(new Decimal(ele));
  });
  return total.toFixed(0);
}
