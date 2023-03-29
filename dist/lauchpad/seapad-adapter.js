"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadAdapter = void 0;
const seapad_func_1 = require("./seapad-func");
const seapad_input_1 = require("./seapad-input");
class SeaPadAdapter extends seapad_func_1.SeaPadFunc {
    constructor(signer, packageObjectId, module) {
        super();
        this._seaPadInput = new seapad_input_1.SeaPadInput(packageObjectId, module);
        this._signer = signer;
        this._suiProvider = signer.provider;
    }
    async changeAdmin(args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.changeAdmin(args) });
    }
    async changeOwner(args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.changeOwner(args) });
    }
    async createProject(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.createProject(types, args) });
    }
    async addMilestone(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addMilestone(types, args) });
    }
    async resetMilestone(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.resetMilestone(types, args) });
    }
    async setupProject(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.setupProject(types, args) });
    }
    async saveProfile(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.saveProfile(types, args) });
    }
    async addWhitelist(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addWhitelist(types, args) });
    }
    async removeWhitelist(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.removeWhitelist(types, args) });
    }
    async startFundRaising(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.startFundRaising(types, args) });
    }
    async buy(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.buy(types, args) });
    }
    async endFundRaising(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.endFundRaising(types, args) });
    }
    async endRefund(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.endRefund(types, args) });
    }
    async distributeRaisedFund(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.distributeRaisedFund(types, args) });
    }
    async refundTokenToOwner(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.refundTokenToOwner(types, args) });
    }
    async depositProject(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.depositProject(types, args) });
    }
    async userClaimToken(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.userClaimToken(types, args) });
    }
    async claimRefund(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.claimRefund(types, args) });
    }
    async vote(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.vote(types, args) });
    }
    async addMaxAllocate(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addMaxAllocate(types, args) });
    }
    async removeMaxAllocate(types, args, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.removeMaxAllocate(types, args) });
    }
    async getTokenInfo(coinType) {
        const coinMetaData = await this._suiProvider.getCoinMetadata({ coinType });
        const totalSupply = await this._suiProvider.getTotalSupply({ coinType });
        return {
            coin_metadata_object_id: coinMetaData.id,
            decimal: coinMetaData.decimals,
            icon_url: coinMetaData.iconUrl,
            description: coinMetaData.description,
            symbol: coinMetaData.symbol,
            total_supply: totalSupply.value,
        };
    }
    async splitCoin(coinId, splits) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.splitCoin(coinId, splits) });
    }
}
exports.SeaPadAdapter = SeaPadAdapter;
//# sourceMappingURL=seapad-adapter.js.map