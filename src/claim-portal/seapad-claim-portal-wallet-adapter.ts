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
  getCoinObjects
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
    types: { COIN: string },
    args: { fee: string, project: string, version: string, projectRegistry: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      "0x2::sui::SUI",
      args.fee,
      userAddress,
      this._suiProvider,
    );
    const message = this._seaPadClaimPortalInput.claim(
      types,
      {...args, coinsFee: _coins},
      optionTx,
      gasBudget,
      packageObjectId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }

  async addFunds(
    types: { COIN: string },
    args: {
      admin: string,
      owners: string[],
      values: string[],
      totalFund: string,
      project: string,
      registry: string,
      version: string
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.totalFund,
      userAddress,
      this._suiProvider,
    );
    const message = this._seaPadClaimPortalInput.addFunds(
      types,
      { ...args, coins: _coins },
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
