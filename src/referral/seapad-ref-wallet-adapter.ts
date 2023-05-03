import { SeaPadReferralFunc } from './seapad-ref-func';
import { SeaPadReferralInput } from './seapad-ref-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeapadReferralWalletAdapter extends SeaPadReferralFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {

  _walletContextState: WalletContextState;
  _SeaPadReferralInput: SeaPadReferralInput;
  _suiProvider: JsonRpcProvider;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
    suiProvider: JsonRpcProvider,
  ) {
    super();
    this._SeaPadReferralInput = new SeaPadReferralInput(packageObjectId, module);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }

  async changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.changeAdmin(
      args,
      optionTx,
      gasBudget,
      packageObjectId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }

  async createProject(
    types: { COIN: string; },
    args: {
      admin_cap: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.createProject(
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
  async upsertReferal(types: { COIN: string; }, args: { admin_cap: string; referral: string; users: string[]; rewards: string[]; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.upsertReferal(
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
  async removeReferal(types: { COIN: string; }, args: { admin_cap: string; referral: string; users: string[]; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.removeReferal(
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

  async updateDistributeTime(types: { COIN: string; }, args: { admin_cap: string; distribute_time_ms: string; referral: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.updateDistributeTime(
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

  async startClaimProject(types: { COIN: string; }, args: { admin_cap: string; referral: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.startClaimProject(
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
  async claimReward(types: { COIN: string; }, args: { referral: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.claimReward(
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
  async closeProject(types: { COIN: string; }, args: { admin_cap: string; referral: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.closeProject(
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
  async withdrawProjectFund(types: { COIN: string; }, args: { admin_cap: string; referral: string; to: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._SeaPadReferralInput.withdrawProjectFund(
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
  async depositProjectFund(types: { COIN: string; }, args: { admin_cap: string; referral: string; amount: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null | undefined): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.amount,
      userAddress,
      this._suiProvider,
    );
    const message = this._SeaPadReferralInput.depositProjectFund(
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
