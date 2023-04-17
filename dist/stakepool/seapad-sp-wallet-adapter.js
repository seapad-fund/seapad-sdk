"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletSpAdapter = void 0;
const seapad_sp_func_1 = require("./seapad-sp-func");
const seapad_sp_input_1 = require("./seapad-sp-input");
class SeapadWalletSpAdapter extends seapad_sp_func_1.SeaPadStakePoolFunc {
    constructor(walletContextState, packageObjectId, module) {
        super();
        this._seaPadStakePoolInput = new seapad_sp_input_1.SeaPadStakePoolInput(packageObjectId, module);
        this._walletContextState = walletContextState;
    }
    async registerPool(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.registerPool(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async stake(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.stake(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async unstake(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.unstake(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async harvest(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.harvest(types, args, optionTx, gasBudget);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async depositRewardCoins(types, args, optionTx, gasBudget) {
        const message = this._seaPadStakePoolInput.depositRewardCoins(types, args, optionTx, gasBudget);
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