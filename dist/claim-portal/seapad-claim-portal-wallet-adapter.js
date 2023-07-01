"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletClaimPortalAdapter = void 0;
const seapad_claim_portal_func_1 = require("./seapad-claim-portal-func");
const seapad_claim_portal_input_1 = require("./seapad-claim-portal-input");
class SeapadWalletClaimPortalAdapter extends seapad_claim_portal_func_1.SeaPadClaimPortalFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._seaPadClaimPortalInput = new seapad_claim_portal_input_1.SeaPadClaimPortalInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async claim(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadClaimPortalInput.claim(types, args, optionTx, gasBudget, packageObjectId);
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