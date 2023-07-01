import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadClaimPortalFunc<T> {

  /**
   *
   * @param types
   * @param args campaign: &mut Campaign
   * @param optionTx
   * @param gasBudget
   * @param packageObjectId
   */
  abstract claim(
    types: { COIN: string },
    args: {
      project: string,
      version: string,
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

}
