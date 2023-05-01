import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
  TransactionBlock,
  SuiJsonValue,
} from '@mysten/sui.js';
import { SeaPadNftPoolFunc } from './seapad-nft-func';
import {
  GasBudget,
  OptionTx,
  calculateAmount,
  getCoinObjects,
} from '../common';
import { SeaPadNftPoolInput } from './seapad-nft-input';

export class SeaPadNftPoolAdapter extends SeaPadNftPoolFunc<
  Promise<SuiTransactionBlockResponse>
> {
  _suiProvider: JsonRpcProvider;
  _seaPadNftPoolInput: SeaPadNftPoolInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadNftPoolInput = new SeaPadNftPoolInput(packageObjectId, module);
    this._signer = signer;
    this._suiProvider = signer.provider;
  }
  async changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.changeAdmin(
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async createPool(
    types: { COIN: string },
    args: {
      admin_cap: string;
      owner: string;
      soft_cap_percent: number;
      round: number;
      use_whitelist: boolean;
      vesting_time_ms: string;
      start_time: string;
      end_time: string;
      require_kyc: boolean;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.createPool(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async addCollection(
    types: { COIN: string },
    args: {
      admin_cap: string;
      pool: string;
      cap: string;
      allocate: string;
      price: string;
      type: number;
      name: string;
      link: string;
      image_url: string;
      description: string;
      project_url: string;
      edition: string;
      thumbnail_url: string;
      creator: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.addCollection(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async startPool(
    types: { COIN: string },
    args: { admin_cap: string; pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.startPool(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async buyNft(
    types: { COIN: string },
    args: {
      nft_types: string[];
      nft_amounts: string[];
      pool: string;
      kyc: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    const amount = calculateAmount(args.nft_amounts, args.nft_types);
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      amount,
      userAddress,
      this._suiProvider,
    );
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.buyNft(
        types,
        { ...args, coins: _coins, amount },
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async stopPool(
    types: { COIN: string },
    args: { admin_cap: string; pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.stopPool(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async claimNft(
    types: { COIN: string },
    args: { pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.claimNft(
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
    types: { COIN: string },
    args: { pool: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.claimRefund(
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
    types: { COIN: string },
    args: { admin_cap: string; pool: string; tos: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.addWhitelist(
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
    types: { COIN: string },
    args: { admin_cap: string; pool: string; froms: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.removeWhitelist(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async withdrawFund(
    types: { COIN: string },
    args: { admin_cap: string; pool: string; amt: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.withdrawFund(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async changeTreasuryAdmin(
    types: { COIN: string },
    args: { admin_treasury_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.changeTreasuryAdmin(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
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
}
