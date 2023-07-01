"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadClaimPortalInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_claim_portal_func_1 = require("./seapad-claim-portal-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadClaimPortalInput extends seapad_claim_portal_func_1.SeaPadClaimPortalFunc {
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
    claim(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::claim`,
            arguments: [
                tx.pure(args.project),
                tx.pure(clock),
                tx.pure(args.version),
            ],
            typeArguments: [],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
}
exports.SeaPadClaimPortalInput = SeaPadClaimPortalInput;
//# sourceMappingURL=seapad-claim-portal-input.js.map