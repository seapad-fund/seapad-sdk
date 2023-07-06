"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadClaimPortalAdapter = void 0;
const seapad_claim_portal_func_1 = require("./seapad-claim-portal-func");
const common_1 = require("../common");
const seapad_claim_portal_input_1 = require("./seapad-claim-portal-input");
class SeaPadClaimPortalAdapter extends seapad_claim_portal_func_1.SeaPadClaimPortalFunc {
    constructor(signer, packageObjectId, module) {
        super();
        this._seaPadNftPoolInput = new seapad_claim_portal_input_1.SeaPadClaimPortalInput(packageObjectId, module);
        this._signer = signer;
        this._suiProvider = signer.provider;
    }
    async claim(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        const _coins = await (0, common_1.getCoinObjects)("0x2::sui::SUI", args.fee, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.claim(types, { ...args, coinsFee: _coins }, optionTx, gasBudget, packageObjectId),
            ...this._getOptionTx(optionTx),
        });
    }
    async addFunds(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = await this._signer.getAddress();
        const amount = (0, common_1.calculateAmountSameType)(args.values);
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, amount, userAddress, this._suiProvider);
        return await this._signer.signAndExecuteTransactionBlock({
            transactionBlock: this._seaPadNftPoolInput.addFunds(types, { ...args, coins: _coins, totalFund: amount }, optionTx, gasBudget, packageObjectId),
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
exports.SeaPadClaimPortalAdapter = SeaPadClaimPortalAdapter;
//# sourceMappingURL=seapad-claim-portal-adapter.js.map