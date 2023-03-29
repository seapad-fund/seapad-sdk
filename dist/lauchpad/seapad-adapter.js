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
            requestType: "WaitForEffectsCert"
        };
    }
    async changeAdmin(args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.changeAdmin(args), ...this._getOptionTx(optionTx) });
    }
    async changeOwner(args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.changeOwner(args), ...this._getOptionTx(optionTx) });
    }
    async createProject(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.createProject(types, args), ...this._getOptionTx(optionTx) });
    }
    async addMilestone(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addMilestone(types, args), ...this._getOptionTx(optionTx) });
    }
    async resetMilestone(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.resetMilestone(types, args), ...this._getOptionTx(optionTx) });
    }
    async setupProject(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.setupProject(types, args), ...this._getOptionTx(optionTx) });
    }
    async saveProfile(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.saveProfile(types, args), ...this._getOptionTx(optionTx) });
    }
    async addWhitelist(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addWhitelist(types, args), ...this._getOptionTx(optionTx) });
    }
    async removeWhitelist(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.removeWhitelist(types, args), ...this._getOptionTx(optionTx) });
    }
    async startFundRaising(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.startFundRaising(types, args), ...this._getOptionTx(optionTx) });
    }
    async buy(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.buy(types, args), ...this._getOptionTx(optionTx) });
    }
    async endFundRaising(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.endFundRaising(types, args), ...this._getOptionTx(optionTx) });
    }
    async endRefund(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.endRefund(types, args), ...this._getOptionTx(optionTx) });
    }
    async distributeRaisedFund(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.distributeRaisedFund(types, args), ...this._getOptionTx(optionTx) });
    }
    async refundTokenToOwner(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.refundTokenToOwner(types, args), ...this._getOptionTx(optionTx) });
    }
    async depositProject(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.depositProject(types, args), ...this._getOptionTx(optionTx) });
    }
    async userClaimToken(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.userClaimToken(types, args), ...this._getOptionTx(optionTx) });
    }
    async claimRefund(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.claimRefund(types, args), ...this._getOptionTx(optionTx) });
    }
    async vote(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.vote(types, args), ...this._getOptionTx(optionTx) });
    }
    async addMaxAllocate(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addMaxAllocate(types, args), ...this._getOptionTx(optionTx) });
    }
    async removeMaxAllocate(types, args, optionTx, gasBudget) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.removeMaxAllocate(types, args), ...this._getOptionTx(optionTx) });
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
    async splitCoin(splits) {
        return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.splitCoin(splits) });
    }
}
exports.SeaPadAdapter = SeaPadAdapter;
//# sourceMappingURL=seapad-adapter.js.map