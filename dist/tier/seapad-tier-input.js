"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadTierInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_tier_func_1 = require("./seapad-tier-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadTierInput extends seapad_tier_func_1.SeaPadTierFunc {
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
    changeAdmin(args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::change_admin`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.to)],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    createPool(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::createPool`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.minLock),
                tx.pure(args.lockPeriodMs),
            ],
            typeArguments: [types.TOKEN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    setEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::setEmergency`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.pool),
                tx.pure(args.emergency),
            ],
            typeArguments: [types.TOKEN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    lock(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        const coin_trans = (0, common_1.manageObjectCoin)(types.TOKEN, args.deal, args.amount, tx);
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::lock`,
            arguments: [
                tx.pure(coin_trans),
                tx.pure(args.pool),
                tx.pure(clock),
            ],
            typeArguments: [types.TOKEN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    unlock(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::unlock`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.amount),
                tx.pure(clock),
            ],
            typeArguments: [types.TOKEN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    unlockEmergency(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::unlockEmergency`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(clock),
            ],
            typeArguments: [types.TOKEN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
}
exports.SeaPadTierInput = SeaPadTierInput;
//# sourceMappingURL=seapad-tier-input.js.map