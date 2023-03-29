import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
  SuiJsonValue
} from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';


export class SeaPadAdapter extends SeaPadFunc<Promise<SuiTransactionBlockResponse>> {

  _suiProvider: JsonRpcProvider;
  _seaPadInput: SeaPadInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadInput = new SeaPadInput(packageObjectId, module);
    this._signer = signer;
    this._suiProvider = signer.provider;
  }

  async changeAdmin(
    args: { admin_cap: string; to: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {

    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.changeAdmin(args) });
  }

  async changeOwner(
    args: { admin_cap: string; new_owner: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.changeOwner(args) });
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
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.createProject(types, args) });
  }
  async addMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addMilestone(types, args) });
  }
  async resetMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget | undefined,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.resetMilestone(types, args) });
  }
  async setupProject(
    types: { COIN: string },
    args: {
      admin_cap: string;
      project: string;
      round: number;
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
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.setupProject(types, args) });
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
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.saveProfile(types, args) });
  }
  async addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addWhitelist(types, args) });
  }

  async removeWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.removeWhitelist(types, args) });
  }

  async startFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.startFundRaising(types, args) });
  }
  async buy(
    types: { COIN: string },
    args: { coins: string[]; amount: string; project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.buy(types, args) });
  }
  async endFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.endFundRaising(types, args) });
  }
  async endRefund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.endRefund(types, args) });
  }
  async distributeRaisedFund(
    types: { COIN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.distributeRaisedFund(types, args) });
  }
  async refundTokenToOwner(
    types: { COIN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.refundTokenToOwner(types, args) });
  }
  async depositProject(
    types: { COIN: string },
    args: { coins: string[]; value: string; project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.depositProject(types, args) });
  }
  async userClaimToken(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.userClaimToken(types, args) });
  }
  async claimRefund(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.claimRefund(types, args) });
  }
  async vote(
    types: { COIN: string },
    args: { project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.vote(types, args) });
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
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.addMaxAllocate(types, args) });
  }

  async removeMaxAllocate(
    types: { COIN: string },
    args: { admin_cap: string; user: string; project: string },
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.removeMaxAllocate(types, args) });
  }

  async getTokenInfo(coinType: string) {
    const coinMetaData = await this._suiProvider.getCoinMetadata({coinType});
    const totalSupply = await this._suiProvider.getTotalSupply({coinType});

    return {
      coin_metadata_object_id: coinMetaData.id,
      decimal: coinMetaData.decimals,
      icon_url: coinMetaData.iconUrl,
      description: coinMetaData.description,
      symbol: coinMetaData.symbol,
      total_supply: totalSupply.value,
    };
  }

   async splitCoin(coinId: string, splits: number[]): Promise<SuiTransactionBlockResponse>{
    return await this._signer.signAndExecuteTransactionBlock({ transactionBlock: this._seaPadInput.splitCoin(coinId, splits) });
  }
}
