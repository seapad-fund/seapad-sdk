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
        return await this._signer.executeMoveCall(this._seaPadInput.changeAdmin(args, gasBudget));
    }
    async changeOwner(args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.changeOwner(args, gasBudget));
    }
    async createProject(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.createProject(types, args, gasBudget));
    }
    async addMilestone(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.addMilestone(types, args, gasBudget));
    }
    async resetMilestone(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.resetMilestone(types, args, gasBudget));
    }
    async setupProject(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.setupProject(types, args, gasBudget));
    }
    async saveProfile(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.saveProfile(types, args, gasBudget));
    }
    async addWhitelist(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.addWhitelist(types, args, gasBudget));
    }
    async removeWhitelist(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.removeWhitelist(types, args, gasBudget));
    }
    async startFundRaising(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.startFundRaising(types, args, gasBudget));
    }
    async buy(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.buy(types, args, gasBudget));
    }
    async endFundRaising(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.endFundRaising(types, args, gasBudget));
    }
    async endRefund(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.endRefund(types, args, gasBudget));
    }
    async distributeRaisedFund(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.distributeRaisedFund(types, args, gasBudget));
    }
    async refundTokenToOwner(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.refundTokenToOwner(types, args, gasBudget));
    }
    async depositProject(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.depositProject(types, args, gasBudget));
    }
    async userClaimToken(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.userClaimToken(types, args, gasBudget));
    }
    async claimRefund(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.claimRefund(types, args, gasBudget));
    }
    async vote(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.vote(types, args, gasBudget));
    }
    async addMaxAllocate(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.addMaxAllocate(types, args, gasBudget));
    }
    async removeMaxAllocate(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.removeMaxAllocate(types, args, gasBudget));
    }
    async getTokenInfo(coinType) {
        const coinMetaData = await this._suiProvider.getCoinMetadata(coinType);
        const totalSupply = await this._suiProvider.getTotalSupply(coinType);
        return {
            coin_metadata_object_id: coinMetaData.id,
            decimal: coinMetaData.decimals,
            icon_url: coinMetaData.iconUrl,
            description: coinMetaData.description,
            symbol: coinMetaData.symbol,
            total_supply: totalSupply.value,
        };
    }
}
exports.SeaPadAdapter = SeaPadAdapter;
//# sourceMappingURL=seapad-adapter.js.map