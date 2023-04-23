"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoinObjects = exports.manageObjectCoin = exports.pickupCoin = exports.getCoins = exports.getGasBudget = void 0;
function getGasBudget(gasBudget) {
    if (typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 350000000) {
        return 350000000;
    }
    else {
        return gasBudget;
    }
}
exports.getGasBudget = getGasBudget;
/**
   * Fetch coin owned by an address
   */
const getCoins = async (walletAddress, coinType, suiProvider) => {
    try {
        let data = [];
        let hasNextPage = true;
        let nextCursor = null;
        while (hasNextPage) {
            const response = await suiProvider.getCoins({
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
    }
    catch (error) {
        return [];
    }
};
exports.getCoins = getCoins;
const pickupCoin = async (coinType, expect_balance, userAddress, suiProvider) => {
    const allCoin = await (0, exports.getCoins)(userAddress, coinType, suiProvider);
    const coin = allCoin
        ?.sort((a, b) => b.balance - a.balance)
        .find((coin) => {
        return Number(coin.balance) >= expect_balance;
    });
    return {
        coin: coin?.coinObjectId,
        isPicked: coin !== undefined,
        coinTrans: allCoin.data
    };
};
exports.pickupCoin = pickupCoin;
function manageObjectCoin(coin_type, coins, amount, tx) {
    let coin_trans;
    if (coins === null || coins === undefined || coins.length === 0) {
        throw new Error('Not coin transfer');
    }
    if (coins.length === 1) {
        if (coin_type === '0x2::sui::SUI') {
            const [sui_trans] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
            coin_trans = sui_trans;
        }
        else {
            coin_trans = tx.pure(coins[0]);
        }
    }
    else {
        const coin_base = coins.pop();
        tx.mergeCoins(tx.object(coin_base), coins.map((coin) => tx.object(coin)));
        coin_trans = tx.pure(coin_base);
    }
    return coin_trans;
}
exports.manageObjectCoin = manageObjectCoin;
async function getCoinObjects(coin_type, amount, address, suiProvider) {
    let coins;
    const pickCoinTrans = await (0, exports.pickupCoin)(coin_type, Number(amount), address, suiProvider);
    if (pickCoinTrans.isPicked) {
        coins = [pickCoinTrans.coin];
    }
    else {
        coins = pickCoinTrans.coinTrans;
    }
    return coins;
}
exports.getCoinObjects = getCoinObjects;
//# sourceMappingURL=common.js.map