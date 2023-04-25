"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadStakePoolAdapter = void 0;
const seapad_sp_func_1 = require("./seapad-sp-func");
const seapad_sp_input_1 = require("./seapad-sp-input");
const common_1 = require("../common");
class SeaPadStakePoolAdapter extends seapad_sp_func_1.SeaPadStakePoolFunc {
    constructor(signer, packageObjectId, module) {
        super();
        this._seaPadStakePoolInput = new seapad_sp_input_1.SeaPadStakePoolInput(packageObjectId, module);
        this._signer = signer;
        this._suiProvider = signer.provider;
    }
    _getOptionTx(optionTx) {
        if (optionTx) {
            return optionTx;
        }
        return {
            options: {
                showInput: true,
                showEffects: true,
                showEvents: true,
                showObjectChanges: false,
                showBalanceChanges: false,
            },
            requestType: 'WaitForEffectsCert',
        };
    }
    async registerPool(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.num_rewards, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.registerPool(types, { ...args, rewards: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async stake(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.amount, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.stake(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async unstake(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.unstake(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async harvest(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.harvest(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async depositRewardCoins(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.num_rewards, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.depositRewardCoins(types, { ...args, reward_coins: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async enableEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.enableEmergency(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async emergencyUnstake(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.emergencyUnstake(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async withdrawRewardToTreasury(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadStakePoolInput.withdrawRewardToTreasury(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
}
exports.SeaPadStakePoolAdapter = SeaPadStakePoolAdapter;
//# sourceMappingURL=seapad-sp-adapter.js.map