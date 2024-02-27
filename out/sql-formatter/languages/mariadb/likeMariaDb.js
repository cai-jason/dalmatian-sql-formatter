"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProcess = void 0;
const token_js_1 = require("../../lexer/token.js");
// Shared functionality used by all MariaDB-like SQL dialects.
function postProcess(tokens) {
    return tokens.map((token, i) => {
        const nextToken = tokens[i + 1] || token_js_1.EOF_TOKEN;
        if (token_js_1.isToken.SET(token) && nextToken.text === '(') {
            // This is SET datatype, not SET statement
            return { ...token, type: token_js_1.TokenType.RESERVED_FUNCTION_NAME };
        }
        const prevToken = tokens[i - 1] || token_js_1.EOF_TOKEN;
        if (token_js_1.isToken.VALUES(token) && prevToken.text === '=') {
            // This is VALUES() function, not VALUES clause
            return { ...token, type: token_js_1.TokenType.RESERVED_FUNCTION_NAME };
        }
        return token;
    });
}
exports.postProcess = postProcess;
//# sourceMappingURL=likeMariaDb.js.map