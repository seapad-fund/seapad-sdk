"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasBudget = void 0;
function getGasBudget(gasBudget) {
    if (typeof gasBudget == undefined ||
        gasBudget == null ||
        gasBudget < 20000000) {
        return 20000000;
    }
    else {
        return gasBudget;
    }
}
exports.getGasBudget = getGasBudget;
//# sourceMappingURL=common.js.map