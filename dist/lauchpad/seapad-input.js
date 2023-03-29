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
    changeAdmin(args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::change_admin`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.to
                }],
            typeArguments: [],
        });
        return tx;
    }
    changeOwner(args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::change_owner`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.new_owner
                }],
            typeArguments: [],
        });
        return tx;
    }
    createProject(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::create_project`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.owner
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.vesting_type
                }, {
                    kind: "Input",
                    index: 3,
                    value: args.coin_metadata
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    addMilestone(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_milestone`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.time
                }, {
                    kind: "Input",
                    index: 3,
                    value: args.percent
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    resetMilestone(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::reset_milestone`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    setupProject(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::reset_milestone`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.round
                }, {
                    kind: "Input",
                    index: 3,
                    value: args.usewhitelist
                }, {
                    kind: "Input",
                    index: 4,
                    value: args.swap_ratio_sui
                }, {
                    kind: "Input",
                    index: 5,
                    value: args.swap_ratio_token
                }, {
                    kind: "Input",
                    index: 6,
                    value: args.max_allocate
                }, {
                    kind: "Input",
                    index: 7,
                    value: args.start_time
                }, {
                    kind: "Input",
                    index: 8,
                    value: args.end_time
                }, {
                    kind: "Input",
                    index: 9,
                    value: args.soft_cap
                }, {
                    kind: "Input",
                    index: 10,
                    value: args.hard_cap
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    saveProfile(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::save_profile`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.name
                }, {
                    kind: "Input",
                    index: 3,
                    value: args.twitter
                }, {
                    kind: "Input",
                    index: 4,
                    value: args.discord
                }, {
                    kind: "Input",
                    index: 5,
                    value: args.telegram
                }, {
                    kind: "Input",
                    index: 6,
                    value: args.website
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    addWhitelist(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::add_whitelist`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.user_list
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    removeWhitelist(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::removeWhitelist`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.user_list
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    startFundRaising(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::removeWhitelist`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    buy(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::buy`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.coins
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.amount
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    endFundRaising(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::end_fund_raising`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    endRefund(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::end_refund`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    distributeRaisedFund(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::distribute_raised_fund`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    refundTokenToOwner(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::refund_token_to_owner`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    depositProject(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::deposit_by_owner`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.coins
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.value
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    userClaimToken(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_token`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    claimRefund(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::claim_refund`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    vote(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::vote`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    addMaxAllocate(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.user
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.max_allocate
                }, {
                    kind: "Input",
                    index: 3,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    removeMaxAllocate(types, args, gasBudget) {
        const tx = new sui_js_1.TransactionBlock();
        tx.moveCall({
            target: `${this._packageObjectId}::${this._module}::set_max_allocate`,
            arguments: [{
                    kind: "Input",
                    index: 0,
                    value: args.admin_cap
                }, {
                    kind: "Input",
                    index: 1,
                    value: args.user
                }, {
                    kind: "Input",
                    index: 2,
                    value: args.project
                }],
            typeArguments: [types.COIN],
        });
        return tx;
    }
    splitCoin(coinId, splits) {
        const tx = new sui_js_1.TransactionBlock();
        let amounts = [];
        splits.forEach((obj, i) => {
            amounts.push({
                kind: "Input",
                index: i,
                value: obj
            });
        });
        tx.splitCoins({
            kind: "Input",
            index: 0,
            value: coinId
        }, amounts);
        return tx;
    }
}
exports.SeaPadInput = SeaPadInput;
//# sourceMappingURL=seapad-input.js.map