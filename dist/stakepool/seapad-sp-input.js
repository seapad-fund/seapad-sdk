"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadStakePoolInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_sp_func_1 = require("./seapad-sp-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadStakePoolInput extends seapad_sp_func_1.SeaPadStakePoolFunc {
    constructor(packageObjectId, module) {
        super();
        this._packageObjectId = packageObjectId;
        this._module = module;
    }
    registerPool(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        const [coin] = tx.splitCoins(tx.object(args.rewards), [tx.pure(args.num_rewards)]);
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::register_pool`,
            arguments: [
                coin,
                tx.pure(args.duration),
                tx.pure(args.global_config),
                tx.pure(args.decimalS),
                tx.pure(args.decimalR),
                tx.pure(clock),
                tx.pure(args.duration_unstake_time_ms),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
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
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
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
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
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
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    depositRewardCoins(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        const [coin] = tx.splitCoins(tx.object(args.reward_coins), [tx.pure(args.num_rewards)]);
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::deposit_reward_coins`,
            arguments: [
                tx.pure(args.pool),
                coin,
                tx.pure(args.global_config),
                tx.pure(clock),
            ],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    enableEmergency(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::enable_emergency`,
            arguments: [tx.pure(args.pool), tx.pure(args.global_config)],
            typeArguments: [types.S, types.R],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
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
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
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
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
}
exports.SeaPadStakePoolInput = SeaPadStakePoolInput;
//# sourceMappingURL=seapad-sp-input.js.map