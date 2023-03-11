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
            function: "change_admin",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.to],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    addProject(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "add_project",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.round, args.usewhitelist, args.softCap, args.hardCap, args.swapRatioSui, args.swapRatioToken, args.maxAllocate, args.vestingType, args.firstVestingTime],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    addMileStone(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "add_mile_stone",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.time, args.percent],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    updateProject(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "update_project",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.round, args.usewhitelist, args.swapRatioSui, args.swapRatioToken, args.maxAllocate, args.startTime, args.endTime, args.softCap, args.hardCap],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    saveProfile(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "save_profile",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.name, args.twitter, args.discord, args.telegram, args.website, args.website],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    addWhitelist(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "add_whitelist",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.user],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    startFundRaising(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "start_fund_raising",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    buy(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "buy",
            typeArguments: [types.COIN],
            arguments: [args.suis, args.amount, args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    endFundRaising(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "end_fund_raising",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    endFund(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "end_fund",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    distributeRaisedFund(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "distribute_raised_fund",
            typeArguments: [types.P, types.COIN],
            arguments: [args.adminCap, args.project, args.projectOwner],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    refundToken(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "refund_token",
            typeArguments: [types.COIN],
            arguments: [args.cap, args.project, args.projectOwner],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    depositProject(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "deposit_project",
            typeArguments: [types.COIN],
            arguments: [args.coins, args.value, args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    receiveToken(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "receive_token",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    claimRefund(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "claim_refund",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    vote(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "vote",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    like(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "like",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
    watch(types, args, gasBudget) {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "watch",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        };
    }
}
exports.SeaPadInput = SeaPadInput;
//# sourceMappingURL=seapad-input.js.map