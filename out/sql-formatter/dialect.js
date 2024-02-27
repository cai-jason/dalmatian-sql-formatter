"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDialect = void 0;
const Tokenizer_js_1 = __importDefault(require("./lexer/Tokenizer.js"));
const cache = new Map();
/**
 * Factory function for building Dialect objects.
 * When called repeatedly with same options object returns the cached Dialect,
 * to avoid the cost of creating it again.
 */
const createDialect = (options) => {
    let dialect = cache.get(options);
    if (!dialect) {
        dialect = dialectFromOptions(options);
        cache.set(options, dialect);
    }
    return dialect;
};
exports.createDialect = createDialect;
const dialectFromOptions = (dialectOptions) => ({
    tokenizer: new Tokenizer_js_1.default(dialectOptions.tokenizerOptions, dialectOptions.name),
    formatOptions: processDialectFormatOptions(dialectOptions.formatOptions),
});
const processDialectFormatOptions = (options) => ({
    alwaysDenseOperators: options.alwaysDenseOperators || [],
    onelineClauses: Object.fromEntries(options.onelineClauses.map(name => [name, true])),
});
//# sourceMappingURL=dialect.js.map