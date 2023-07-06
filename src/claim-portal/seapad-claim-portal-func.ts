import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadClaimPortalFunc<T> {


  abstract claim(
    types: { COIN: string },
    args: {
      fee: string,
      coinsFee?: string[],
      project: string,
      version: string,
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  abstract addFunds(
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
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

}
