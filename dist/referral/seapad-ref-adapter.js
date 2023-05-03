"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadReferralAdapter = void 0;
const seapad_ref_func_1 = require("./seapad-ref-func");
const seapad_ref_input_1 = require("./seapad-ref-input");
const common_1 = require("../common");
class SeaPadReferralAdapter extends seapad_ref_func_1.SeaPadReferralFunc {
    constructor(signer, packageObjectId, module) {
        super();
        this._seaPadReferralInput = new seapad_ref_input_1.SeaPadReferralInput(packageObjectId, module);
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
            transactionBlock: this._seaPadReferralInput.changeAdmin(args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async createProject(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.createProject(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async upsertReferal(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.upsertReferal(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async removeReferal(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.removeReferal(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async updateDistributeTime(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.updateDistributeTime(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async startClaimProject(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.startClaimProject(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async claimReward(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.claimReward(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async closeProject(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.closeProject(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async depositProjectFund(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, args.amount, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.depositProjectFund(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async withdrawProjectFund(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadReferralInput.withdrawProjectFund(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
}
exports.SeaPadReferralAdapter = SeaPadReferralAdapter;
//# sourceMappingURL=seapad-ref-adapter.js.map