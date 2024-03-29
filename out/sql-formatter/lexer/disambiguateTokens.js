"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.disambiguateTokens = void 0;
const token_js_1 = require("./token.js");
/**
 * Ensures that no keyword token (RESERVED_*) is preceded by dot (.).
 *
 * Ensures that all RESERVED_FUNCTION_NAME tokens are followed by "(".
 * If they're not, converts the token to RESERVED_KEYWORD.
 *
 * Converts RESERVED_DATA_TYPE tokens followed by "(" to RESERVED_PARAMETERIZED_DATA_TYPE.
 *
 * When IDENTIFIER or RESERVED_DATA_TYPE token is followed by "["
 * converts it to ARRAY_IDENTIFIER or ARRAY_KEYWORD accordingly.
 *
 * This is needed to avoid ambiguity in parser which expects function names
 * to always be followed by open-paren, and to distinguish between
 * array accessor `foo[1]` and array literal `[1, 2, 3]`.
 */
function disambiguateTokens(tokens) {
    return tokens
        .map(dotKeywordToIdent)
        .map(funcNameToKeyword)
        .map(dataTypeToParameterizedDataType)
        .map(identToArrayIdent)
        .map(dataTypeToArrayKeyword);
}
exports.disambiguateTokens = disambiguateTokens;
const dotKeywordToIdent = (token, i, tokens) => {
    if ((0, token_js_1.isReserved)(token.type)) {
        const prevToken = prevNonCommentToken(tokens, i);
        if (prevToken && prevToken.text === '.') {
            return { ...token, type: token_js_1.TokenType.IDENTIFIER, text: token.raw };
        }
    }
    return token;
};
const funcNameToKeyword = (token, i, tokens) => {
    if (token.type === token_js_1.TokenType.RESERVED_FUNCTION_NAME) {
        const nextToken = nextNonCommentToken(tokens, i);
        if (!nextToken || !isOpenParen(nextToken)) {
            return { ...token, type: token_js_1.TokenType.RESERVED_KEYWORD };
        }
    }
    return token;
};
const dataTypeToParameterizedDataType = (token, i, tokens) => {
    if (token.type === token_js_1.TokenType.RESERVED_DATA_TYPE) {
        const nextToken = nextNonCommentToken(tokens, i);
        if (nextToken && isOpenParen(nextToken)) {
            return { ...token, type: token_js_1.TokenType.RESERVED_PARAMETERIZED_DATA_TYPE };
        }
    }
    return token;
};
const identToArrayIdent = (token, i, tokens) => {
    if (token.type === token_js_1.TokenType.IDENTIFIER) {
        const nextToken = nextNonCommentToken(tokens, i);
        if (nextToken && isOpenBracket(nextToken)) {
            return { ...token, type: token_js_1.TokenType.ARRAY_IDENTIFIER };
        }
    }
    return token;
};
const dataTypeToArrayKeyword = (token, i, tokens) => {
    if (token.type === token_js_1.TokenType.RESERVED_DATA_TYPE) {
        const nextToken = nextNonCommentToken(tokens, i);
        if (nextToken && isOpenBracket(nextToken)) {
            return { ...token, type: token_js_1.TokenType.ARRAY_KEYWORD };
        }
    }
    return token;
};
const prevNonCommentToken = (tokens, index) => nextNonCommentToken(tokens, index, -1);
const nextNonCommentToken = (tokens, index, dir = 1) => {
    let i = 1;
    while (tokens[index + i * dir] && isComment(tokens[index + i * dir])) {
        i++;
    }
    return tokens[index + i * dir];
};
const isOpenParen = (t) => t.type === token_js_1.TokenType.OPEN_PAREN && t.text === '(';
const isOpenBracket = (t) => t.type === token_js_1.TokenType.OPEN_PAREN && t.text === '[';
const isComment = (t) => t.type === token_js_1.TokenType.BLOCK_COMMENT || t.type === token_js_1.TokenType.LINE_COMMENT;
//# sourceMappingURL=disambiguateTokens.js.map