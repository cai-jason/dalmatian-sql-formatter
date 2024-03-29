"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hive = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const hive_functions_js_1 = require("./hive.functions.js");
const hive_keywords_js_1 = require("./hive.keywords.js");
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
    //   Hive does not actually support plain INSERT INTO, only INSERT INTO TABLE
    //   but it's a nuisance to not support it, as all other dialects do.
    'INSERT INTO [TABLE]',
    'VALUES',
    // - update:
    'SET',
    // - merge:
    'MERGE INTO',
    'WHEN [NOT] MATCHED [THEN]',
    'UPDATE SET',
    'INSERT [VALUES]',
    // - insert overwrite directory:
    //   https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DML#LanguageManualDML-Writingdataintothefilesystemfromqueries
    'INSERT OVERWRITE [LOCAL] DIRECTORY',
    // - load:
    //   https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DML#LanguageManualDML-Loadingfilesintotables
    'LOAD DATA [LOCAL] INPATH',
    '[OVERWRITE] INTO TABLE',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH',
    'FROM',
    // - create:
    'CREATE [TEMPORARY] [EXTERNAL] TABLE [IF NOT EXISTS]',
    'CREATE [MATERIALIZED] VIEW [IF NOT EXISTS]',
    // - update:
    'UPDATE',
    // - delete:
    'DELETE FROM',
    // - drop table:
    'DROP TABLE [IF EXISTS]',
    // - alter table:
    'ALTER TABLE',
    'RENAME TO',
    // - truncate:
    'TRUNCATE [TABLE]',
    // other
    'ALTER',
    'CREATE',
    'USE',
    'DESCRIBE',
    'DROP',
    'FETCH',
    'SHOW',
    'STORED AS',
    'STORED BY',
    'ROW FORMAT',
]);
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)(['UNION [ALL | DISTINCT]']);
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '{INNER | CROSS} JOIN',
    // non-standard joins
    'LEFT SEMI JOIN',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)(['{ROWS | RANGE} BETWEEN']);
// https://cwiki.apache.org/confluence/display/Hive/LanguageManual
exports.hive = {
    name: 'hive',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        reservedKeywords: hive_keywords_js_1.keywords,
        reservedDataTypes: hive_keywords_js_1.dataTypes,
        reservedFunctionNames: hive_functions_js_1.functions,
        extraParens: ['[]'],
        stringTypes: ['""-bs', `''-bs`],
        identTypes: ['``'],
        variableTypes: [{ quote: '{}', prefixes: ['$'], requirePrefix: true }],
        operators: ['%', '~', '^', '|', '&', '<=>', '==', '!', '||'],
    },
    formatOptions: {
        onelineClauses,
    },
};
//# sourceMappingURL=hive.formatter.js.map