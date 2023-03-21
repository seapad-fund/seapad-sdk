import { RawSigner, SuiExecuteTransactionResponse,JsonRpcProvider, CoinMetadata, Provider } from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';

export class SeaPadAdapter extends SeaPadFunc {
    _suiProvider: Provider;
    _seaPadInput: SeaPadInput;
    _signer: RawSigner;

    constructor(signer: RawSigner, packageObjectId: string, module: string) {
        super();
        this._seaPadInput = new SeaPadInput(packageObjectId, module);
        this._signer = signer;
        this._suiProvider = signer.provider;
    }

    async changeAdmin(
        types: { COIN: string },
        args: { admin_cap: string; to: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.changeAdmin(types, args, gasBudget),
        );
    }
    async createProject(
        types: { COIN: string },
        args: {
            admin_cap: string;
            owner: string;
            vesting_type: number;
            coin_metadata: string;
        },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.createProject(types, args, gasBudget),
        );
    }
    async addMilestone(
        types: { COIN: string },
        args: { admin_cap: string; project: string; time: string; percent: number },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.addMilestone(types, args, gasBudget),
        );
    }
    async resetMilestone(types: { COIN: string; }, args: { admin_cap: string; project: string; }, gasBudget?: GasBudget | undefined): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.resetMilestone(types, args, gasBudget),
        );
    }
    async setupProject(
        types: { COIN: string },
        args: {
            admin_cap: string;
            project: string;
            usewhitelist: boolean;
            swap_ratio_sui: string;
            swap_ratio_token: string;
            max_allocate: string;
            start_time: number;
            end_time: number;
            soft_cap: string;
            hard_cap: string;
        },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.setupProject(types, args, gasBudget),
        );
    }
    async saveProfile(
        types: { COIN: string },
        args: {
            admin_cap: string;
            project: string;
            name: string;
            twitter: string;
            discord: string;
            telegram: string;
            website: string;
        },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.saveProfile(types, args, gasBudget),
        );
    }
    async addWhitelist(
        types: { COIN: string },
        args: { admin_cap: string; project: string; user_list: string[] },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.addWhitelist(types, args, gasBudget),
        );
    }

    async removeWhitelist(
        types: { COIN: string },
        args: { admin_cap: string; project: string; user_list: string[] },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.removeWhitelist(types, args, gasBudget),
        );
    }

    async startFundRaising(
        types: { COIN: string },
        args: { admin_cap: string; project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.startFundRaising(types, args, gasBudget),
        );
    }
    async buy(
        types: { COIN: string },
        args: { suis: string[]; amount: string; project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.buy(types, args, gasBudget),
        );
    }
    async endFundRaising(
        types: { COIN: string },
        args: { admin_cap: string; project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.endFundRaising(types, args, gasBudget),
        );
    }
    async endRefund(
        types: { COIN: string },
        args: { admin_cap: string; project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.endRefund(types, args, gasBudget),
        );
    }
    async distributeRaisedFund(
        types: { COIN: string },
        args: { admin_cap: string; project: string; projectOwner: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.distributeRaisedFund(types, args, gasBudget),
        );
    }
    async refundTokenToOwner(
        types: { COIN: string },
        args: { cap: string; project: string; projectOwner: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.refundTokenToOwner(types, args, gasBudget),
        );
    }
    async depositProject(
        types: { COIN: string },
        args: { coins: string[]; value: string; project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.depositProject(types, args, gasBudget),
        );
    }
    async userClaimToken(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.userClaimToken(types, args, gasBudget),
        );
    }
    async claimRefund(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.claimRefund(types, args, gasBudget),
        );
    }
    async vote(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.vote(types, args, gasBudget),
        );
    }
    async like(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.like(types, args, gasBudget),
        );
    }
    async watch(
        types: { COIN: string },
        args: { project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.watch(types, args, gasBudget),
        );
    }

    async addMaxAllocate(
        types: { COIN: string },
        args: {
            admin_cap: string;
            user: string;
            max_allocate: string;
            project: string;
        },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.addMaxAllocate(types, args, gasBudget),
        );
    }

    async removeMaxAllocate(
        types: { COIN: string },
        args: { admin_cap: string; user: string; project: string },
        gasBudget?: GasBudget,
    ): Promise<SuiExecuteTransactionResponse> {
        return await this._signer.executeMoveCall(
            this._seaPadInput.removeMaxAllocate(types, args, gasBudget),
        );
    }

    async getTokenInfo(coinType: string) {
        const coinMetaData = await this._suiProvider.getCoinMetadata(coinType);
        const totalSupply = await this._suiProvider.getTotalSupply(coinType);

        return {
            coin_metadata_object_id: coinMetaData.id,
            decimal: coinMetaData.decimals,
            icon_url: coinMetaData.iconUrl,
            description: coinMetaData.description,
            symbol: coinMetaData.symbol,
            total_supply: totalSupply.value
        }
    }

}