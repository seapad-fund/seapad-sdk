import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
  TransactionBlock,
} from '@mysten/sui.js';
import { OptionTx, SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';

export class SeaPadAdapter extends SeaPadFunc<
  Promise<SuiTransactionBlockResponse>
> {
  _suiProvider: JsonRpcProvider;
  _seaPadInput: SeaPadInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadInput = new SeaPadInput(packageObjectId, module);
    this._signer = signer;
    this._suiProvider = signer.provider;
  }

  _getOptionTx(optionTx: OptionTx): OptionTx {
    if (optionTx) {
      return optionTx;
    }
    return {
      options: {
        showInput: true,
        showEffects: true,
        showEvents: true,
        showObjectChanges: false,
        showBalanceChanges: false,
      },
      requestType: 'WaitForEffectsCert',
    };
  }

  async changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.changeAdmin(args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.changeOwner(args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async createProject(
    types: { COIN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      coin_metadata: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.createProject(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async addMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addMilestone(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async resetMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.resetMilestone(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
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
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.setupProject(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
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
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.saveProfile(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addWhitelist(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async removeWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.removeWhitelist(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async startFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.startFundRaising(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async buy(
    types: { COIN: string },
    args: { coins: string[]; amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    let tx: TransactionBlock = this._seaPadInput.buy(types, args, optionTx, gasBudget);
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(args.amount)]);
    tx.transferObjects([coin], tx.object(await this._signer.getAddress()));
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: tx,
      ...this._getOptionTx(optionTx),
    });
  }
  async endFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.endFundRaising(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async endRefund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.endRefund(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async distributeRaisedFund(
    types: { COIN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.distributeRaisedFund(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async refundTokenToOwner(
    types: { COIN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.refundTokenToOwner(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async depositProject(
    types: { COIN: string },
    args: { coins: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.depositProject(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async userClaimToken(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.userClaimToken(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async claimRefund(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.claimRefund(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }
  async vote(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.vote(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async addMaxAllocate(
    types: { COIN: string },
    args: {
      admin_cap: string;
      user: string;
      max_allocate: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addMaxAllocate(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async removeMaxAllocate(
    types: { COIN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.removeMaxAllocate(types, args, optionTx, gasBudget),
      ...this._getOptionTx(optionTx),
    });
  }

  async getTokenInfo(coinType: string) {
    const coinMetaData = await this._suiProvider.getCoinMetadata({ coinType });
    const totalSupply = await this._suiProvider.getTotalSupply({ coinType });

    return {
      coin_metadata_object_id: coinMetaData.id,
      decimals: coinMetaData.decimals,
      icon_url: coinMetaData.iconUrl,
      description: coinMetaData.description,
      symbol: coinMetaData.symbol,
      total_supply: totalSupply.value,
    };
  }

  async splitCoin(amount: number, to: string): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.splitCoin(amount, to),
    });
  }

  async splitCoins(amounts: string[], to: string): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.splitCoins(amounts, to),
    });
  }
}
