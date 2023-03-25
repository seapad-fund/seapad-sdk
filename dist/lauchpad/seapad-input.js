"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadInput = exports.getGasBudget = void 0;
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
    changeAdmin(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'abdicate_admin',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.to],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    createProject(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'create_project',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [
                args.admin_cap,
                args.owner,
                args.vesting_type,
                args.coin_metadata,
            ],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    addMilestone(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'add_milestone',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project, args.time, args.percent],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    resetMilestone(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'reset_milestone',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    setupProject(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'setup_project',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [
                args.admin_cap,
                args.project,
                args.round,
                args.usewhitelist,
                args.swap_ratio_sui,
                args.swap_ratio_token,
                args.max_allocate,
                args.start_time,
                args.end_time,
                args.soft_cap,
                args.hard_cap,
            ],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    saveProfile(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'save_profile',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [
                args.admin_cap,
                args.project,
                args.name,
                args.twitter,
                args.discord,
                args.telegram,
                args.website,
                args.website,
            ],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    addWhitelist(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'add_whitelist',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project, args.user_list],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    removeWhitelist(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'remove_whitelist',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project, args.user_list],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    startFundRaising(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'start_fund_raising',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    buy(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'buy',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.coins, args.amount, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    endFundRaising(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'end_fund_raising',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    endRefund(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'end_refund',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    distributeRaisedFund(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'distribute_raised_fund',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    refundTokenToOwner(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'refund_token_to_owner',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    depositProject(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'deposit_by_owner',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.coins, args.value, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    userClaimToken(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'claim_token',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    claimRefund(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'claim_refund',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    vote(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'vote',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    like(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'like',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    watch(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'watch',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    addMaxAllocate(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'add_max_allocate',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.user, args.max_allocate, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
    removeMaxAllocate(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: 'remove_max_allocate',
            typeArguments: [types.COIN,types.TOKEN],
            arguments: [args.admin_cap, args.user, args.project],
            gasBudget: getGasBudget(gasBudget),
        };
    }
}
exports.SeaPadInput = SeaPadInput;
//# sourceMappingURL=seapad-input.js.map