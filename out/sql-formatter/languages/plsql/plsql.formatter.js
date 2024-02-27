"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.plsql = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const token_js_1 = require("../../lexer/token.js");
const plsql_keywords_js_1 = require("./plsql.keywords.js");
const plsql_functions_js_1 = require("./plsql.functions.js");
const reservedSelect = (0, expandPhrases_js_1.expandPhrases)(['SELECT [ALL | DISTINCT | UNIQUE]']);
const reservedClauses = (0, expandPhrases_js_1.expandPhrases)([
    // queries
    'WHERE',
    'GROUP BY',
    'HAVING',
    'PARTITION BY',
    'ORDER [SIBLINGS] BY',
    'OFFSET',
    'FETCH {FIRST | NEXT}',
    'FOR UPDATE [OF]',
    // Data manipulation
    // - insert:
    'INSERT [INTO | ALL INTO]',
    'VALUES',
    // - update:
    'SET',
    // - merge:
    'MERGE [INTO]',
    'WHEN [NOT] MATCHED [THEN]',
    'UPDATE SET',
    // other
    'RETURNING',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH',
    'FROM',
    // - create:
    'CREATE [GLOBAL TEMPORARY | PRIVATE TEMPORARY | SHARDED | DUPLICATED | IMMUTABLE BLOCKCHAIN | BLOCKCHAIN | IMMUTABLE] TABLE',
    'CREATE [OR REPLACE] [NO FORCE | FORCE] [EDITIONING | EDITIONABLE | EDITIONABLE EDITIONING | NONEDITIONABLE] VIEW',
    'CREATE MATERIALIZED VIEW',
    // - update:
    'UPDATE [ONLY]',
    // - delete:
    'DELETE FROM [ONLY]',
    // - drop table:
    'DROP TABLE',
    // - alter table:
    'ALTER TABLE',
    'ADD',
    'DROP {COLUMN | UNUSED COLUMNS | COLUMNS CONTINUE}',
    'MODIFY',
    'RENAME TO',
    'RENAME COLUMN',
    // - truncate:
    'TRUNCATE TABLE',
    // other
    'SET SCHEMA',
    'BEGIN',
    'CONNECT BY',
    'DECLARE',
    'EXCEPT',
    'EXCEPTION',
    'LOOP',
    'START WITH',
]);
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)(['UNION [ALL]', 'EXCEPT', 'INTERSECT']);
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '{INNER | CROSS} JOIN',
    'NATURAL [INNER] JOIN',
    'NATURAL {LEFT | RIGHT | FULL} [OUTER] JOIN',
    // non-standard joins
    '{CROSS | OUTER} APPLY',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)([
    'ON {UPDATE | DELETE} [SET NULL]',
    'ON COMMIT',
    '{ROWS | RANGE} BETWEEN',
]);
exports.plsql = {
    name: 'plsql',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        supportsXor: true,
        reservedKeywords: plsql_keywords_js_1.keywords,
        reservedDataTypes: plsql_keywords_js_1.dataTypes,
        reservedFunctionNames: plsql_functions_js_1.functions,
        stringTypes: [
            { quote: `''-qq`, prefixes: ['N'] },
            { quote: `q''`, prefixes: ['N'] },
        ],
        // PL/SQL doesn't actually support escaping of quotes in identifiers,
        // but for the sake of simpler testing we'll support this anyway
        // as all other SQL dialects with "identifiers" do.
        identTypes: [`""-qq`],
        identChars: { rest: '$#' },
        variableTypes: [{ regex: '&{1,2}[A-Za-z][A-Za-z0-9_$#]*' }],
        paramTypes: { numbered: [':'], named: [':'] },
        paramChars: {}, // Empty object used on purpose to not allow $ and # chars as specified in identChars
        operators: [
            '**',
            ':=',
            '%',
            '~=',
            '^=',
            // '..', // Conflicts with float followed by dot (so "2..3" gets parsed as ["2.", ".", "3"])
            '>>',
            '<<',
            '=>',
            '@',
            '||',
        ],
        postProcess,
    },
    formatOptions: {
        alwaysDenseOperators: ['@'],
        onelineClauses,
    },
};
function postProcess(tokens) {
    let previousReservedToken = token_js_1.EOF_TOKEN;
    return tokens.map(token => {
        // BY [SET]
        if (token_js_1.isToken.SET(token) && token_js_1.isToken.BY(previousReservedToken)) {
            return { ...token, type: token_js_1.TokenType.RESERVED_KEYWORD };
        }
        if ((0, token_js_1.isReserved)(token.type)) {
            previousReservedToken = token;
        }
        return token;
    });
}
//# sourceMappingURL=plsql.formatter.js.map