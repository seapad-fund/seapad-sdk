import {
    SuiTransactionBlockResponseOptions,
    ExecuteTransactionRequestType,
} from '@mysten/sui.js';

export type OptionTx =
    | {
        options?: SuiTransactionBlockResponseOptions;
        requestType?: ExecuteTransactionRequestType;
    }
    | undefined;


export type GasBudget = number | null;

export function getGasBudget(gasBudget?: GasBudget): number {
    if (
        typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 20000000
    ) {
        return 20000000;
    } else {
        return gasBudget;
    }
}