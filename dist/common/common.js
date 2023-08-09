"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAmountSameType = exports.calculateAmount = exports.getCoinObjects = exports.manageObjectCoin = exports.pickupCoin = exports.getCoins = exports.configGasBudget = exports.getGasBudget = void 0;
const decimal_js_1 = __importDefault(require("decimal.js"));
function getGasBudget(gasBudget) {
    if (typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 100000000) {
        return 300000000;
    }
    else {
        return gasBudget;
    }
}
exports.getGasBudget = getGasBudget;
function configGasBudget(tx, gasBudget) {
    if (typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 100000000) {
        return tx;
    }
    else {
        tx.setGasBudget(gasBudget);
        return tx;
    }
}
exports.configGasBudget = configGasBudget;
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
            data = response.data;
            nextCursor = response.nextCursor;
            hasNextPage = response.hasNextPage;
        }
        console.log(`getCoins data`, data);
        return data;
    }
    catch (error) {
        return [];
    }
};
exports.getCoins = getCoins;
const pickupCoin = async (coinType, expect_balance, userAddress, suiProvider) => {
    const allCoin = await (0, exports.getCoins)(userAddress, coinType, suiProvider);
    let totalBalance = 0;
    const coins = allCoin?.map((ele) => {
        totalBalance += Number(ele?.balance);
        return ele?.coinObjectId;
    });
    if (totalBalance < expect_balance) {
        throw new Error(`Not enough balance (${coinType})`);
    }
    console.log(totalBalance, coins);
    return coins;
};
exports.pickupCoin = pickupCoin;
function manageObjectCoin(coin_type, coins, amount, tx) {
    let coin_trans;
    if (coins === null || coins === undefined || coins.length === 0) {
        throw new Error('Not coin transfer');
    }
    console.log(`manageObjectCoin coins`, coins, coins.length);
    if (coins.length === 1) {
        if (coin_type === '0x2::sui::SUI') {
            const [sui_trans] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
            coin_trans = sui_trans;
        }
        else {
            const [_coin_trans] = tx.splitCoins(tx.pure(coins[0]), [tx.pure(amount)]);
            coin_trans = _coin_trans;
        }
    }
    else {
        console.log(`manageObjectCoin mergeCoins`);
        const [mergeObj] = tx.mergeCoins(tx.object(coins.pop()), coins.map((coin) => tx.object(coin)));
        const [splitCoin] = tx.splitCoins(mergeObj, [tx.pure(amount)]);
        coin_trans = splitCoin;
    }
    //check balance
    return coin_trans;
}
exports.manageObjectCoin = manageObjectCoin;
async function getCoinObjects(coin_type, amount, address, suiProvider) {
    const pickCoinTrans = await (0, exports.pickupCoin)(coin_type, Number(amount), address, suiProvider);
    return pickCoinTrans;
}
exports.getCoinObjects = getCoinObjects;
function calculateAmount(a, b) {
    let total = new decimal_js_1.default(0);
    a.map((ele, i) => {
        total = total.add(new decimal_js_1.default(ele).mul(new decimal_js_1.default(b[i])));
    });
    return total.toFixed(0);
}
exports.calculateAmount = calculateAmount;
function calculateAmountSameType(a) {
    let total = new decimal_js_1.default(0);
    a.map((ele) => {
        total = total.add(new decimal_js_1.default(ele));
    });
    return total.toFixed(0);
}
exports.calculateAmountSameType = calculateAmountSameType;
//# sourceMappingURL=common.js.map