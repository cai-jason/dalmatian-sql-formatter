"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlite = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const sqlite_functions_js_1 = require("./sqlite.functions.js");
const sqlite_keywords_js_1 = require("./sqlite.keywords.js");
const reservedSelect = (0, expandPhrases_js_1.expandPhrases)(['SELECT [ALL | DISTINCT]']);
const reservedClauses = (0, expandPhrases_js_1.expandPhrases)([
    // queries
    'WHERE',
    'GROUP BY',
    'HAVING',
    'WINDOW',
    'PARTITION BY',
    'ORDER BY',
    'LIMIT',
    'OFFSET',
    // Data manipulation
    // - insert:
    'INSERT [OR ABORT | OR FAIL | OR IGNORE | OR REPLACE | OR ROLLBACK] INTO',
    'REPLACE INTO',
    'VALUES',
    // - update:
    'SET',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH [RECURSIVE]',
    'FROM',
    // - create:
    'CREATE [TEMPORARY | TEMP] TABLE [IF NOT EXISTS]',
    'CREATE [TEMPORARY | TEMP] VIEW [IF NOT EXISTS]',
    // - update:
    'UPDATE [OR ABORT | OR FAIL | OR IGNORE | OR REPLACE | OR ROLLBACK]',
    // - insert:
    'ON CONFLICT',
    // - delete:
    'DELETE FROM',
    // - drop table:
    'DROP TABLE [IF EXISTS]',
    // - alter table:
    'ALTER TABLE',
    'ADD [COLUMN]',
    'DROP [COLUMN]',
    'RENAME [COLUMN]',
    'RENAME TO',
    // - set schema
    'SET SCHEMA',
]);
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)(['UNION [ALL]', 'EXCEPT', 'INTERSECT']);
// joins - https://www.sqlite.org/syntax/join-operator.html
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '{INNER | CROSS} JOIN',
    'NATURAL [INNER] JOIN',
    'NATURAL {LEFT | RIGHT | FULL} [OUTER] JOIN',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)([
    'ON {UPDATE | DELETE} [SET NULL | SET DEFAULT]',
    '{ROWS | RANGE | GROUPS} BETWEEN',
]);
exports.sqlite = {
    name: 'sqlite',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        reservedKeywords: sqlite_keywords_js_1.keywords,
        reservedDataTypes: sqlite_keywords_js_1.dataTypes,
        reservedFunctionNames: sqlite_functions_js_1.functions,
        stringTypes: [
            '\'\'-qq',
            { quote: '\'\'-raw', prefixes: ['X'], requirePrefix: true },
            // Depending on context SQLite also supports double-quotes for strings,
            // and single-quotes for identifiers.
        ],
        identTypes: [`""-qq`, '``', '[]'],
        // https://www.sqlite.org/lang_expr.html#parameters
        paramTypes: { positional: true, numbered: ['?'], named: [':', '@', '$'] },
        operators: ['%', '~', '&', '|', '<<', '>>', '==', '->', '->>', '||'],
    },
    formatOptions: {
        onelineClauses,
    },
};
//# sourceMappingURL=sqlite.formatter.js.map