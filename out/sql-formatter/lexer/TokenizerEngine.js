"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const lineColFromIndex_js_1 = require("./lineColFromIndex.js");
const regexUtil_js_1 = require("./regexUtil.js");
class TokenizerEngine {
    rules;
    dialectName;
    input = ''; // The input SQL string to process
    index = 0; // Current position in string
    constructor(rules, dialectName) {
        this.rules = rules;
        this.dialectName = dialectName;
    }
    /**
     * Takes a SQL string and breaks it into tokens.
     * Each token is an object with type and value.
     *
     * @param input - The SQL string
     * @returns output token stream
     */
    tokenize(input) {
        this.input = input;
        this.index = 0;
        const tokens = [];
        let token;
        // Keep processing the string until end is reached
        while (this.index < this.input.length) {
            // skip any preceding whitespace
            const precedingWhitespace = this.getWhitespace();
            if (this.index < this.input.length) {
                // Get the next token and the token type
                token = this.getNextToken();
                if (!token) {
                    throw this.createParseError();
                }
                tokens.push({ ...token, precedingWhitespace });
            }
        }
        return tokens;
    }
    createParseError() {
        const text = this.input.slice(this.index, this.index + 10);
        const { line, col } = (0, lineColFromIndex_js_1.lineColFromIndex)(this.input, this.index);
        return new Error(`Parse error: Unexpected "${text}" at line ${line} column ${col}.\n${this.dialectInfo()}`);
    }
    dialectInfo() {
        if (this.dialectName === 'sql') {
            return (`This likely happens because you're using the default "sql" dialect.\n` +
                `If possible, please select a more specific dialect (like sqlite, postgresql, etc).`);
        }
        else {
            return `SQL dialect used: "${this.dialectName}".`;
        }
    }
    getWhitespace() {
        regexUtil_js_1.WHITESPACE_REGEX.lastIndex = this.index;
        const matches = regexUtil_js_1.WHITESPACE_REGEX.exec(this.input);
        if (matches) {
            // Advance current position by matched whitespace length
            this.index += matches[0].length;
            return matches[0];
        }
        return undefined;
    }
    getNextToken() {
        for (const rule of this.rules) {
            const token = this.match(rule);
            if (token) {
                return token;
            }
        }
        return undefined;
    }
    // Attempts to match token rule regex at current position in input
    match(rule) {
        rule.regex.lastIndex = this.index;
        const matches = rule.regex.exec(this.input);
        if (matches) {
            const matchedText = matches[0];
            const token = {
                type: rule.type,
                raw: matchedText,
                text: rule.text ? rule.text(matchedText) : matchedText,
                start: this.index,
            };
            if (rule.key) {
                token.key = rule.key(matchedText);
            }
            // Advance current position by matched token length
            this.index += matchedText.length;
            return token;
        }
        return undefined;
    }
}
exports.default = TokenizerEngine;
//# sourceMappingURL=TokenizerEngine.js.map