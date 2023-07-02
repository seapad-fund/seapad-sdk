import {
  RawSigner,
  JsonRpcProvider,
  SuiTransactionBlockResponse,
  SuiJsonValue,
} from '@mysten/sui.js';
import { SeaPadClaimPortalFunc } from './seapad-claim-portal-func';
import {
  GasBudget,
  OptionTx,
  calculateAmountSameType,
  getCoinObjects,
} from '../common';
import { SeaPadClaimPortalInput } from './seapad-claim-portal-input';

export class SeaPadClaimPortalAdapter extends SeaPadClaimPortalFunc<
  Promise<SuiTransactionBlockResponse>
> {

  _suiProvider: JsonRpcProvider;
  _seaPadNftPoolInput: SeaPadClaimPortalInput;
  _signer: RawSigner;

  constructor(signer: RawSigner, packageObjectId: string, module: string) {
    super();
    this._seaPadNftPoolInput = new SeaPadClaimPortalInput(packageObjectId, module);
    this._signer = signer;
    this._suiProvider = signer.provider;
  }
  
  async claim(types: { COIN: string; }, args: { project: string; version: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiTransactionBlockResponse> {
    throw new Error('Method not implemented.');
  }

  async addFunds(
    types: { COIN: string },
    args: {
      admin: string,
      owners: string[],
      values: string[],
      project: string,
      registry: string,
      version: string
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiTransactionBlockResponse> {
    const userAddress = await this._signer.getAddress();
    const amount = calculateAmountSameType(args.values);
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      amount,
      userAddress,
      this._suiProvider,
    );
    return await this._signer.signAndExecuteTransactionBlock({
      transactionBlock: this._seaPadNftPoolInput.addFunds(
        types,
        { ...args, coins: _coins, totalFund: amount },
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
