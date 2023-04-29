import { SeaPadNftPoolFunc } from './seapad-nft-func';
import { SeaPadNftPoolInput } from './seapad-nft-input';
import { WalletContextState } from '@suiet/wallet-kit';
import {
  JsonRpcProvider,
  TransactionBlock,
} from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';
import { GasBudget, OptionTx, calculateAmount, getCoinObjects } from '../common';

export class SeapadWalletNftPoolAdapter extends SeaPadNftPoolFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {

  _walletContextState: WalletContextState;
  _seaPadNftPoolInput: SeaPadNftPoolInput;
  _suiProvider: JsonRpcProvider;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
    suiProvider: JsonRpcProvider,
  ) {
    super();
    this._seaPadNftPoolInput = new SeaPadNftPoolInput(packageObjectId, module);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }
  async changeAdmin(args: { admin_cap: string; to: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.changeAdmin(args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async createPool(types: { COIN: string; }, args: { admin_cap: string; owner: string; soft_cap_percent: number; round: number; use_whitelist: boolean; vesting_time_ms: string; start_time: string; end_time: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.createPool(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async addCollection(types: { COIN: string; }, args: { admin_cap: string, pool: string, cap: string, allocate: string, price: string, type: number, name: string, link: string, image_url: string, description: string, project_url: string, edition: string, thumbnail_url: string, creator: string }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.addCollection(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async startPool(types: { COIN: string; }, args: { admin_cap: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.startPool(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async buyNft(types: { COIN: string; }, args: { nft_types: string[]; nft_amounts: string[]; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const amount = calculateAmount(args.nft_amounts, args.nft_types)
    const _coins: string[] = await getCoinObjects(types.COIN, amount, userAddress, this._suiProvider)

    const message = this._seaPadNftPoolInput.buyNft(types, { ...args, coins: _coins, amount }, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async stopPool(types: { COIN: string; }, args: { admin_cap: string; pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.stopPool(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async claimNft(types: { COIN: string; }, args: { pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.claimNft(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async claimRefund(types: { COIN: string; }, args: { pool: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.claimRefund(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async addWhitelist(types: { COIN: string; }, args: { admin_cap: string; pool: string; tos: string[]; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.addWhitelist(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async removeWhitelist(types: { COIN: string; }, args: { admin_cap: string; pool: string; froms: string[]; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.removeWhitelist(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async withdrawFund(types: { COIN: string; }, args: { admin_cap: string; pool: string; amt: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.withdrawFund(types, args, optionTx, gasBudget, packageObjectId);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async changeTreasuryAdmin(types: { COIN: string; }, args: { admin_treasury_cap: string; to: string; }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadNftPoolInput.changeTreasuryAdmin(types, args, optionTx, gasBudget, packageObjectId);
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
