import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
} from '@mysten/sui.js';
import { SeaPadReferralFunc } from './seapad-ref-func';
import { SeaPadReferralInput } from './seapad-ref-input';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeaPadReferralAdapter extends SeaPadReferralFunc<
  Promise<SuiTransactionBlockResponse>
> {
  _suiProvider: JsonRpcProvider;
  _seaPadReferralInput: SeaPadReferralInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadReferralInput = new SeaPadReferralInput(packageObjectId, module);
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
      transactionBlock: this._seaPadReferralInput.changeAdmin(
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }


  async createProject(
    types: { COIN: string;  },
    args: {
      admin_cap: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.createProject(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async upsertReferal(
    types: { COIN: string;  },
    args: { admin_cap: string; referral: string; users: string[]; rewards: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.upsertReferal(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async removeReferal(
    types: { COIN: string;  },
    args: { admin_cap: string; referral: string, users: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.removeReferal(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async updateDistributeTime(
    types: { COIN: string;  },
    args: { admin_cap: string; distribute_time_ms: string; referral: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.updateDistributeTime(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }


  async startClaimProject(
    types: { COIN: string;  },
    args: { admin_cap: string; referral: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.startClaimProject(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async claimReward(
    types: { COIN: string;  },
    args: { referral: string; },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.claimReward(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async closeProject(
    types: { COIN: string;  },
    args: { admin_cap: string; referral: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.closeProject(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async depositProjectFund(
    types: { COIN: string;  },
    args: { admin_cap: string; amount: string; referral: string; },
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
      transactionBlock: this._seaPadReferralInput.depositProjectFund(
        types,
        { ...args, coins: _coins },
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async withdrawProjectFund(
    types: { COIN: string;  },
    args: { admin_cap: string; referral: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadReferralInput.withdrawProjectFund(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
}
