"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeapadWalletNftPoolAdapter = void 0;
const seapad_nft_campaign_func_1 = require("./seapad-nft-campaign-func");
const seapad_nft_campaign_input_1 = require("./seapad-nft-campaign-input");
class SeapadWalletNftPoolAdapter extends seapad_nft_campaign_func_1.SeaPadNftCampaignFunc {
    constructor(walletContextState, packageObjectId, module, suiProvider) {
        super();
        this._seaPadNftCampaignInput = new seapad_nft_campaign_input_1.SeaPadNftCampaignInput(packageObjectId, module);
        this._walletContextState = walletContextState;
        this._suiProvider = suiProvider;
    }
    async claimNft(types, args, optionTx, gasBudget, packageObjectId) {
        const message = this._seaPadNftCampaignInput.claimNft(types, args, optionTx, gasBudget, packageObjectId);
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
//# sourceMappingURL=seapad-nft-wallet-campaign-adapter.js.map