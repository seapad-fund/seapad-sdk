"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadReferralWalletAdapter = void 0;
const seapad_ref_func_1 = require("./seapad-ref-func");
const seapad_ref_input_1 = require("./seapad-ref-input");
const common_1 = require("../common");
class SeapadReferralWalletAdapter extends seapad_ref_func_1.SeaPadReferralFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._SeaPadReferralInput = new seapad_ref_input_1.SeaPadReferralInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.changeAdmin(args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async createProject(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.createProject(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async upsertReferal(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.upsertReferal(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async removeReferal(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.removeReferal(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async startClaimProject(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.startClaimProject(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async claimReward(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.claimReward(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async closeProject(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.closeProject(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async withdrawProjectFund(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._SeaPadReferralInput.withdrawProjectFund(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async depositProjectFund(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = this._walletContextState.account?.address || '';
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, args.amount, userAddress, this._suiProvider);
        const message = this._SeaPadReferralInput.depositProjectFund(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId);
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
exports.SeapadReferralWalletAdapter = SeapadReferralWalletAdapter;
//# sourceMappingURL=seapad-ref-wallet-adapter.js.map