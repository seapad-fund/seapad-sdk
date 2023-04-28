"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletNftPoolAdapter = void 0;
const seapad_nft_func_1 = require("./seapad-nft-func");
const seapad_nft_input_1 = require("./seapad-nft-input");
const common_1 = require("../common");
class SeapadWalletNftPoolAdapter extends seapad_nft_func_1.SeaPadNftPoolFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._seaPadNftPoolInput = new seapad_nft_input_1.SeaPadNftPoolInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.changeAdmin(args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async createPool(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.createPool(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async addCollection(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.addCollection(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async startPool(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.startPool(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async buyNft(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = this._walletContextState.account?.address || '';
        let _coins = await (0, common_1.getCoinObjects)(types.COIN, args.amount, userAddress, this._suiProvider);
        const message = this._seaPadNftPoolInput.buyNft(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async stopPool(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.stopPool(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async claimNft(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.claimNft(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async claimRefund(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.claimRefund(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async addWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.addWhitelist(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async withdrawFund(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.withdrawFund(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async changeTreasuryAdmin(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftPoolInput.changeTreasuryAdmin(types, args, optionTx, gasBudget, packageObjectId);
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
exports.SeapadWalletNftPoolAdapter = SeapadWalletNftPoolAdapter;
//# sourceMappingURL=seapad-nft-wallet-adapter.js.map