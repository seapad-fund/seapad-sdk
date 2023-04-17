import { SuiTransactionBlockResponseOptions, ExecuteTransactionRequestType } from '@mysten/sui.js';
export type OptionTx = {
    options?: SuiTransactionBlockResponseOptions;
    requestType?: ExecuteTransactionRequestType;
} | undefined;
export type GasBudget = number | null;
export declare function getGasBudget(gasBudget?: GasBudget): number;
//# sourceMappingURL=common.d.ts.map