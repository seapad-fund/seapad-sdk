import { SeaPadClaimPortalFunc } from './seapad-claim-portal-func';
import { SeaPadClaimPortalInput } from './seapad-claim-portal-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';
import {
  GasBudget,
  OptionTx,
} from '../common';

export class SeapadWalletClaimPortalAdapter extends SeaPadClaimPortalFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {
  _walletContextState: WalletContextState;
  _seaPadClaimPortalInput: SeaPadClaimPortalInput;
  _suiProvider: JsonRpcProvider;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
    suiProvider: JsonRpcProvider,
  ) {
    super();
    this._seaPadClaimPortalInput = new SeaPadClaimPortalInput(packageObjectId, module);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }

  async claim(
    types: {COIN: string},
    args: { project: string, version: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadClaimPortalInput.claim(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }


  buildTx(
    message: TransactionBlock,
  ): Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'> {
    return {
      transactionBlock: message,
      options: {
        showInput: false,
        showEffects: true,
        showEvents: true,
        showObjectChanges: false,
        showBalanceChanges: false,
      },
      requestType: 'WaitForEffectsCert',
    };
  }
}
