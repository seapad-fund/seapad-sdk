import { RawSigner, SuiExecuteTransactionResponse } from "@mysten/sui.js";
import { SeaPadFunc } from "./seapad-func";
import { GasBudget, SeaPadInput } from "./seapad-input";



export class SeaPadAdapter extends SeaPadFunc {


    _seaPadInput: SeaPadInput;
    _signer: RawSigner;

    constructor(signer: RawSigner, packageObjectId: string, module: string) {
        super();
        this._seaPadInput = new SeaPadInput(packageObjectId, module)
        this._signer = signer;
    }

    async changeAdmin(types: { COIN: string; }, args: { adminCap: string; to: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.changeAdmin(types, args, gasBudget));
    }
    async addProject(types: { COIN: string; }, args: { adminCap: string; round: number; usewhitelist: boolean; softCap: string; hardCap: string; swapRatioSui: string; swapRatioToken: string; maxAllocate: string; vestingType: number; firstVestingTime: string }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.addProject(types, args, gasBudget));
    }
    async addMileStone(types: { COIN: string; }, args: { adminCap: string; project: string; time: string; percent: number; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.addMileStone(types, args, gasBudget));
    }
    async updateProject(types: { COIN: string; }, args: { adminCap: string; project: string; round: number; usewhitelist: boolean; swapRatioSui: string; swapRatioToken: string; maxAllocate: string; startTime: string; endTime: string; softCap: string; hardCap: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.updateProject(types, args, gasBudget));
    }
    async saveProfile(types: { COIN: string; }, args: { adminCap: string; project: string; name: string; twitter: string; discord: string; telegram: string; website: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.saveProfile(types, args, gasBudget));
    }
    async addWhitelist(types: { COIN: string; }, args: { adminCap: string; project: string; user: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.addWhitelist(types, args, gasBudget));
    }
    async startFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.startFundRaising(types, args, gasBudget));
    }
    async buy(types: { COIN: string; }, args: { suis: string; amount: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.buy(types, args, gasBudget));
    }
    async endFundRaising(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.endFundRaising(types, args, gasBudget));
    }
    async endFund(types: { COIN: string; }, args: { adminCap: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.endFund(types, args, gasBudget));
    }
    async distributeRaisedFund(types: { P: string; COIN: string; }, args: { adminCap: string; project: string; projectOwner: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.distributeRaisedFund(types, args, gasBudget));
    }
    async refundToken(types: { COIN: string; }, args: { cap: string; project: string; projectOwner: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.refundToken(types, args, gasBudget));
    }
    async depositProject(types: { COIN: string; }, args: { coins: string; value: string; project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.depositProject(types, args, gasBudget));
    }
    async receiveToken(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.receiveToken(types, args, gasBudget));
    }
    async claimRefund(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.claimRefund(types, args, gasBudget));
    }
    async vote(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.vote(types, args, gasBudget));
    }
    async like(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.like(types, args, gasBudget));
    }
    async watch(types: { COIN: string; }, args: { project: string; }, gasBudget?: GasBudget): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(this._seaPadInput.watch(types, args, gasBudget));
    }





}