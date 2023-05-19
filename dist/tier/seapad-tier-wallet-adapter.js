"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadTierWalletAdapter = void 0;
const seapad_tier_func_1 = require("./seapad-tier-func");
const seapad_tier_input_1 = require("./seapad-tier-input");
const common_1 = require("../common");
class SeapadTierWalletAdapter extends seapad_tier_func_1.SeaPadTierFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._SeaPadTierInput = new seapad_tier_input_1.SeaPadTierInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadTierInput.changeAdmin(args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async createPool(types, args, optionTx, gasBudget, packageObjectId) {
        throw new Error('Method not implemented.');
    }
    async setEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        throw new Error('Method not implemented.');
    }
    async lock(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = this._walletContextState.account?.address || '';
        const _coins = await (0, common_1.getCoinObjects)(types.TOKEN, args.amount, userAddress, this._suiProvider);
        const message = this._SeaPadTierInput.lock(types, { ...args, deal: _coins }, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async unlock(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadTierInput.unlock(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async unlockEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadTierInput.unlockEmergency(types, args, optionTx, gasBudget, packageObjectId);
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
exports.SeapadTierWalletAdapter = SeapadTierWalletAdapter;
//# sourceMappingURL=seapad-tier-wallet-adapter.js.map