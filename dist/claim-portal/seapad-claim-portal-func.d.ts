import { GasBudget, OptionTx } from '../common';
export declare abstract class SeaPadClaimPortalFunc<T> {
    /**
     *
     * @param types
     * @param args campaign: &mut Campaign
     * @param optionTx
     * @param gasBudget
     * @param packageObjectId
     */
    abstract claim(types: {
        COIN: string;
    }, args: {
        project: string;
        version: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget, packageObjectId?: string | null): T;
}
//# sourceMappingURL=seapad-claim-portal-func.d.ts.map