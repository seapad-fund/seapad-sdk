import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
  SuiJsonValue,
} from '@mysten/sui.js';
import { SeaPadTierFunc } from './seapad-tier-func';
import { SeaPadTierInput } from './seapad-tier-input';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeaPadTierAdapter extends SeaPadTierFunc<
  Promise<SuiTransactionBlockResponse>
> {

  _suiProvider: JsonRpcProvider;
  _seaPadTierInput: SeaPadTierInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadTierInput = new SeaPadTierInput(packageObjectId, module);
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
      transactionBlock: this._seaPadTierInput.changeAdmin(
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }

  async createPool(types: { TOKEN: string; }, args: { admin_cap: string; minLock: string; lockPeriodMs: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadTierInput.createPool(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async setEmergency(types: { TOKEN: string; }, args: { admin_cap: string; pool: string; emergency: boolean; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadTierInput.setEmergency(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async lock(types: { TOKEN: string; }, args: { amount: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    const _coins: string[] = await getCoinObjects(
      types.TOKEN,
      args.amount,
      userAddress,
      this._suiProvider,
    );
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadTierInput.lock(
        types,
        { ...args, deal: _coins },
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async unlock(types: { TOKEN: string; }, args: { amount: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadTierInput.unlock(
        types,
        args,
        optionTx,
        gasBudget,
        packageObjectId,
      ),
      ...this._getOptionTx(optionTx),
    });
  }
  async unlockEmergency(types: { TOKEN: string; }, args: { pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse> {
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadTierInput.unlockEmergency(
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
