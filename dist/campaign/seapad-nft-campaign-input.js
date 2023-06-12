"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadNftCampaignInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_nft_campaign_func_1 = require("./seapad-nft-campaign-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadNftCampaignInput extends seapad_nft_campaign_func_1.SeaPadNftCampaignFunc {
    constructor(packageObjectId, module) {
        super();
        this._getPackageObjectId = (packageObjectId) => {
            if (packageObjectId != null && packageObjectId != undefined) {
                return packageObjectId;
            }
            return this._packageObjectId;
        };
        this._packageObjectId = packageObjectId;
        this._module = module;
    }
    claimNft(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::claimNft`,
            arguments: [tx.pure(args.campaign), tx.pure(clock)],
            typeArguments: [],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
}
exports.SeaPadNftCampaignInput = SeaPadNftCampaignInput;
//# sourceMappingURL=seapad-nft-campaign-input.js.map