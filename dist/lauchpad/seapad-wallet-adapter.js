"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletAdapter = void 0;
const seapad_func_1 = require("./seapad-func");
const seapad_input_1 = require("./seapad-input");
class SeapadWalletAdapter extends seapad_func_1.SeaPadFunc {
    constructor(walletContextState, packageObjectId, module) {
        super();
        this._seaPadInput = new seapad_input_1.SeaPadInput(packageObjectId, module);
        this._walletContextState = walletContextState;
    }
    async changeAdmin(args, gasBudget) {
        const message = this._seaPadInput.changeAdmin(args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async changeOwner(args, gasBudget) {
        const message = this._seaPadInput.changeOwner(args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async createProject(types, args, gasBudget) {
        const message = this._seaPadInput.createProject(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async addMilestone(types, args, gasBudget) {
        const message = this._seaPadInput.addMilestone(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async resetMilestone(types, args, gasBudget) {
        const message = this._seaPadInput.resetMilestone(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async setupProject(types, args, gasBudget) {
        const message = this._seaPadInput.setupProject(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async saveProfile(types, args, gasBudget) {
        const message = this._seaPadInput.saveProfile(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async addWhitelist(types, args, gasBudget) {
        const message = this._seaPadInput.addWhitelist(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async removeWhitelist(types, args, gasBudget) {
        const message = this._seaPadInput.removeWhitelist(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async startFundRaising(types, args, gasBudget) {
        const message = this._seaPadInput.startFundRaising(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async buy(types, args, gasBudget) {
        const message = this._seaPadInput.buy(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async endFundRaising(types, args, gasBudget) {
        const message = this._seaPadInput.endFundRaising(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async endRefund(types, args, gasBudget) {
        const message = this._seaPadInput.endRefund(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async distributeRaisedFund(types, args, gasBudget) {
        const message = this._seaPadInput.distributeRaisedFund(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async refundTokenToOwner(types, args, gasBudget) {
        const message = this._seaPadInput.refundTokenToOwner(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async depositProject(types, args, gasBudget) {
        const message = this._seaPadInput.depositProject(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async userClaimToken(types, args, gasBudget) {
        const message = this._seaPadInput.userClaimToken(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async claimRefund(types, args, gasBudget) {
        const message = this._seaPadInput.claimRefund(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async vote(types, args, gasBudget) {
        const message = this._seaPadInput.vote(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async like(types, args, gasBudget) {
        throw new Error('Contract unsupport');
    }
    async watch(types, args, gasBudget) {
        throw new Error('Contract unsupport');
    }
    async addMaxAllocate(types, args, gasBudget) {
        const message = this._seaPadInput.addMaxAllocate(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    async removeMaxAllocate(types, args, gasBudget) {
        const message = this._seaPadInput.removeMaxAllocate(types, args, gasBudget);
        return await this._walletContextState.signAndExecuteTransaction(this.buildTx(message));
    }
    buildTx(message) {
        return {
            transaction: {
                kind: 'moveCall',
                data: message,
            },
        };
    }
}
exports.SeapadWalletAdapter = SeapadWalletAdapter;
//# sourceMappingURL=seapad-wallet-adapter.js.map