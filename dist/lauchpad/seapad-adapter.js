"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadAdapter = void 0;
const seapad_func_1 = require("./seapad-func");
const seapad_input_1 = require("./seapad-input");
const common_1 = require("../common");
class SeaPadAdapter extends seapad_func_1.SeaPadFunc {
    constructor(signer, packageObjectId, module, version) {
        super();
        this._seaPadInput = new seapad_input_1.SeaPadInput(packageObjectId, module, version);
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
            transactionBlock: this._seaPadInput.changeAdmin(args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async changeOwner(args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.changeOwner(args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async createProject(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.createProject(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async addMilestone(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.addMilestone(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async resetMilestone(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.resetMilestone(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async setupProject(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.setupProject(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async saveProfile(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.saveProfile(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async addWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.addWhitelist(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async removeWhitelist(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.removeWhitelist(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async startFundRaising(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.startFundRaising(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async buy(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        const userAddress = await this._signer.getAddress();
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, args.amount, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.buy(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async endFundRaising(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.endFundRaising(types, args, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async endRefund(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.endRefund(types, args, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async distributeRaisedFund(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.distributeRaisedFund(types, args, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async refundTokenToOwner(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.refundTokenToOwner(types, args, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async depositProject(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        const _coins = await (0, common_1.getCoinObjects)(types.TOKEN, args.value, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.depositProject(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async userClaimToken(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.userClaimToken(types, args, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async claimRefund(types, args, optionTx, gasBudget, packageObjectId, versionId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.claimRefund(types, args, optionTx, gasBudget, packageObjectId, versionId),
            ...this._getOptionTx(optionTx),
        });
    }
    async vote(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.vote(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async addMaxAllocate(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.addMaxAllocate(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async removeMaxAllocate(types, args, optionTx, gasBudget, packageObjectId) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.removeMaxAllocate(types, args, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async getTokenInfo(coinType) {
        const coinMetaData = await this._suiProvider.getCoinMetadata({ coinType });
        const totalSupply = await this._suiProvider.getTotalSupply({ coinType });
        return {
            coin_metadata_object_id: coinMetaData?.id,
            decimals: coinMetaData?.decimals,
            icon_url: coinMetaData?.iconUrl,
            description: coinMetaData?.description,
            symbol: coinMetaData?.symbol,
            total_supply: totalSupply?.value,
        };
    }
    async splitCoin(amount, to) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.splitCoin(amount, to),
        });
    }
    async splitCoins(amounts, to) {
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadInput.splitCoins(amounts, to),
        });
    }
}
exports.SeaPadAdapter = SeaPadAdapter;
//# sourceMappingURL=seapad-adapter.js.map