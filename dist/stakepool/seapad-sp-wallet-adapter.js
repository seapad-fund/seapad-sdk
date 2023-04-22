"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletSpAdapter = void 0;
const seapad_sp_func_1 = require("./seapad-sp-func");
const seapad_sp_input_1 = require("./seapad-sp-input");
const common_1 = require("../common");
class SeapadWalletSpAdapter extends seapad_sp_func_1.SeaPadStakePoolFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._seaPadStakePoolInput = new seapad_sp_input_1.SeaPadStakePoolInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async registerPool(types, args, optionTx, gasBudget) {
        const userAddress = this._walletContextState.account?.address || '';
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.num_rewards, userAddress, this._suiProvider);
        const message = this._seaPadStakePoolInput.registerPool(types, { ...args, rewards: _coins }, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async stake(types, args, optionTx, gasBudget) {
        const userAddress = this._walletContextState.account?.address || '';
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.amount, userAddress, this._suiProvider);
        const message = this._seaPadStakePoolInput.stake(types, { ...args, coins: _coins }, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async unstake(types, args, optionTx, gasBudget) {
        const userAddress = this._walletContextState.account?.address || '';
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.amount, userAddress, this._suiProvider);
        const message = this._seaPadStakePoolInput.unstake(types, { ...args, coins: _coins }, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async harvest(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.harvest(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async depositRewardCoins(types, args, optionTx, gasBudget) {
        const userAddress = this._walletContextState.account?.address || '';
        let _coins = await (0, common_1.getCoinObjects)(types.R, args.num_rewards, userAddress, this._suiProvider);
        const message = this._seaPadStakePoolInput.depositRewardCoins(types, { ...args, reward_coins: _coins }, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async enableEmergency(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.enableEmergency(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async emergencyUnstake(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.emergencyUnstake(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async withdrawRewardToTreasury(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.withdrawRewardToTreasury(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    buildTx(message) {
        return {
            transactionBlock: message,
            options: {
                showInput: false,
                showEffects: true,
                showEvents: true,
                showObjectChanges: false,
                showBalanceChanges: false,
            },
            requestType: 'WaitForEffectsCert',
        };
    }
}
exports.SeapadWalletSpAdapter = SeapadWalletSpAdapter;
//# sourceMappingURL=seapad-sp-wallet-adapter.js.map