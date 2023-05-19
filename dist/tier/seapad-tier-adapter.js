"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadTierAdapter = void 0;
const seapad_tier_func_1 = require("./seapad-tier-func");
const seapad_tier_input_1 = require("./seapad-tier-input");
const common_1 = require("../common");
class SeaPadTierAdapter extends seapad_tier_func_1.SeaPadTierFunc {
    constructor(signer, packageObjectId, module) {
        super();
        this._seaPadTierInput = new seapad_tier_input_1.SeaPadTierInput(packageObjectId, module);
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
    async changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadTierInput.changeAdmin(args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async createPool(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadTierInput.createPool(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async setEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadTierInput.setEmergency(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async lock(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        const _coins = await (0, common_1.getCoinObjects)(types.TOKEN, args.amount, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadTierInput.lock(types, { ...args, deal: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async unlock(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadTierInput.unlock(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async unlockEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadTierInput.unlockEmergency(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
}
exports.SeaPadTierAdapter = SeaPadTierAdapter;
//# sourceMappingURL=seapad-tier-adapter.js.map