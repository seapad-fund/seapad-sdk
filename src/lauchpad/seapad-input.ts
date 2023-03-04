import { TypeTag, SuiJsonValue } from "@mysten/sui.js";
import { SeaPadFunc } from "./seapad-func";

export type GasBudget = number | null

export interface SeaPadDataInput {
    packageObjectId: string;
    module: string;
    function: string;
    typeArguments: string[] | TypeTag[];
    arguments: SuiJsonValue[];
    gasBudget: number;
}

export function getGasBudget(gasBudget?: GasBudget): number {
    if(typeof gasBudget == undefined || gasBudget == null ||  gasBudget < 1000){
        return 5000
    }else{
        return gasBudget
    }
}

export class SeaPadInput extends SeaPadFunc {

    packageObjectId: string;
    module: string;

    constructor(packageObjectId: string, module: string) {
        super();
        this.packageObjectId = packageObjectId;
        this.module = module;
    }


    changeAdmin(types: { COIN: string; }, args: { adminCap: string; to: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "change_admin",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.to],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    addProject(types: { COIN: string; }, args: { adminCap: string; round: number; name: string; twitter: string; discord: string; telegram: string; website: string; usewhitelist: boolean; soft_cap: string; hard_cap: string; swap_ratio_sui: string; swap_ratio_token: string; max_allocate: string; vesting_type: number; first_mlst_time: string; first_mlst_percent: number; second_mlst_time: string; second_mlst_percent: number; third_first_mlst_time: string; third_first_mlst_percent: number; fourth_first_mlst_time: string; fourth_first_mlst_percent: number; coin_metadata: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "add_project",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.round, args.name, args.twitter, args.discord, args.telegram, args.website, args.usewhitelist, args.soft_cap, args.hard_cap, args.swap_ratio_sui, args.swap_ratio_token, args.max_allocate, args.vesting_type, args.first_mlst_time, args.first_mlst_percent, args.second_mlst_time, args.second_mlst_percent, args.third_first_mlst_time, args.third_first_mlst_percent, args.fourth_first_mlst_time, args.fourth_first_mlst_percent, args.coin_metadata],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    addMileStone(types: { COIN: string; }, args: { adminCap: string; project: string; time: string; percent: number; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "add_mile_stone",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.time, args.percent],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    updateProject(types: { COIN: string; }, args: { adminCap: string; project: string; round: number; usewhitelist: boolean; swap_ratio_sui: string; swap_ratio_token: string; max_allocate: string; start_time: string; soft_cap: string; hard_cap: string; end_time: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "update_project",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.round, args.usewhitelist, args.swap_ratio_sui, args.swap_ratio_token, args.max_allocate, args.start_time, args.soft_cap, args.hard_cap, args.end_time],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    addWhitelist(types: { COIN: string; }, args: { adminCap: string; project: string; user: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "add_whitelist",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project, args.user],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    startFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "start_fund_raising",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    buy(types: { COIN: string; }, args: { suis: string; amount: string; project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "buy",
            typeArguments: [types.COIN],
            arguments: [args.suis, args.amount, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    endFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "end_fund_raising",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    endFund(types: { COIN: string; }, args: { adminCap: string; project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "end_fund",
            typeArguments: [types.COIN],
            arguments: [args.adminCap, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    distributeRaisedFund(types: { P: string; COIN: string; }, args: { adminCap: string; project: string; project_owner: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "distribute_raised_fund",
            typeArguments: [types.P, types.COIN],
            arguments: [args.adminCap, args.project, args.project_owner],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    refundToken(types: { COIN: string; }, args: { cap: string; project: string; project_owner: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "refund_token",
            typeArguments: [types.COIN],
            arguments: [args.cap, args.project, args.project_owner],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    depositProject(types: { COIN: string; }, args: { coins: string; value: string; project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "deposit_project",
            typeArguments: [types.COIN],
            arguments: [args.coins, args.value, args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    receiveToken(types: { COIN: string; }, args: { project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "receive_token",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    claimRefund(types: { COIN: string; }, args: { project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "claim_refund",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    vote(types: { COIN: string; }, args: { project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "vote",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    like(types: { COIN: string; }, args: { project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "like",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }
    watch(types: { COIN: string; }, args: { project: string; },  gasBudget?: GasBudget): SeaPadDataInput {
        return {
            packageObjectId: this.packageObjectId,
            module: this.module,
            function: "watch",
            typeArguments: [types.COIN],
            arguments: [args.project],
            gasBudget: getGasBudget(gasBudget)
        }
    }

}
