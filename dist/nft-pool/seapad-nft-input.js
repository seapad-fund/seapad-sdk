"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadNftPoolInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_nft_func_1 = require("./seapad-nft-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadNftPoolInput extends seapad_nft_func_1.SeaPadNftPoolFunc {
    constructor(packageObjectId, module) {
        super();
        this._packageObjectId = packageObjectId;
        this._module = module;
    }
    changeAdmin(args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::change_admin`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.to)],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    createPool(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::create_pool`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.owner),
                tx.pure(args.soft_cap),
                tx.pure(args.hard_cap),
                tx.pure(args.round),
                tx.pure(args.use_whitelist),
                tx.pure(args.vesting_time),
                tx.pure(args.allocate),
                tx.pure(args.start_time),
                tx.pure(args.end_time),
                tx.pure(clock),
            ],
            typeArguments: [types.COIN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    addTemplate(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_template`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.pool),
                tx.pure(args.name),
                tx.pure(args.description),
                tx.pure(args.url),
                tx.pure(args.price),
                tx.pure(args.type),
                tx.pure(clock)
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    startPool(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::start_pool`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.pool),
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    buyNft(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        let coin_trans = (0, common_1.manageObjectCoin)(types.COIN, args.coins, args.amount, tx);
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::buy_nft`,
            arguments: [
                coin_trans,
                tx.pure(args.nft_types),
                tx.pure(args.nft_amounts),
                tx.pure(args.pool),
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    stopPool(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::stop_pool`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.pool)
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    claimNft(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_nft`,
            arguments: [
                tx.pure(args.pool)
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    claimRefund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_refund`,
            arguments: [
                tx.pure(args.pool)
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    addWhitelist(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_whitelist`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.pool),
                tx.pure(args.tos)
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    withdrawFund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_whitelist`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.pool),
                tx.pure(args.amt)
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    changeTreasuryAdmin(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_whitelist`,
            arguments: [
                tx.pure(args.admin_treasury_cap),
                tx.pure(args.to),
            ],
            typeArguments: [types.COIN]
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
}
exports.SeaPadNftPoolInput = SeaPadNftPoolInput;
//# sourceMappingURL=seapad-nft-input.js.map