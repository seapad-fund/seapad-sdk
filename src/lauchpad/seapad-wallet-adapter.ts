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
    packageObjectId: string,
    module: string,
    suiProvider: JsonRpcProvider,
    version?: string,
  ) {
    super();
    this._seaPadInput = new SeaPadInput(packageObjectId, module, version);
    this._walletContextState = walletContextState;
    this._suiProvider = suiProvider;
  }

  async changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.changeAdmin(
      args,
      optionTx,
      gasBudget,
      packageObjectId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.changeOwner(
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
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      linear_time: number;
      cliff_time: string;
      tge: string;
      unlock_percent: string;
      coin_decimals: number;
      token_decimals: number;
      require_kyc: boolean;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.createProject(
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
  async addMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addMilestone(
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
  async resetMilestone(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.resetMilestone(
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
  async setupProject(
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
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.setupProject(
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
  async saveProfile(
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
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.saveProfile(
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
  async addWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addWhitelist(
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
  async removeWhitelist(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.removeWhitelist(
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
  async startFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.startFundRaising(
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
  async buy(
    types: { COIN: string; TOKEN: string },
    args: { amount: string; project: string; kyc: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.COIN,
      args.amount,
      userAddress,
      this._suiProvider,
    );
    const message = this._seaPadInput.buy(
      types,
      { ...args, coins: _coins },
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async endFundRaising(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.endFundRaising(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async endRefund(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.endRefund(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async distributeRaisedFund(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.distributeRaisedFund(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async refundTokenToOwner(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.refundTokenToOwner(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async depositProject(
    types: { COIN: string; TOKEN: string },
    args: { value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const userAddress = this._walletContextState.account?.address || '';
    const _coins: string[] = await getCoinObjects(
      types.TOKEN,
      args.value,
      userAddress,
      this._suiProvider,
    );
    const message = this._seaPadInput.depositProject(
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
  async userClaimToken(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.userClaimToken(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async claimRefund(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
    versionId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.claimRefund(
      types,
      args,
      optionTx,
      gasBudget,
      packageObjectId,
      versionId,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock(
      this.buildTx(message),
    );
  }
  async vote(
    types: { COIN: string; TOKEN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.vote(
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

  async addMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: {
      admin_cap: string;
      users: string;
      max_allocates: string;
      project: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addMaxAllocate(
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
  async removeMaxAllocate(
    types: { COIN: string; TOKEN: string },
    args: { admin_cap: string; users: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.removeMaxAllocate(
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
