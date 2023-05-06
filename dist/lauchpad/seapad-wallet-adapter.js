"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletAdapter = void 0;
const seapad_func_1 = require("./seapad-func");
const seapad_input_1 = require("./seapad-input");
const common_1 = require("../common");
class SeapadWalletAdapter extends seapad_func_1.SeaPadFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider, version) {
        super();
        this._seaPadInput = new seapad_input_1.SeaPadInput(packageObjectId, module, version);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.changeAdmin(args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async changeOwner(args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.changeOwner(args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async createProject(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.createProject(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async addMilestone(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.addMilestone(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async resetMilestone(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.resetMilestone(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async setupProject(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.setupProject(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async saveProfile(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.saveProfile(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async addWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.addWhitelist(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async removeWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.removeWhitelist(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async startFundRaising(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.startFundRaising(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async buy(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const userAddress = this._walletContextState.account?.address || '';
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, args.amount, userAddress, this._suiProvider);
        const message = this._seaPadInput.buy(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async endFundRaising(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const message = this._seaPadInput.endFundRaising(types, args, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async endRefund(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const message = this._seaPadInput.endRefund(types, args, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async distributeRaisedFund(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const message = this._seaPadInput.distributeRaisedFund(types, args, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async refundTokenToOwner(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const message = this._seaPadInput.refundTokenToOwner(types, args, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async depositProject(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = this._walletContextState.account?.address || '';
        const _coins = await (0, common_1.getCoinObjects)(types.TOKEN, args.value, userAddress, this._suiProvider);
        const message = this._seaPadInput.depositProject(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async userClaimToken(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const message = this._seaPadInput.userClaimToken(types, args, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async claimRefund(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const message = this._seaPadInput.claimRefund(types, args, optionTx, gasBudget, packageObjectId, versionId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async vote(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.vote(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async addMaxAllocate(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.addMaxAllocate(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async removeMaxAllocate(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadInput.removeMaxAllocate(types, args, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async splitCoin(amount, to) {
        const message = this._seaPadInput.splitCoin(amount, to);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async splitCoins(amounts, to) {
        const message = this._seaPadInput.splitCoins(amounts, to);
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
exports.SeapadWalletAdapter = SeapadWalletAdapter;
//# sourceMappingURL=seapad-wallet-adapter.js.map