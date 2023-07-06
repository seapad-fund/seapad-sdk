"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletClaimPortalAdapter = void 0;
const seapad_claim_portal_func_1 = require("./seapad-claim-portal-func");
const seapad_claim_portal_input_1 = require("./seapad-claim-portal-input");
const common_1 = require("../common");
class SeapadWalletClaimPortalAdapter extends seapad_claim_portal_func_1.SeaPadClaimPortalFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._seaPadClaimPortalInput = new seapad_claim_portal_input_1.SeaPadClaimPortalInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async claim(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = this._walletContextState.account?.address || '';
        const _coins = await (0, common_1.getCoinObjects)("0x2::sui::SUI", args.fee, userAddress, this._suiProvider);
        const message = this._seaPadClaimPortalInput.claim(types, { ...args, coinsFee: _coins }, optionTx, gasBudget, packageObjectId);
        return await this._walletContextState.signAndExecuteTransactionBlock(this.buildTx(message));
    }
    async addFunds(types, args, optionTx, gasBudget, packageObjectId) {
        const userAddress = this._walletContextState.account?.address || '';
        const _coins = await (0, common_1.getCoinObjects)(types.COIN, args.totalFund, userAddress, this._suiProvider);
        const message = this._seaPadClaimPortalInput.addFunds(types, { ...args, coins: _coins }, optionTx, gasBudget, packageObjectId);
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
exports.SeapadWalletClaimPortalAdapter = SeapadWalletClaimPortalAdapter;
//# sourceMappingURL=seapad-claim-portal-wallet-adapter.js.map