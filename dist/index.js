"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cond(clauses) {
    return (...args) => {
        for (let i = 0, l = clauses.length; i < l; i++) {
            if (Array.isArray(clauses[i])) {
                if (clauses[i][0].apply(null, args)) {
                    return clauses[i][1].apply(null, args);
                }
            }
        }
    };
}
exports.cond = cond;
