import { SeaPadTierFunc } from './seapad-tier-func';
import { SeaPadTierInput } from './seapad-tier-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeapadTierWalletAdapter extends SeaPadTierFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {



  _walletContextState: WalletContextState;
  _SeaPadTierInput: SeaPadTierInput;
  _suiProvider: JsonRpcProvider;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
    suiProvider: JsonRpcProvider,
  ) {
    super();
    this._SeaPadTierInput = new SeaPadTierInput(packageObjectId, module);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }

  async changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadTierInput.changeAdmin(
      args,
      optionTx,
      gasBudget,
      packageObjectId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }


  async createPool(types: { TOKEN: string; }, args: { admin_cap: string; minLock: string; lockPeriodMs: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    throw new Error('Method not implemented.');
  }
  async setEmergency(types: { TOKEN: string; }, args: { admin_cap: string; pool: string; emergency: boolean; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    throw new Error('Method not implemented.');

  }
  async lock(types: { TOKEN: string; }, args: { amount: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.TOKEN,
      args.amount,
      userAddress,
      this._suiProvider,
    );
    const message = this._SeaPadTierInput.lock(
      types,
      {...args, deal: _coins},
      optionTx,
      gasBudget,
      packageObjectId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async unlock(types: { TOKEN: string; }, args: { amount: string; pool: string;  }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadTierInput.unlock(
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
  async unlockEmergency(types: { TOKEN: string; }, args: { pool: string;  }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadTierInput.unlockEmergency(
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
