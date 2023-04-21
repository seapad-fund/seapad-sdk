"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadInput = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_func_1 = require("./seapad-func");
const common_1 = require("../common");
const clock = '0x0000000000000000000000000000000000000000000000000000000000000006';
class SeaPadInput extends seapad_func_1.SeaPadFunc {
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
    changeOwner(args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::change_owner`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.new_owner)],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    createProject(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::create_project`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.owner),
                tx.pure(args.vesting_type),
                tx.pure(args.linear_time),
                tx.pure(args.coin_decimals),
                tx.pure(args.token_decimals),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    addMilestone(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_milestone`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.pure(args.time),
                tx.pure(args.percent),
                tx.object(clock),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    resetMilestone(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::reset_milestone`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    setupProject(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::setup_project`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.pure(args.round),
                tx.pure(args.usewhitelist),
                tx.pure(args.swap_ratio_sui),
                tx.pure(args.swap_ratio_token),
                tx.pure(args.max_allocate),
                tx.pure(args.start_time),
                tx.pure(args.end_time),
                tx.pure(args.soft_cap),
                tx.pure(args.hard_cap),
                tx.object(clock),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    saveProfile(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::save_profile`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.pure(args.name),
                tx.pure(args.twitter),
                tx.pure(args.discord),
                tx.pure(args.telegram),
                tx.pure(args.website),
            ],
            typeArguments: [types.COIN, types.TOKEN],
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
                tx.pure(args.project),
                tx.pure(args.user_list),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    removeWhitelist(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::remove_whitelist`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.pure(args.user_list),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    startFundRaising(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::start_fund_raising`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.object(clock),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    buy(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        let coin_trans;
        if (types.COIN === '0x2::sui::SUI') {
            const [sui_trans] = tx.splitCoins(tx.gas, [tx.pure(args.amount)]);
            coin_trans = sui_trans;
        }
        else {
            if (args.coins.length === 1) {
                coin_trans = tx.pure(args.coins[0]);
            }
            else {
                const coin_base = args.coins.pop();
                tx.mergeCoins(tx.object(coin_base), args.coins.map((coin) => tx.object(coin)));
                coin_trans = tx.pure(coin_base);
            }
        }
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::buy`,
            arguments: [
                coin_trans,
                tx.pure(args.amount),
                tx.pure(args.project),
                tx.object(clock),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    endFundRaising(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::end_fund_raising`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.object(clock),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    endRefund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::end_refund`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    distributeRaisedFund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::distribute_raised_fund`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    refundTokenToOwner(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::refund_token_to_owner`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    depositProject(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::deposit_by_owner`,
            arguments: [
                tx.pure(args.coin),
                tx.pure(args.value),
                tx.pure(args.project),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    userClaimToken(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_token`,
            arguments: [tx.pure(args.project), tx.object(clock)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    claimRefund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_refund`,
            arguments: [tx.pure(args.project)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    vote(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::vote`,
            arguments: [tx.pure(args.project)],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    addMaxAllocate(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.user),
                tx.pure(args.max_allocate),
                tx.pure(args.project),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    removeMaxAllocate(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.user),
                tx.pure(args.project),
            ],
            typeArguments: [types.COIN, types.TOKEN],
        });
        tx.setGasBudget((0, common_1.getGasBudget)(gasBudget));
        return tx;
    }
    splitCoin(amount, to) {
        const tx = new sui_js_1.TransactionBlock();
        const [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.transferObjects([coin], tx.object(to));
        return tx;
    }
    splitCoins(amounts, to) {
        const tx = new sui_js_1.TransactionBlock();
        const [coin] = tx.splitCoins(tx.gas, amounts.map((amount) => tx.pure(amount)));
        tx.transferObjects([coin], tx.object(to));
        return tx;
    }
}
exports.SeaPadInput = SeaPadInput;
//# sourceMappingURL=seapad-input.js.map