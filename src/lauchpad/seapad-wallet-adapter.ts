import { SeaPadFunc } from './seapad-func';
import { SeaPadInput } from './seapad-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { JsonRpcProvider, TransactionBlock } from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';
import { GasBudget, OptionTx, getCoinObjects } from '../common';

export class SeapadWalletAdapter extends SeaPadFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {
  _walletContextState: WalletContextState;
  _seaPadInput: SeaPadInput;
  _suiProvider: JsonRpcProvider;

  constructor(
    walletContextState: WalletContextState,
    module: string,
    suiProvider: JsonRpcProvider,
  ) {
    super();
    this._seaPadInput = new SeaPadInput(module);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }

  async changeAdmin(
    packageId: string,
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.changeAdmin(
      packageId,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async changeOwner(
    packageId: string,
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.changeOwner(
      packageId,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async createProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      linear_time: number;
      coin_decimals: number;
      token_decimals: number;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.createProject(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async addMilestone(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addMilestone(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async resetMilestone(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.resetMilestone(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async setupProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      project: string;
      round: number;
      usewhitelist: boolean;
      swap_ratio_sui: string;
      swap_ratio_token: string;
      max_allocate: string;
      start_time: number;
      end_time: number;
      soft_cap: string;
      hard_cap: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.setupProject(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async saveProfile(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      project: string;
      name: string;
      twitter: string;
      discord: string;
      telegram: string;
      website: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.saveProfile(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async addWhitelist(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addWhitelist(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async removeWhitelist(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.removeWhitelist(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async startFundRaising(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.startFundRaising(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async buy(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.amount,
      userAddress,
      this._suiProvider,
    );
    const message = this._seaPadInput.buy(
      packageId,
      types,
      { ...args, coins: _coins },
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async endFundRaising(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.endFundRaising(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async endRefund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.endRefund(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async distributeRaisedFund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.distributeRaisedFund(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async refundTokenToOwner(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.refundTokenToOwner(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async depositProject(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.value,
      userAddress,
      this._suiProvider,
    );
    const message = this._seaPadInput.depositProject(
      packageId,
      types,
      { ...args, coins: _coins },
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async userClaimToken(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.userClaimToken(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async claimRefund(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.claimRefund(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async vote(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.vote(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }

  async addMaxAllocate(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      user: string;
      max_allocate: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addMaxAllocate(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async removeMaxAllocate(
    packageId: string,
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.removeMaxAllocate(
      packageId,
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }

  async splitCoin(
    amount: number,
    to: string,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.splitCoin(amount, to);
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }

  async splitCoins(
    amounts: string[],
    to: string,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.splitCoins(amounts, to);
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
