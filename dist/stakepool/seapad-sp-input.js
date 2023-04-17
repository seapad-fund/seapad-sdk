"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadStakePoolInput = exports.getGasBudget = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_sp_func_1 = require("./seapad-sp-func");
function getGasBudget(gasBudget) {
    if (typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 20000000) {
        return 20000000;
    }
    else {
        return gasBudget;
    }
}
exports.getGasBudget = getGasBudget;
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadStakePoolInput extends seapad_sp_func_1.SeaPadStakePoolFunc {
    constructor(packageObjectId, module) {
        super();
        this._packageObjectId = packageObjectId;
        this._module = module;
    }
    registerPool(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::register_pool`,
            arguments: [
                tx.pure(args.rewards),
                tx.pure(args.duration),
                tx.pure(args.global_config),
                tx.pure(args.decimalS),
                tx.pure(args.decimalR),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    stake(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::stake`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.coins),
                tx.pure(args.global_config),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    unstake(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::unstake`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.stake_amount),
                tx.pure(args.global_config),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    harvest(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::harvest`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.global_config),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    depositRewardCoins(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::deposit_reward_coins`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.reward_coins),
                tx.pure(args.global_config),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    enableEmergency(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::enable_emergency`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.global_config),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    emergencyUnstake(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::emergency_unstake`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.amount),
                tx.pure(args.global_config),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
    withdrawRewardToTreasury(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::withdraw_reward_to_treasury`,
            arguments: [
                tx.pure(args.pool),
                tx.pure(args.amount),
                tx.pure(args.global_config),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget(getGasBudget(gasBudget));
        return tx;
    }
}
exports.SeaPadStakePoolInput = SeaPadStakePoolInput;
//# sourceMappingURL=seapad-sp-input.js.map