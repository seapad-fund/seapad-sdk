import { OptionTx, SeaPadFunc } from './seapad-func';
import { GasBudget, SeaPadInput } from './seapad-input';
import { WalletContextState } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput,
} from '@mysten/wallet-standard';

export class SeapadWalletAdapter extends SeaPadFunc<
  Promise<SuiSignAndExecuteTransactionBlockOutput>
> {
  _walletContextState: WalletContextState;
  _seaPadInput: SeaPadInput;

  constructor(
    walletContextState: WalletContextState,
    packageObjectId: string,
    module: string,
  ) {
    super();
    this._seaPadInput = new SeaPadInput(packageObjectId, module);
    this._walletContextState = walletContextState;
  }

  async changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.changeAdmin(args, optionTx, gasBudget);
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async changeOwner(
    args: { admin_cap: string; new_owner: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.changeOwner(args, optionTx, gasBudget);
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async createProject(
    types: { COIN: string },
    args: {
      admin_cap: string;
      owner: string;
      vesting_type: number;
      coin_metadata: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.createProject(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async addMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string; time: number; percent: number },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addMilestone(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async resetMilestone(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.resetMilestone(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async setupProject(
    types: { COIN: string },
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
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async saveProfile(
    types: { COIN: string },
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
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async addWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.addWhitelist(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async removeWhitelist(
    types: { COIN: string },
    args: { admin_cap: string; project: string; user_list: string[] },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.removeWhitelist(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async startFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.startFundRaising(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async buy(
    types: { COIN: string },
    args: { coins: string[]; amount: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.buy(types, args, optionTx, gasBudget);
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async endFundRaising(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.endFundRaising(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async endRefund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.endRefund(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async distributeRaisedFund(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.distributeRaisedFund(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async refundTokenToOwner(
    types: { COIN: string },
    args: { admin_cap: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.refundTokenToOwner(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async depositProject(
    types: { COIN: string },
    args: { coins: string[]; value: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.depositProject(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async userClaimToken(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.userClaimToken(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async claimRefund(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.claimRefund(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async vote(
    types: { COIN: string },
    args: { project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.vote(types, args, optionTx, gasBudget);
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }

  async addMaxAllocate(
    types: { COIN: string },
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
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }
  async removeMaxAllocate(
    types: { COIN: string },
    args: { admin_cap: string; user: string; project: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.removeMaxAllocate(
      types,
      args,
      optionTx,
      gasBudget,
    );
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }

  async splitCoin(
    amount: number,
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.splitCoin(amount);
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
  }

  async splitCoins(
    amounts: string[],
  ): Promise<SuiSignAndExecuteTransactionBlockOutput> {
    const message = this._seaPadInput.splitCoins(amounts);
    return await this._walletContextState.signAndExecuteTransactionBlock({
      transactionBlock: message,
    });
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
