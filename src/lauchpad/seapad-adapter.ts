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

  constructor(signer: RawSigner, packageObjectId: string, module: string, version?: string) {
    super();
    this._seaPadInput = new SeaPadInput(packageObjectId, module, version);
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
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.changeAdmin(
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.changeOwner(
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async createProject(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      cliff_time: string;
      tge: string;
      unlock_percent: string;
      linear_time: number;
      coin_decimals: number;
      token_decimals: number;
      require_kyc: boolean;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.createProject(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async addMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addMilestone(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async resetMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.resetMilestone(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async setupProject(
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
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.setupProject(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async saveProfile(
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
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.saveProfile(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async addWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addWhitelist(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async removeWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.removeWhitelist(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async startFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.startFundRaising(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async buy(
    types: { COIN: string; TOKEN: string },
    args: { amount: string; project: string; kyc: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
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
        types,
        { ...args, coins: _coins },
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async endFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.endFundRaising(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async endRefund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.endRefund(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async distributeRaisedFund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.distributeRaisedFund(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async refundTokenToOwner(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; projectOwner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.refundTokenToOwner(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async depositProject(
    types: { COIN: string; TOKEN: string },
    args: { value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    const _coins: string[] = await getCoinObjects(
      types.TOKEN,
      args.value,
      userAddress,
      this._suiProvider,
    );
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.depositProject(
        types,
        { ...args, coins: _coins },
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async userClaimToken(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.userClaimToken(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async claimRefund(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.claimRefund(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async vote(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.vote(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async addMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      user: string;
      max_allocate: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.addMaxAllocate(
        types,
        args,
        optionTx,
        gasBudget,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async removeMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadInput.removeMaxAllocate(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async getTokenInfo(coinType: string) {
    const coinMetaData = await this._suiProvider.getCoinMetadata({ coinType });
    const totalSupply = await this._suiProvider.getTotalSupply({ coinType });

    return {
      coin_metadata_object_id: coinMetaData?.id,
      decimals: coinMetaData?.decimals,
      icon_url: coinMetaData?.iconUrl,
      description: coinMetaData?.description,
      symbol: coinMetaData?.symbol,
      total_supply: totalSupply?.value,
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
