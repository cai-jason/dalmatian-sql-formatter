"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.trino = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const trino_functions_js_1 = require("./trino.functions.js");
const trino_keywords_js_1 = require("./trino.keywords.js");
const reservedSelect = (0, expandPhrases_js_1.expandPhrases)(['SELECT [ALL | DISTINCT]']);
// https://github.com/trinodb/trino/blob/432d2897bdef99388c1a47188743a061c4ac1f34/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4#L41
const reservedClauses = (0, expandPhrases_js_1.expandPhrases)([
    // queries
    'WHERE',
    'GROUP BY [ALL | DISTINCT]',
    'HAVING',
    'WINDOW',
    'PARTITION BY',
    'ORDER BY',
    'LIMIT',
    'OFFSET',
    'FETCH {FIRST | NEXT}',
    // Data manipulation
    // - insert:
    'INSERT INTO',
    'VALUES',
    // - update:
    'SET',
    // MATCH_RECOGNIZE
    'MATCH_RECOGNIZE',
    'MEASURES',
    'ONE ROW PER MATCH',
    'ALL ROWS PER MATCH',
    'AFTER MATCH',
    'PATTERN',
    'SUBSET',
    'DEFINE',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH [RECURSIVE]',
    'FROM',
    // - create:
    'CREATE TABLE [IF NOT EXISTS]',
    'CREATE [OR REPLACE] [MATERIALIZED] VIEW',
    // - update:
    'UPDATE',
    // - delete:
    'DELETE FROM',
    // - drop table:
    'DROP TABLE [IF EXISTS]',
    // - alter table:
    'ALTER TABLE [IF EXISTS]',
    'ADD COLUMN [IF NOT EXISTS]',
    'DROP COLUMN [IF EXISTS]',
    'RENAME COLUMN [IF EXISTS]',
    'RENAME TO',
    'SET AUTHORIZATION [USER | ROLE]',
    'SET PROPERTIES',
    'EXECUTE',
    // - truncate:
    'TRUNCATE TABLE',
    // other
    'ALTER SCHEMA',
    'ALTER MATERIALIZED VIEW',
    'ALTER VIEW',
    'CREATE SCHEMA',
    'CREATE ROLE',
    'DROP SCHEMA',
    'DROP MATERIALIZED VIEW',
    'DROP VIEW',
    'DROP ROLE',
    // Auxiliary
    'EXPLAIN',
    'ANALYZE',
    'EXPLAIN ANALYZE',
    'EXPLAIN ANALYZE VERBOSE',
    'USE',
    'DESCRIBE INPUT',
    'DESCRIBE OUTPUT',
    'REFRESH MATERIALIZED VIEW',
    'RESET SESSION',
    'SET SESSION',
    'SET PATH',
    'SET TIME ZONE',
    'SHOW GRANTS',
    'SHOW CREATE TABLE',
    'SHOW CREATE SCHEMA',
    'SHOW CREATE VIEW',
    'SHOW CREATE MATERIALIZED VIEW',
    'SHOW TABLES',
    'SHOW SCHEMAS',
    'SHOW CATALOGS',
    'SHOW COLUMNS',
    'SHOW STATS FOR',
    'SHOW ROLES',
    'SHOW CURRENT ROLES',
    'SHOW ROLE GRANTS',
    'SHOW FUNCTIONS',
    'SHOW SESSION',
]);
// https://github.com/trinodb/trino/blob/432d2897bdef99388c1a47188743a061c4ac1f34/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4#L231-L235
// https://github.com/trinodb/trino/blob/432d2897bdef99388c1a47188743a061c4ac1f34/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4#L288-L291
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)([
    'UNION [ALL | DISTINCT]',
    'EXCEPT [ALL | DISTINCT]',
    'INTERSECT [ALL | DISTINCT]',
]);
// https://github.com/trinodb/trino/blob/432d2897bdef99388c1a47188743a061c4ac1f34/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4#L299-L313
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '{INNER | CROSS} JOIN',
    'NATURAL [INNER] JOIN',
    'NATURAL {LEFT | RIGHT | FULL} [OUTER] JOIN',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)([
    '{ROWS | RANGE | GROUPS} BETWEEN',
    // comparison operator
    'IS [NOT] DISTINCT FROM',
]);
exports.trino = {
    name: 'trino',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        reservedKeywords: trino_keywords_js_1.keywords,
        reservedDataTypes: trino_keywords_js_1.dataTypes,
        reservedFunctionNames: trino_functions_js_1.functions,
        // Trino also supports {- ... -} parenthesis.
        // The formatting of these currently works out as a result of { and -
        // not getting a space added in-between.
        // https://trino.io/docs/current/sql/match-recognize.html#row-pattern-syntax
        extraParens: ['[]', '{}'],
        // https://trino.io/docs/current/language/types.html#string
        // https://trino.io/docs/current/language/types.html#varbinary
        stringTypes: [
            { quote: '\'\'-qq', prefixes: ['U&'] },
            { quote: '\'\'-raw', prefixes: ['X'], requirePrefix: true },
        ],
        // https://trino.io/docs/current/language/reserved.html
        identTypes: ['""-qq'],
        paramTypes: { positional: true },
        operators: [
            '%',
            '->',
            '=>',
            ':',
            '||',
            // Row pattern syntax
            '|',
            '^',
            '$',
            // '?', conflicts with positional placeholders
        ],
    },
    formatOptions: {
        onelineClauses,
    },
};
//# sourceMappingURL=trino.formatter.js.map