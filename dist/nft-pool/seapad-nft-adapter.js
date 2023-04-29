"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadNftPoolAdapter = void 0;
const seapad_nft_func_1 = require("./seapad-nft-func");
const common_1 = require("../common");
const seapad_nft_input_1 = require("./seapad-nft-input");
class SeaPadNftPoolAdapter extends seapad_nft_func_1.SeaPadNftPoolFunc {
    constructor(signer, packageObjectId, module) {
        super();
        this._seaPadNftPoolInput = new seapad_nft_input_1.SeaPadNftPoolInput(packageObjectId, module);
        this._signer = signer;
        this._suiProvider = signer.provider;
    }
    async changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.changeAdmin(args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async createPool(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.createPool(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async addCollection(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.addCollection(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async startPool(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.startPool(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async buyNft(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        const amount = (0, common_1.calculateAmount)(args.nft_amounts, args.nft_types);
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, amount, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.buyNft(types, { ...args, coins: _coins, amount }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async stopPool(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.stopPool(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async claimNft(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.claimNft(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async claimRefund(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.claimRefund(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async addWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.addWhitelist(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async removeWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.removeWhitelist(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async withdrawFund(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.withdrawFund(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async changeTreasuryAdmin(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.changeTreasuryAdmin(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
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
}
exports.SeaPadNftPoolAdapter = SeaPadNftPoolAdapter;
//# sourceMappingURL=seapad-nft-adapter.js.map