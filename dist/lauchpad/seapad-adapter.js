"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPadAdapter = void 0;
const seapad_func_1 = require("./seapad-func");
const seapad_input_1 = require("./seapad-input");
class SeaPadAdapter extends seapad_func_1.SeaPadFunc {
    constructor(signer, provider, packageObjectId, module) {
        super();
        this._seaPadInput = new seapad_input_1.SeaPadInput(packageObjectId, module);
        this._signer = signer;
        this._provider = provider;
    }
    async changeAdmin(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.changeAdmin(types, args, gasBudget));
    }
    async addProject(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.addProject(types, args, gasBudget));
    }
    async addMileStone(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.addMileStone(types, args, gasBudget));
    }
    async updateProject(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.updateProject(types, args, gasBudget));
    }
    async saveProfile(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.saveProfile(types, args, gasBudget));
    }
    async addWhitelist(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.addWhitelist(types, args, gasBudget));
    }
    async startFundRaising(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.startFundRaising(types, args, gasBudget));
    }
    async buy(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.buy(types, args, gasBudget));
    }
    async endFundRaising(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.endFundRaising(types, args, gasBudget));
    }
    async endFund(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.endFund(types, args, gasBudget));
    }
    async distributeRaisedFund(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.distributeRaisedFund(types, args, gasBudget));
    }
    async refundToken(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.refundToken(types, args, gasBudget));
    }
    async depositProject(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.depositProject(types, args, gasBudget));
    }
    async receiveToken(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.receiveToken(types, args, gasBudget));
    }
    async claimRefund(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.claimRefund(types, args, gasBudget));
    }
    async vote(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.vote(types, args, gasBudget));
    }
    async like(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.like(types, args, gasBudget));
    }
    async watch(types, args, gasBudget) {
        return await this._signer.executeMoveCall(this._seaPadInput.watch(types, args, gasBudget));
    }
}
exports.SeaPadAdapter = SeaPadAdapter;
//# sourceMappingURL=seapad-adapter.js.map