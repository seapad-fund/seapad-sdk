import { SeaPadNftCampaignFunc } from './seapad-nft-campaign-func';
import { SeaPadNftCampaignInput } from './seapad-nft-campaign-input';
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

export class SeapadWalletNftCampaignAdapter extends SeaPadNftCampaignFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {
  _walletContextState: WalletContextState;
  _seaPadNftCampaignInput: SeaPadNftCampaignInput;
  _suiProvider: JsonRpcProvider;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
    suiProvider: JsonRpcProvider,
  ) {
    super();
    this._seaPadNftCampaignInput = new SeaPadNftCampaignInput(packageObjectId, module);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }

  async claimNft(
    types: {},
    args: { campaign: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget | undefined,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftCampaignInput.claimNft(
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
