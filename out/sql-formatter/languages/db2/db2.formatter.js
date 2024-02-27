"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.db2 = void 0;
const expandPhrases_js_1 = require("../../expandPhrases.js");
const db2_functions_js_1 = require("./db2.functions.js");
const db2_keywords_js_1 = require("./db2.keywords.js");
const reservedSelect = (0, expandPhrases_js_1.expandPhrases)(['SELECT [ALL | DISTINCT]']);
const reservedClauses = (0, expandPhrases_js_1.expandPhrases)([
    // queries
    'WHERE',
    'GROUP BY',
    'HAVING',
    'PARTITION BY',
    'ORDER BY [INPUT SEQUENCE]',
    'LIMIT',
    'OFFSET',
    'FETCH NEXT',
    'FOR UPDATE [OF]',
    'FOR {READ | FETCH} ONLY',
    'FOR {RR | CS | UR | RS} [USE AND KEEP {SHARE | UPDATE | EXCLUSIVE} LOCKS]',
    'WAIT FOR OUTCOME',
    'SKIP LOCKED DATA',
    'INTO',
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
    'INSERT',
]);
const onelineClauses = (0, expandPhrases_js_1.expandPhrases)([
    'WITH',
    'FROM',
    // - create:
    'CREATE [GLOBAL TEMPORARY | EXTERNAL] TABLE [IF NOT EXISTS]',
    'CREATE [OR REPLACE] VIEW',
    // - update:
    'UPDATE',
    'WHERE CURRENT OF',
    'WITH {RR | RS | CS | UR}',
    // - delete:
    'DELETE FROM',
    // - drop table:
    'DROP TABLE [IF EXISTS]',
    // alter table:
    'ALTER TABLE',
    'ADD [COLUMN]',
    'DROP [COLUMN]',
    'RENAME COLUMN',
    'ALTER [COLUMN]',
    'SET DATA TYPE', // for alter column
    'SET NOT NULL', // for alter column
    'DROP {DEFAULT | GENERATED | NOT NULL}', // for alter column
    // - truncate:
    'TRUNCATE [TABLE]',
    // https://www.ibm.com/docs/en/db2/11.5?topic=s-statements
    'ALLOCATE',
    'ALTER AUDIT POLICY',
    'ALTER BUFFERPOOL',
    'ALTER DATABASE PARTITION GROUP',
    'ALTER DATABASE',
    'ALTER EVENT MONITOR',
    'ALTER FUNCTION',
    'ALTER HISTOGRAM TEMPLATE',
    'ALTER INDEX',
    'ALTER MASK',
    'ALTER METHOD',
    'ALTER MODULE',
    'ALTER NICKNAME',
    'ALTER PACKAGE',
    'ALTER PERMISSION',
    'ALTER PROCEDURE',
    'ALTER SCHEMA',
    'ALTER SECURITY LABEL COMPONENT',
    'ALTER SECURITY POLICY',
    'ALTER SEQUENCE',
    'ALTER SERVER',
    'ALTER SERVICE CLASS',
    'ALTER STOGROUP',
    'ALTER TABLESPACE',
    'ALTER THRESHOLD',
    'ALTER TRIGGER',
    'ALTER TRUSTED CONTEXT',
    'ALTER TYPE',
    'ALTER USAGE LIST',
    'ALTER USER MAPPING',
    'ALTER VIEW',
    'ALTER WORK ACTION SET',
    'ALTER WORK CLASS SET',
    'ALTER WORKLOAD',
    'ALTER WRAPPER',
    'ALTER XSROBJECT',
    'ALTER STOGROUP',
    'ALTER TABLESPACE',
    'ALTER TRIGGER',
    'ALTER TRUSTED CONTEXT',
    'ALTER VIEW',
    'ASSOCIATE [RESULT SET] {LOCATOR | LOCATORS}',
    'AUDIT',
    'BEGIN DECLARE SECTION',
    'CALL',
    'CLOSE',
    'COMMENT ON',
    'COMMIT [WORK]',
    'CONNECT',
    'CREATE [OR REPLACE] [PUBLIC] ALIAS',
    'CREATE AUDIT POLICY',
    'CREATE BUFFERPOOL',
    'CREATE DATABASE PARTITION GROUP',
    'CREATE EVENT MONITOR',
    'CREATE [OR REPLACE] FUNCTION',
    'CREATE FUNCTION MAPPING',
    'CREATE HISTOGRAM TEMPLATE',
    'CREATE [UNIQUE] INDEX',
    'CREATE INDEX EXTENSION',
    'CREATE [OR REPLACE] MASK',
    'CREATE [SPECIFIC] METHOD',
    'CREATE [OR REPLACE] MODULE',
    'CREATE [OR REPLACE] NICKNAME',
    'CREATE [OR REPLACE] PERMISSION',
    'CREATE [OR REPLACE] PROCEDURE',
    'CREATE ROLE',
    'CREATE SCHEMA',
    'CREATE SECURITY LABEL [COMPONENT]',
    'CREATE SECURITY POLICY',
    'CREATE [OR REPLACE] SEQUENCE',
    'CREATE SERVICE CLASS',
    'CREATE SERVER',
    'CREATE STOGROUP',
    'CREATE SYNONYM',
    'CREATE [LARGE | REGULAR | {SYSTEM | USER} TEMPORARY] TABLESPACE',
    'CREATE THRESHOLD',
    'CREATE {TRANSFORM | TRANSFORMS} FOR',
    'CREATE [OR REPLACE] TRIGGER',
    'CREATE TRUSTED CONTEXT',
    'CREATE [OR REPLACE] TYPE',
    'CREATE TYPE MAPPING',
    'CREATE USAGE LIST',
    'CREATE USER MAPPING FOR',
    'CREATE [OR REPLACE] VARIABLE',
    'CREATE WORK ACTION SET',
    'CREATE WORK CLASS SET',
    'CREATE WORKLOAD',
    'CREATE WRAPPER',
    'DECLARE',
    'DECLARE GLOBAL TEMPORARY TABLE',
    'DESCRIBE [INPUT | OUTPUT]',
    'DISCONNECT',
    'DROP [PUBLIC] ALIAS',
    'DROP AUDIT POLICY',
    'DROP BUFFERPOOL',
    'DROP DATABASE PARTITION GROUP',
    'DROP EVENT MONITOR',
    'DROP [SPECIFIC] FUNCTION',
    'DROP FUNCTION MAPPING',
    'DROP HISTOGRAM TEMPLATE',
    'DROP INDEX [EXTENSION]',
    'DROP MASK',
    'DROP [SPECIFIC] METHOD',
    'DROP MODULE',
    'DROP NICKNAME',
    'DROP PACKAGE',
    'DROP PERMISSION',
    'DROP [SPECIFIC] PROCEDURE',
    'DROP ROLE',
    'DROP SCHEMA',
    'DROP SECURITY LABEL [COMPONENT]',
    'DROP SECURITY POLICY',
    'DROP SEQUENCE',
    'DROP SERVER',
    'DROP SERVICE CLASS',
    'DROP STOGROUP',
    'DROP TABLE HIERARCHY',
    'DROP {TABLESPACE | TABLESPACES}',
    'DROP {TRANSFORM | TRANSFORMS}',
    'DROP THRESHOLD',
    'DROP TRIGGER',
    'DROP TRUSTED CONTEXT',
    'DROP TYPE [MAPPING]',
    'DROP USAGE LIST',
    'DROP USER MAPPING FOR',
    'DROP VARIABLE',
    'DROP VIEW [HIERARCHY]',
    'DROP WORK {ACTION | CLASS} SET',
    'DROP WORKLOAD',
    'DROP WRAPPER',
    'DROP XSROBJECT',
    'END DECLARE SECTION',
    'EXECUTE [IMMEDIATE]',
    'EXPLAIN {PLAN [SECTION] | ALL}',
    'FETCH [FROM]',
    'FLUSH {BUFFERPOOL | BUFFERPOOLS} ALL',
    'FLUSH EVENT MONITOR',
    'FLUSH FEDERATED CACHE',
    'FLUSH OPTIMIZATION PROFILE CACHE',
    'FLUSH PACKAGE CACHE [DYNAMIC]',
    'FLUSH AUTHENTICATION CACHE [FOR ALL]',
    'FREE LOCATOR',
    'GET DIAGNOSTICS',
    'GOTO',
    'GRANT', // TODO: lots of syntax here
    'INCLUDE',
    'ITERATE',
    'LEAVE',
    'LOCK TABLE',
    'LOOP',
    'OPEN',
    'PIPE',
    'PREPARE',
    'REFRESH TABLE',
    'RELEASE',
    'RELEASE [TO] SAVEPOINT',
    'RENAME [TABLE | INDEX | STOGROUP | TABLESPACE]',
    'REPEAT',
    'RESIGNAL',
    'RETURN',
    'REVOKE', // TODO: lots of syntax here
    'ROLLBACK [WORK] [TO SAVEPOINT]',
    'SAVEPOINT',
    'SET COMPILATION ENVIRONMENT',
    'SET CONNECTION',
    'SET CURRENT', // TODO: bunch of syntax here
    'SET ENCRYPTION PASSWORD',
    'SET EVENT MONITOR STATE',
    'SET INTEGRITY',
    'SET PASSTHRU',
    'SET PATH',
    'SET ROLE',
    'SET SCHEMA',
    'SET SERVER OPTION',
    'SET {SESSION AUTHORIZATION | SESSION_USER}',
    'SET USAGE LIST',
    'SIGNAL',
    'TRANSFER OWNERSHIP OF',
    'WHENEVER {NOT FOUND | SQLERROR | SQLWARNING}',
    'WHILE',
]);
const reservedSetOperations = (0, expandPhrases_js_1.expandPhrases)(['UNION [ALL]', 'EXCEPT [ALL]', 'INTERSECT [ALL]']);
const reservedJoins = (0, expandPhrases_js_1.expandPhrases)([
    'JOIN',
    '{LEFT | RIGHT | FULL} [OUTER] JOIN',
    '{INNER | CROSS} JOIN',
]);
const reservedPhrases = (0, expandPhrases_js_1.expandPhrases)([
    'ON DELETE',
    'ON UPDATE',
    'SET NULL',
    '{ROWS | RANGE} BETWEEN',
]);
exports.db2 = {
    name: 'db2',
    tokenizerOptions: {
        reservedSelect,
        reservedClauses: [...reservedClauses, ...onelineClauses],
        reservedSetOperations,
        reservedJoins,
        reservedPhrases,
        reservedKeywords: db2_keywords_js_1.keywords,
        reservedDataTypes: db2_keywords_js_1.dataTypes,
        reservedFunctionNames: db2_functions_js_1.functions,
        extraParens: ['[]'],
        stringTypes: [
            { quote: `''-qq`, prefixes: ['G', 'N', 'U&'] },
            { quote: `''-raw`, prefixes: ['X', 'BX', 'GX', 'UX'], requirePrefix: true },
        ],
        identTypes: [`""-qq`],
        identChars: { first: '@#$', rest: '@#$' },
        paramTypes: { positional: true, named: [':'] },
        paramChars: { first: '@#$', rest: '@#$' },
        operators: [
            '**',
            '%',
            '|',
            '&',
            '^',
            '~',
            // allow-any-unicode-next-line
            '¬=',
            // allow-any-unicode-next-line
            '¬>',
            // allow-any-unicode-next-line
            '¬<',
            '!>',
            '!<',
            '^=',
            '^>',
            '^<',
            '||',
            '->',
            '=>',
        ],
    },
    formatOptions: {
        onelineClauses,
    },
};
//# sourceMappingURL=db2.formatter.js.map