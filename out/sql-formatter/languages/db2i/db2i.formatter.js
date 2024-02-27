"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.db2i = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const db2i_functions_js_1 = require("./db2i.functions.js");
const db2i_keywords_js_1 = require("./db2i.keywords.js");
const reservedSelect = (0, expandPhrases_js_1.expandPhrases)(['SELECT [ALL | DISTINCT]']);
const reservedClauses = (0, expandPhrases_js_1.expandPhrases)([
    // queries
    'INTO',
    'WHERE',
    'GROUP BY',
    'HAVING',
    'PARTITION BY',
    'ORDER [SIBLINGS] BY [INPUT SEQUENCE]',
    'LIMIT',
    'OFFSET',
    'FETCH {FIRST | NEXT}',
    'FOR UPDATE [OF]',
    'FOR READ ONLY',
    'OPTIMIZE FOR',
    // Data modification
    // - insert:
    'INSERT INTO',
    'VALUES',
    // - update:
    'SET',
    // - merge:
    'MERGE INTO',
    'WHEN [NOT] MATCHED [THEN]',
    'UPDATE SET',
    'DELETE',
    'INSERT',
    // Data definition - table
    'FOR SYSTEM NAME',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH [RECURSIVE]',
    'FROM',
    // - create:
    'CREATE [OR REPLACE] TABLE',
    'CREATE [OR REPLACE] [RECURSIVE] VIEW',
    // - update:
    'UPDATE',
    'WHERE CURRENT OF',
    'WITH {NC | RR | RS | CS | UR}',
    // - delete:
    'DELETE FROM',
    // - drop table:
    'DROP TABLE',
    // alter table:
    'ALTER TABLE',
    'ADD [COLUMN]',
    'ALTER [COLUMN]',
    'DROP [COLUMN]',
    'SET DATA TYPE', // for alter column
    'SET {GENERATED ALWAYS | GENERATED BY DEFAULT}', // for alter column
    'SET NOT NULL', // for alter column
    'SET {NOT HIDDEN | IMPLICITLY HIDDEN}', // for alter column
    'SET FIELDPROC', // for alter column
    'DROP {DEFAULT | NOT NULL | GENERATED | IDENTITY | ROW CHANGE TIMESTAMP | FIELDPROC}', // for alter column
    // - truncate:
    'TRUNCATE [TABLE]',
    // other
    'SET [CURRENT] SCHEMA',
    'SET CURRENT_SCHEMA',
    // https://www.ibm.com/docs/en/i/7.5?topic=reference-statements
    'ALLOCATE CURSOR',
    'ALLOCATE [SQL] DESCRIPTOR [LOCAL | GLOBAL] SQL',
    'ALTER [SPECIFIC] {FUNCTION | PROCEDURE}',
    'ALTER {MASK | PERMISSION | SEQUENCE | TRIGGER}',
    'ASSOCIATE [RESULT SET] {LOCATOR | LOCATORS}',
    'BEGIN DECLARE SECTION',
    'CALL',
    'CLOSE',
    'COMMENT ON {ALIAS | COLUMN | CONSTRAINT | INDEX | MASK | PACKAGE | PARAMETER | PERMISSION | SEQUENCE | TABLE | TRIGGER | VARIABLE | XSROBJECT}',
    'COMMENT ON [SPECIFIC] {FUNCTION | PROCEDURE | ROUTINE}',
    'COMMENT ON PARAMETER SPECIFIC {FUNCTION | PROCEDURE | ROUTINE}',
    'COMMENT ON [TABLE FUNCTION] RETURN COLUMN',
    'COMMENT ON [TABLE FUNCTION] RETURN COLUMN SPECIFIC [PROCEDURE | ROUTINE]',
    'COMMIT [WORK] [HOLD]',
    'CONNECT [TO | RESET] USER',
    'CREATE [OR REPLACE] {ALIAS | FUNCTION | MASK | PERMISSION | PROCEDURE | SEQUENCE | TRIGGER | VARIABLE}',
    'CREATE [ENCODED VECTOR] INDEX',
    'CREATE UNIQUE [WHERE NOT NULL] INDEX',
    'CREATE SCHEMA',
    'CREATE TYPE',
    'DEALLOCATE [SQL] DESCRIPTOR [LOCAL | GLOBAL]',
    'DECLARE CURSOR',
    'DECLARE GLOBAL TEMPORARY TABLE',
    'DECLARE',
    'DESCRIBE CURSOR',
    'DESCRIBE INPUT',
    'DESCRIBE [OUTPUT]',
    'DESCRIBE {PROCEDURE | ROUTINE}',
    'DESCRIBE TABLE',
    'DISCONNECT ALL [SQL]',
    'DISCONNECT [CURRENT]',
    'DROP {ALIAS | INDEX | MASK | PACKAGE | PERMISSION | SCHEMA | SEQUENCE | TABLE | TYPE | VARIABLE | XSROBJECT} [IF EXISTS]',
    'DROP [SPECIFIC] {FUNCTION | PROCEDURE | ROUTINE} [IF EXISTS]',
    'END DECLARE SECTION',
    'EXECUTE [IMMEDIATE]',
    // 'FETCH {NEXT | PRIOR | FIRST | LAST | BEFORE | AFTER | CURRENT} [FROM]',
    'FREE LOCATOR',
    'GET [SQL] DESCRIPTOR [LOCAL | GLOBAL]',
    'GET [CURRENT | STACKED] DIAGNOSTICS',
    'GRANT {ALL [PRIVILEGES] | ALTER | EXECUTE} ON {FUNCTION | PROCEDURE | ROUTINE | PACKAGE | SCHEMA | SEQUENCE | TABLE | TYPE | VARIABLE | XSROBJECT}',
    'HOLD LOCATOR',
    'INCLUDE',
    'LABEL ON {ALIAS | COLUMN | CONSTRAINT | INDEX | MASK | PACKAGE | PERMISSION | SEQUENCE | TABLE | TRIGGER | VARIABLE | XSROBJECT}',
    'LABEL ON [SPECIFIC] {FUNCTION | PROCEDURE | ROUTINE}',
    'LOCK TABLE',
    'OPEN',
    'PREPARE',
    'REFRESH TABLE',
    'RELEASE',
    'RELEASE [TO] SAVEPOINT',
    'RENAME [TABLE | INDEX] TO',
    'REVOKE {ALL [PRIVILEGES] | ALTER | EXECUTE} ON {FUNCTION | PROCEDURE | ROUTINE | PACKAGE | SCHEMA | SEQUENCE | TABLE | TYPE | VARIABLE | XSROBJECT}',
    'ROLLBACK [WORK] [HOLD | TO SAVEPOINT]',
    'SAVEPOINT',
    'SET CONNECTION',
    'SET CURRENT {DEBUG MODE | DECFLOAT ROUNDING MODE | DEGREE | IMPLICIT XMLPARSE OPTION | TEMPORAL SYSTEM_TIME}',
    'SET [SQL] DESCRIPTOR [LOCAL | GLOBAL]',
    'SET ENCRYPTION PASSWORD',
    'SET OPTION',
    'SET {[CURRENT [FUNCTION]] PATH | CURRENT_PATH}',
    'SET RESULT SETS [WITH RETURN [TO CALLER | TO CLIENT]]',
    'SET SESSION AUTHORIZATION',
    'SET SESSION_USER',
    'SET TRANSACTION',
    'SIGNAL SQLSTATE [VALUE]',
    'TAG',
    'TRANSFER OWNERSHIP OF',
    'WHENEVER {NOT FOUND | SQLERROR | SQLWARNING}',
]);
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)(['UNION [ALL]', 'EXCEPT [ALL]', 'INTERSECT [ALL]']);
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '[LEFT | RIGHT] EXCEPTION JOIN',
    '{INNER | CROSS} JOIN',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)([
    'ON DELETE',
    'ON UPDATE',
    'SET NULL',
    '{ROWS | RANGE} BETWEEN',
]);
// https://www.ibm.com/docs/en/i/7.5?topic=reference-sql
exports.db2i = {
    name: 'db2i',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        reservedKeywords: db2i_keywords_js_1.keywords,
        reservedDataTypes: db2i_keywords_js_1.dataTypes,
        reservedFunctionNames: db2i_functions_js_1.functions,
        nestedBlockComments: true,
        extraParens: ['[]'],
        stringTypes: [
            { quote: `''-qq`, prefixes: ['G', 'N'] },
            { quote: `''-raw`, prefixes: ['X', 'BX', 'GX', 'UX'], requirePrefix: true },
        ],
        identTypes: [`""-qq`],
        identChars: { first: '@#$', rest: '@#$' },
        paramTypes: { positional: true, named: [':'] },
        paramChars: { first: '@#$', rest: '@#$' },
        // allow-any-unicode-next-line
        operators: ['**', '¬=', '¬>', '¬<', '!>', '!<', '||', '=>'],
    },
    formatOptions: {
        onelineClauses,
    },
};
//# sourceMappingURL=db2i.formatter.js.map