import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadNftCampaignFunc<T> {

  /**
   *
   * @param types
   * @param args campaign: &mut Campaign
   * @param optionTx
   * @param gasBudget
   * @param packageObjectId
   */
  abstract claimNft(
    types: {  },
    args: { campaign: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

}
