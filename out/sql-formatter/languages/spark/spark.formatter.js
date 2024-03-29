"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.spark = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const token_js_1 = require("../../lexer/token.js");
const spark_keywords_js_1 = require("./spark.keywords.js");
const spark_functions_js_1 = require("./spark.functions.js");
// http://spark.apache.org/docs/latest/sql-ref-syntax.html
const reservedSelect = (0, expandPhrases_js_1.expandPhrases)(['SELECT [ALL | DISTINCT]']);
const reservedClauses = (0, expandPhrases_js_1.expandPhrases)([
    // queries
    'WHERE',
    'GROUP BY',
    'HAVING',
    'WINDOW',
    'PARTITION BY',
    'ORDER BY',
    'SORT BY',
    'CLUSTER BY',
    'DISTRIBUTE BY',
    'LIMIT',
    // Data manipulation
    // - insert:
    'INSERT [INTO | OVERWRITE] [TABLE]',
    'VALUES',
    // - insert overwrite directory:
    //   https://spark.apache.org/docs/latest/sql-ref-syntax-dml-insert-overwrite-directory.html
    'INSERT OVERWRITE [LOCAL] DIRECTORY',
    // - load:
    //   https://spark.apache.org/docs/latest/sql-ref-syntax-dml-load.html
    'LOAD DATA [LOCAL] INPATH',
    '[OVERWRITE] INTO TABLE',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH',
    'FROM',
    // - create:
    'CREATE [EXTERNAL] TABLE [IF NOT EXISTS]',
    'CREATE [OR REPLACE] [GLOBAL TEMPORARY | TEMPORARY] VIEW [IF NOT EXISTS]',
    // - drop table:
    'DROP TABLE [IF EXISTS]',
    // - alter table:
    'ALTER TABLE',
    'ADD COLUMNS',
    'DROP {COLUMN | COLUMNS}',
    'RENAME TO',
    'RENAME COLUMN',
    'ALTER COLUMN',
    // - truncate:
    'TRUNCATE TABLE',
    // other
    'LATERAL VIEW',
    'ALTER DATABASE',
    'ALTER VIEW',
    'CREATE DATABASE',
    'CREATE FUNCTION',
    'DROP DATABASE',
    'DROP FUNCTION',
    'DROP VIEW',
    'REPAIR TABLE',
    'USE DATABASE',
    // Data Retrieval
    'TABLESAMPLE',
    'PIVOT',
    'TRANSFORM',
    'EXPLAIN',
    // Auxiliary
    'ADD FILE',
    'ADD JAR',
    'ANALYZE TABLE',
    'CACHE TABLE',
    'CLEAR CACHE',
    'DESCRIBE DATABASE',
    'DESCRIBE FUNCTION',
    'DESCRIBE QUERY',
    'DESCRIBE TABLE',
    'LIST FILE',
    'LIST JAR',
    'REFRESH',
    'REFRESH TABLE',
    'REFRESH FUNCTION',
    'RESET',
    'SHOW COLUMNS',
    'SHOW CREATE TABLE',
    'SHOW DATABASES',
    'SHOW FUNCTIONS',
    'SHOW PARTITIONS',
    'SHOW TABLE EXTENDED',
    'SHOW TABLES',
    'SHOW TBLPROPERTIES',
    'SHOW VIEWS',
    'UNCACHE TABLE',
]);
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)([
    'UNION [ALL | DISTINCT]',
    'EXCEPT [ALL | DISTINCT]',
    'INTERSECT [ALL | DISTINCT]',
]);
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '{INNER | CROSS} JOIN',
    'NATURAL [INNER] JOIN',
    'NATURAL {LEFT | RIGHT | FULL} [OUTER] JOIN',
    // non-standard-joins
    '[LEFT] {ANTI | SEMI} JOIN',
    'NATURAL [LEFT] {ANTI | SEMI} JOIN',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)([
    'ON DELETE',
    'ON UPDATE',
    'CURRENT ROW',
    '{ROWS | RANGE} BETWEEN',
]);
// http://spark.apache.org/docs/latest/sql-programming-guide.html
exports.spark = {
    name: 'spark',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        supportsXor: true,
        reservedKeywords: spark_keywords_js_1.keywords,
        reservedDataTypes: spark_keywords_js_1.dataTypes,
        reservedFunctionNames: spark_functions_js_1.functions,
        extraParens: ['[]'],
        stringTypes: [
            '\'\'-bs',
            '""-bs',
            { quote: '\'\'-raw', prefixes: ['R', 'X'], requirePrefix: true },
            { quote: '""-raw', prefixes: ['R', 'X'], requirePrefix: true },
        ],
        identTypes: ['``'],
        variableTypes: [{ quote: '{}', prefixes: ['$'], requirePrefix: true }],
        operators: ['%', '~', '^', '|', '&', '<=>', '==', '!', '||', '->'],
        postProcess,
    },
    formatOptions: {
        onelineClauses,
    },
};
function postProcess(tokens) {
    return tokens.map((token, i) => {
        const prevToken = tokens[i - 1] || token_js_1.EOF_TOKEN;
        const nextToken = tokens[i + 1] || token_js_1.EOF_TOKEN;
        // [WINDOW](...)
        if (token_js_1.isToken.WINDOW(token) && nextToken.type === token_js_1.TokenType.OPEN_PAREN) {
            // This is a function call, treat it as a reserved function name
            return { ...token, type: token_js_1.TokenType.RESERVED_FUNCTION_NAME };
        }
        // TODO: deprecate this once ITEMS is merged with COLLECTION
        if (token.text === 'ITEMS' && token.type === token_js_1.TokenType.RESERVED_KEYWORD) {
            if (!(prevToken.text === 'COLLECTION' && nextToken.text === 'TERMINATED')) {
                // this is a word and not COLLECTION ITEMS
                return { ...token, type: token_js_1.TokenType.IDENTIFIER, text: token.raw };
            }
        }
        return token;
    });
}
//# sourceMappingURL=spark.formatter.js.map