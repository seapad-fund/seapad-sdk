import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
} from '@mysten/sui.js';
import { SeaPadFunc } from './seapad-func';
import { SeaPadInput } from './seapad-input';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeaPadAdapter extends SeaPadFunc<
  Promise<SuiTransactionBlockResponse>
> {
  _suiProvider: JsonRpcProvider;
  _seaPadInput: SeaPadInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadInput = new SeaPadInput(module);
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
    packageId: string,
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.changeAdmin(
        packageId,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async changeOwner(
    packageId: string,
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.changeOwner(
        packageId,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async createProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      linear_time: number;
      coin_decimals: number;
      token_decimals: number;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.createProject(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async addMilestone(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addMilestone(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async resetMilestone(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.resetMilestone(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async setupProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
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
      transactionBlock: this._seaPadInput.setupProject(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async saveProfile(
    packageId: string,
    types: { COIN: string; TOKEN: string },
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
      transactionBlock: this._seaPadInput.saveProfile(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async addWhitelist(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addWhitelist(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async removeWhitelist(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.removeWhitelist(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async startFundRaising(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.startFundRaising(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async buy(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.amount,
      userAddress,
      this._suiProvider,
    );
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.buy(
        packageId,
        types,
        { ...args, coins: _coins },
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async endFundRaising(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.endFundRaising(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async endRefund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.endRefund(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async distributeRaisedFund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.distributeRaisedFund(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async refundTokenToOwner(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.refundTokenToOwner(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async depositProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.value,
      userAddress,
      this._suiProvider,
    );
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.depositProject(
        packageId,
        types,
        { ...args, coins: _coins },
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async userClaimToken(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.userClaimToken(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async claimRefund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.claimRefund(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async vote(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.vote(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async addMaxAllocate(
    packageId: string,
    types: { COIN: string; TOKEN: string },
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
      transactionBlock: this._seaPadInput.addMaxAllocate(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async removeMaxAllocate(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.removeMaxAllocate(
        packageId,
        types,
        args,
        optionTx,
        gasBudget,
      ),
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

  async splitCoin(
    amount: number,
    to: string,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.splitCoin(amount, to),
    });
  }

  async splitCoins(
    amounts: string[],
    to: string,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.splitCoins(amounts, to),
    });
  }
}
