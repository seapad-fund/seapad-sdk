import { GasBudget, OptionTx } from '../common';
export declare abstract class SeaPadNftCampaignFunc<T> {
    /**
     *
     * @param types
     * @param args campaign: &mut Campaign
     * @param optionTx
     * @param gasBudget
     * @param packageObjectId
     */
    abstract claimNft(types: {}, args: {
        campaign: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
}
//# sourceMappingURL=seapad-nft-campaign-func.d.ts.map