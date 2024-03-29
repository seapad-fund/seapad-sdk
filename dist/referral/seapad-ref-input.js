"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadReferralInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_ref_func_1 = require("./seapad-ref-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadReferralInput extends seapad_ref_func_1.SeaPadReferralFunc {
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
    createProject(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::create`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.distribute_time_ms),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    upsertReferral(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::upsert`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.referral),
                tx.pure(args.users),
                tx.pure(args.rewards),
                // tx.object(clock),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    removeReferral(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::remove`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.referral),
                tx.pure(args.users),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    updateDistributeTime(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::update_distribute_time`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.distribute_time_ms),
                tx.pure(args.referral),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    startClaimProject(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::start_claim_project`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.referral),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    claimReward(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::claim_reward`,
            arguments: [
                tx.pure(args.referral),
                tx.object(clock),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    closeProject(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::close`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.referral),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    depositProjectFund(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        const coin_trans = (0, common_1.manageObjectCoin)(types.COIN, args.coins, args.amount, tx);
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::deposit_fund`,
            arguments: [
                tx.pure(args.referral),
                coin_trans,
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
    withdrawProjectFund(types, args, optionTx, gasBudget, packageObjectId) {
        let tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._getPackageObjectId(packageObjectId)}::${this._module}::withdraw_fund`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.referral),
                tx.pure(args.to),
            ],
            typeArguments: [types.COIN],
        });
        tx = (0, common_1.configGasBudget)(tx, gasBudget);
        return tx;
    }
}
exports.SeaPadReferralInput = SeaPadReferralInput;
//# sourceMappingURL=seapad-ref-input.js.map