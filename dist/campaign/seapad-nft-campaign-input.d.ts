import { TransactionBlock } from '@mysten/sui.js';
import { SeaPadNftCampaignFunc } from './seapad-nft-campaign-func';
import { GasBudget, OptionTx } from '../common';
export declare class SeaPadNftCampaignInput extends SeaPadNftCampaignFunc<TransactionBlock> {
    _packageObjectId: string;
    _module: string;
    constructor(packageObjectId: string, module: string);
    _getPackageObjectId: (packageObjectId?: string | null) => string;
    claimNft(types: {}, args: {
        campaign: string;
    }, optionTx?: OptionTx, gasBudget?: GasBudget | undefined, packageObjectId?: string | null): TransactionBlock;
}
//# sourceMappingURL=seapad-nft-campaign-input.d.ts.map