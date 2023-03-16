import { MoveCallTransaction } from "@mysten/sui.js";
import { SeaPadFunc } from "./seapad-func";

export type GasBudget = number | null

export function getGasBudget(gasBudget?: GasBudget): number {
    if (typeof gasBudget == undefined || gasBudget == null || gasBudget < 1000) {
        return 5000
    } else {
        return gasBudget
    }
}

export class SeaPadInput extends SeaPadFunc {

    _packageObjectId: string;
    _module: string;

    constructor(packageObjectId: string, module: string) {
        super();
        this._packageObjectId = packageObjectId;
        this._module = module;
    }


    changeAdmin(types: { COIN: string; }, args: { adminCap: string; to: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "change_admin",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.to],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    addProject(types: { COIN: string; }, args: { adminCap: string; round: number; usewhitelist: boolean; softCap: string; hardCap: string; swapRatioSui: string; swapRatioToken: string; maxAllocate: string; vestingType: number; firstVestingTime: string }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "add_project",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.round, args.usewhitelist, args.softCap, args.hardCap, args.swapRatioSui, args.swapRatioToken, args.maxAllocate, args.vestingType, args.firstVestingTime],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    addMileStone(types: { COIN: string; }, args: { adminCap: string; project: string; time: string; percent: number; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "add_mile_stone",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.time, args.percent],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    updateProject(types: { COIN: string; }, args: { adminCap: string; project: string; round: number; usewhitelist: boolean; swapRatioSui: string; swapRatioToken: string; maxAllocate: string; startTime: string; endTime: string; softCap: string; hardCap: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "update_project",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.round, args.usewhitelist, args.swapRatioSui, args.swapRatioToken, args.maxAllocate, args.startTime, args.endTime, args.softCap, args.hardCap],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    saveProfile(types: { COIN: string; }, args: { adminCap: string; project: string; name: string; twitter: string; discord: string; telegram: string; website: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "save_profile",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.name, args.twitter, args.discord, args.telegram, args.website, args.website],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    addWhitelist(types: { COIN: string; }, args: { adminCap: string; project: string; user: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "add_whitelist",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.user],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    startFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "start_fund_raising",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    buy(types: { COIN: string; }, args: { suis: string; amount: string; project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "buy",
            typeArguments: [types.COIN],
            arguments: [args.suis, args.amount, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    endFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "end_fund_raising",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    endFund(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "end_fund",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    distributeRaisedFund(types: { P: string; COIN: string; }, args: { adminCap: string; project: string; projectOwner: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "distribute_raised_fund",
            typeArguments: [types.P, types.COIN],
            arguments: [args.adminCap, args.project, args.projectOwner],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    refundToken(types: { COIN: string; }, args: { cap: string; project: string; projectOwner: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "refund_token",
            typeArguments: [types.COIN],
            arguments: [args.cap, args.project, args.projectOwner],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    depositProject(types: { COIN: string; }, args: { coins: string; value: string; project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "deposit_project",
            typeArguments: [types.COIN],
            arguments: [args.coins, args.value, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    receiveToken(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "receive_token",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    claimRefund(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "claim_refund",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    vote(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "vote",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    like(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "like",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    watch(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): MoveCallTransaction {
        return {
            packageObjectId: this._packageObjectId,
            module: this._module,
            function: "watch",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }

}
