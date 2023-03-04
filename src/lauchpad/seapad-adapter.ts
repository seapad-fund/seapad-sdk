import { JsonRpcProvider, RawSigner, SuiExecuteTransactionResponse } from "@mysten/sui.js";
import { SeaPadFunc } from "./seapad-func";
import { GasBudget, SeaPadInput } from "./seapad-input";



export class SeaPadAdapter extends SeaPadFunc {

    seaPadInput: SeaPadInput;
    signer: RawSigner;
    provider: JsonRpcProvider;

    constructor(signer: RawSigner, provider: JsonRpcProvider, packageObjectId: string, module: string) {
        super();
        this.seaPadInput = new SeaPadInput(packageObjectId, module)
        this.signer = signer;
        this.provider = provider;
    }

    async changeAdmin(types: { COIN: string; }, args: { adminCap: string; to: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.changeAdmin(types, args, gasBudget));
    }
    async addProject(types: { COIN: string; }, args: { adminCap: string; round: number; name: string; twitter: string; discord: string; telegram: string; website: string; usewhitelist: boolean; soft_cap: string; hard_cap: string; swap_ratio_sui: string; swap_ratio_token: string; max_allocate: string; vesting_type: number; first_mlst_time: string; first_mlst_percent: number; second_mlst_time: string; second_mlst_percent: number; third_first_mlst_time: string; third_first_mlst_percent: number; fourth_first_mlst_time: string; fourth_first_mlst_percent: number; coin_metadata: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.addProject(types, args, gasBudget));
    }
    async addMileStone(types: { COIN: string; }, args: { adminCap: string; project: string; time: string; percent: number; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.addMileStone(types, args, gasBudget));
    }
    async updateProject(types: { COIN: string; }, args: { adminCap: string; project: string; round: number; usewhitelist: boolean; swap_ratio_sui: string; swap_ratio_token: string; max_allocate: string; start_time: string; soft_cap: string; hard_cap: string; end_time: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.updateProject(types, args, gasBudget));
    }
    async addWhitelist(types: { COIN: string; }, args: { adminCap: string; project: string; user: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.addWhitelist(types, args, gasBudget));
    }
    async startFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.startFundRaising(types, args, gasBudget));
    }
    async buy(types: { COIN: string; }, args: { suis: string; amount: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.buy(types, args, gasBudget));
    }
    async endFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.endFundRaising(types, args, gasBudget));
    }
    async endFund(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.endFund(types, args, gasBudget));
    }
    async distributeRaisedFund(types: { P: string; COIN: string; }, args: { adminCap: string; project: string; project_owner: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.distributeRaisedFund(types, args, gasBudget));
    }
    async refundToken(types: { COIN: string; }, args: { cap: string; project: string; project_owner: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.refundToken(types, args, gasBudget));
    }
    async depositProject(types: { COIN: string; }, args: { coins: string; value: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.depositProject(types, args, gasBudget));
    }
    async receiveToken(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.receiveToken(types, args, gasBudget));
    }
    async claimRefund(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.claimRefund(types, args, gasBudget));
    }
    async vote(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.vote(types, args, gasBudget));
    }
    async like(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.like(types, args, gasBudget));
    }
    async watch(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this.signer.executeMoveCall(this.seaPadInput.watch(types, args, gasBudget));
    }





}