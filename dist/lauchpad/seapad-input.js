"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadInput = exports.getGasBudget = void 0;
const sui_js_1 = require("@mysten/sui.js");
const seapad_func_1 = require("./seapad-func");
function getGasBudget(gasBudget) {
    if (typeof gasBudget == undefined || gasBudget == null || gasBudget < 1000) {
        return 5000;
    }
    else {
        return gasBudget;
    }
}
exports.getGasBudget = getGasBudget;
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
        return tx;
    }
    changeOwner(args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::change_owner`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.new_owner)],
        });
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
                tx.pure(args.coin_metadata),
            ],
            typeArguments: [types.COIN],
        });
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
            ],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    resetMilestone(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::reset_milestone`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
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
            ],
            typeArguments: [types.COIN],
        });
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
            typeArguments: [types.COIN],
        });
        return tx;
    }
    addWhitelist(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_whitelist`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.makeMoveVec({ objects: args.user_list.map((id) => tx.object(id)) }),
            ],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    removeWhitelist(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::remove_whitelist`,
            arguments: [
                tx.pure(args.admin_cap),
                tx.pure(args.project),
                tx.makeMoveVec({ objects: args.user_list.map((id) => tx.object(id)) }),
            ],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    startFundRaising(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::start_fund_raising`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    buy(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::buy`,
            arguments: [
                tx.makeMoveVec({ objects: args.coins.map((id) => tx.object(id)) }),
                tx.pure(args.amount),
                tx.pure(args.project),
            ],
            typeArguments: [types.COIN],
        });
        tx.splitCoins(tx.gas, [tx.pure(args.amount)]);
        return tx;
    }
    endFundRaising(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::end_fund_raising`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    endRefund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::end_refund`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    distributeRaisedFund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::distribute_raised_fund`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    refundTokenToOwner(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::refund_token_to_owner`,
            arguments: [tx.pure(args.admin_cap), tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    depositProject(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::deposit_by_owner`,
            arguments: [
                tx.makeMoveVec({ objects: args.coins.map((id) => tx.object(id)) }),
                tx.pure(args.value),
                tx.pure(args.project),
            ],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    userClaimToken(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_token`,
            arguments: [tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    claimRefund(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_refund`,
            arguments: [tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    vote(types, args, optionTx, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::vote`,
            arguments: [tx.pure(args.project)],
            typeArguments: [types.COIN],
        });
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
            typeArguments: [types.COIN],
        });
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
            typeArguments: [types.COIN],
        });
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