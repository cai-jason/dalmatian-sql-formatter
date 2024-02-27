"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTypes = exports.keywords = void 0;
exports.keywords = [
    // https://www.ibm.com/docs/en/i/7.5?topic=words-reserved
    // TODO: This list likely contains all keywords, not only the reserved ones,
    // try to filter it down to just the reserved keywords.
    'ABSENT',
    'ACCORDING',
    'ACCTNG',
    'ACTION',
    'ACTIVATE',
    'ADD',
    'ALIAS',
    'ALL',
    'ALLOCATE',
    'ALLOW',
    'ALTER',
    'AND',
    'ANY',
    'APPEND',
    'APPLNAME',
    'ARRAY',
    'ARRAY_AGG',
    'ARRAY_TRIM',
    'AS',
    'ASC',
    'ASENSITIVE',
    'ASSOCIATE',
    'ATOMIC',
    'ATTACH',
    'ATTRIBUTES',
    'AUTHORIZATION',
    'AUTONOMOUS',
    'BEFORE',
    'BEGIN',
    'BETWEEN',
    'BIND',
    'BSON',
    'BUFFERPOOL',
    'BY',
    'CACHE',
    'CALL',
    'CALLED',
    'CARDINALITY',
    'CASE',
    'CAST',
    'CHECK',
    'CL',
    'CLOSE',
    'CLUSTER',
    'COLLECT',
    'COLLECTION',
    'COLUMN',
    'COMMENT',
    'COMMIT',
    'COMPACT',
    'COMPARISONS',
    'COMPRESS',
    'CONCAT',
    'CONCURRENT',
    'CONDITION',
    'CONNECT',
    'CONNECT_BY_ROOT',
    'CONNECTION',
    'CONSTANT',
    'CONSTRAINT',
    'CONTAINS',
    'CONTENT',
    'CONTINUE',
    'COPY',
    'COUNT',
    'COUNT_BIG',
    'CREATE',
    'CREATEIN',
    'CROSS',
    'CUBE',
    'CUME_DIST',
    'CURRENT',
    'CURRENT_DATE',
    'CURRENT_PATH',
    'CURRENT_SCHEMA',
    'CURRENT_SERVER',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'CURRENT_TIMEZONE',
    'CURRENT_USER',
    'CURSOR',
    'CYCLE',
    'DATABASE',
    'DATAPARTITIONNAME',
    'DATAPARTITIONNUM',
    'DAY',
    'DAYS',
    'DB2GENERAL',
    'DB2GENRL',
    'DB2SQL',
    'DBINFO',
    'DBPARTITIONNAME',
    'DBPARTITIONNUM',
    'DEACTIVATE',
    'DEALLOCATE',
    'DECLARE',
    'DEFAULT',
    'DEFAULTS',
    'DEFER',
    'DEFINE',
    'DEFINITION',
    'DELETE',
    'DELETING',
    'DENSE_RANK',
    'DENSERANK',
    'DESC',
    'DESCRIBE',
    'DESCRIPTOR',
    'DETACH',
    'DETERMINISTIC',
    'DIAGNOSTICS',
    'DISABLE',
    'DISALLOW',
    'DISCONNECT',
    'DISTINCT',
    'DO',
    'DOCUMENT',
    'DROP',
    'DYNAMIC',
    'EACH',
    'ELSE',
    'ELSEIF',
    'EMPTY',
    'ENABLE',
    'ENCODING',
    'ENCRYPTION',
    'END',
    'END-EXEC',
    'ENDING',
    'ENFORCED',
    'ERROR',
    'ESCAPE',
    'EVERY',
    'EXCEPT',
    'EXCEPTION',
    'EXCLUDING',
    'EXCLUSIVE',
    'EXECUTE',
    'EXISTS',
    'EXIT',
    'EXTEND',
    'EXTERNAL',
    'EXTRACT',
    'FALSE',
    'FENCED',
    'FETCH',
    'FIELDPROC',
    'FILE',
    'FINAL',
    'FIRST_VALUE',
    'FOR',
    'FOREIGN',
    'FORMAT',
    'FREE',
    'FREEPAGE',
    'FROM',
    'FULL',
    'FUNCTION',
    'GBPCACHE',
    'GENERAL',
    'GENERATED',
    'GET',
    'GLOBAL',
    'GO',
    'GOTO',
    'GRANT',
    'GROUP',
    'HANDLER',
    'HASH',
    'HASH_ROW',
    'HASHED_VALUE',
    'HAVING',
    'HINT',
    'HOLD',
    'HOUR',
    'HOURS',
    // 'ID', Not actually a reserved keyword
    'IDENTITY',
    'IF',
    'IGNORE',
    'IMMEDIATE',
    'IMPLICITLY',
    'IN',
    'INCLUDE',
    'INCLUDING',
    'INCLUSIVE',
    'INCREMENT',
    'INDEX',
    'INDEXBP',
    'INDICATOR',
    'INF',
    'INFINITY',
    'INHERIT',
    'INLINE',
    'INNER',
    'INOUT',
    'INSENSITIVE',
    'INSERT',
    'INSERTING',
    'INTEGRITY',
    'INTERPRET',
    'INTERSECT',
    'INTO',
    'IS',
    'ISNULL',
    'ISOLATION',
    'ITERATE',
    'JAVA',
    'JOIN',
    'JSON',
    'JSON_ARRAY',
    'JSON_ARRAYAGG',
    'JSON_EXISTS',
    'JSON_OBJECT',
    'JSON_OBJECTAGG',
    'JSON_QUERY',
    'JSON_TABLE',
    'JSON_VALUE',
    'KEEP',
    'KEY',
    'KEYS',
    'LABEL',
    'LAG',
    'LANGUAGE',
    'LAST_VALUE',
    'LATERAL',
    'LEAD',
    'LEAVE',
    'LEFT',
    'LEVEL2',
    'LIKE',
    'LIMIT',
    'LINKTYPE',
    'LISTAGG',
    'LOCAL',
    'LOCALDATE',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LOCATION',
    'LOCATOR',
    'LOCK',
    'LOCKSIZE',
    'LOG',
    'LOGGED',
    'LOOP',
    'MAINTAINED',
    'MASK',
    'MATCHED',
    'MATERIALIZED',
    'MAXVALUE',
    'MERGE',
    'MICROSECOND',
    'MICROSECONDS',
    'MINPCTUSED',
    'MINUTE',
    'MINUTES',
    'MINVALUE',
    'MIRROR',
    'MIXED',
    'MODE',
    'MODIFIES',
    'MONTH',
    'MONTHS',
    'NAMESPACE',
    'NAN',
    'NATIONAL',
    'NCHAR',
    'NCLOB',
    'NESTED',
    'NEW',
    'NEW_TABLE',
    'NEXTVAL',
    'NO',
    'NOCACHE',
    'NOCYCLE',
    'NODENAME',
    'NODENUMBER',
    'NOMAXVALUE',
    'NOMINVALUE',
    'NONE',
    'NOORDER',
    'NORMALIZED',
    'NOT',
    'NOTNULL',
    'NTH_VALUE',
    'NTILE',
    'NULL',
    'NULLS',
    'NVARCHAR',
    'OBID',
    'OBJECT',
    'OF',
    'OFF',
    'OFFSET',
    'OLD',
    'OLD_TABLE',
    'OMIT',
    'ON',
    'ONLY',
    'OPEN',
    'OPTIMIZE',
    'OPTION',
    'OR',
    'ORDER',
    'ORDINALITY',
    'ORGANIZE',
    'OUT',
    'OUTER',
    'OVER',
    'OVERLAY',
    'OVERRIDING',
    'PACKAGE',
    'PADDED',
    'PAGE',
    'PAGESIZE',
    'PARAMETER',
    'PART',
    'PARTITION',
    'PARTITIONED',
    'PARTITIONING',
    'PARTITIONS',
    'PASSING',
    'PASSWORD',
    'PATH',
    'PCTFREE',
    'PERCENT_RANK',
    'PERCENTILE_CONT',
    'PERCENTILE_DISC',
    'PERIOD',
    'PERMISSION',
    'PIECESIZE',
    'PIPE',
    'PLAN',
    'POSITION',
    'PREPARE',
    'PREVVAL',
    'PRIMARY',
    'PRIOR',
    'PRIQTY',
    'PRIVILEGES',
    'PROCEDURE',
    'PROGRAM',
    'PROGRAMID',
    'QUERY',
    'RANGE',
    'RANK',
    'RATIO_TO_REPORT',
    'RCDFMT',
    'READ',
    'READS',
    'RECOVERY',
    'REFERENCES',
    'REFERENCING',
    'REFRESH',
    'REGEXP_LIKE',
    'RELEASE',
    'RENAME',
    'REPEAT',
    'RESET',
    'RESIGNAL',
    'RESTART',
    'RESULT',
    'RESULT_SET_LOCATOR',
    'RETURN',
    'RETURNING',
    'RETURNS',
    'REVOKE',
    'RID',
    'RIGHT',
    'ROLLBACK',
    'ROLLUP',
    'ROUTINE',
    'ROW',
    'ROW_NUMBER',
    'ROWNUMBER',
    'ROWS',
    'RRN',
    'RUN',
    'SAVEPOINT',
    'SBCS',
    'SCALAR',
    'SCHEMA',
    'SCRATCHPAD',
    'SCROLL',
    'SEARCH',
    'SECOND',
    'SECONDS',
    'SECQTY',
    'SECURED',
    'SELECT',
    'SENSITIVE',
    'SEQUENCE',
    'SESSION',
    'SESSION_USER',
    'SET',
    'SIGNAL',
    'SIMPLE',
    'SKIP',
    'SNAN',
    'SOME',
    'SOURCE',
    'SPECIFIC',
    'SQL',
    'SQLID',
    'SQLIND_DEFAULT',
    'SQLIND_UNASSIGNED',
    'STACKED',
    'START',
    'STARTING',
    'STATEMENT',
    'STATIC',
    'STOGROUP',
    'SUBSTRING',
    'SUMMARY',
    'SYNONYM',
    'SYSTEM_TIME',
    'SYSTEM_USER',
    'TABLE',
    'TABLESPACE',
    'TABLESPACES',
    'TAG',
    'THEN',
    'THREADSAFE',
    'TO',
    'TRANSACTION',
    'TRANSFER',
    'TRIGGER',
    'TRIM',
    'TRIM_ARRAY',
    'TRUE',
    'TRUNCATE',
    'TRY_CAST',
    'TYPE',
    'UNDO',
    'UNION',
    'UNIQUE',
    'UNIT',
    'UNKNOWN',
    'UNNEST',
    'UNTIL',
    'UPDATE',
    'UPDATING',
    'URI',
    'USAGE',
    'USE',
    'USER',
    'USERID',
    'USING',
    'VALUE',
    'VALUES',
    'VARIABLE',
    'VARIANT',
    'VCAT',
    'VERSION',
    'VERSIONING',
    'VIEW',
    'VOLATILE',
    'WAIT',
    'WHEN',
    'WHENEVER',
    'WHERE',
    'WHILE',
    'WITH',
    'WITHIN',
    'WITHOUT',
    'WRAPPED',
    'WRAPPER',
    'WRITE',
    'WRKSTNNAME',
    'XMLAGG',
    'XMLATTRIBUTES',
    'XMLCAST',
    'XMLCOMMENT',
    'XMLCONCAT',
    'XMLDOCUMENT',
    'XMLELEMENT',
    'XMLFOREST',
    'XMLGROUP',
    'XMLNAMESPACES',
    'XMLPARSE',
    'XMLPI',
    'XMLROW',
    'XMLSERIALIZE',
    'XMLTABLE',
    'XMLTEXT',
    'XMLVALIDATE',
    'XSLTRANSFORM',
    'XSROBJECT',
    'YEAR',
    'YEARS',
    'YES',
    'ZONE',
];
exports.dataTypes = [
    // https://www.ibm.com/docs/en/i/7.2?topic=iaodsd-odbc-data-types-how-they-correspond-db2-i-database-types
    'ARRAY',
    'BIGINT',
    'BINARY',
    'BIT',
    'BLOB',
    'BOOLEAN',
    'CCSID',
    'CHAR',
    'CHARACTER',
    'CLOB',
    'DATA',
    'DATALINK',
    'DATE',
    'DBCLOB',
    'DECFLOAT',
    'DECIMAL',
    'DEC',
    'DOUBLE',
    'DOUBLE PRECISION',
    'FLOAT',
    'GRAPHIC',
    'INT',
    'INTEGER',
    'LONG',
    'NUMERIC',
    'REAL',
    'ROWID',
    'SMALLINT',
    'TIME',
    'TIMESTAMP',
    'VARBINARY',
    'VARCHAR',
    'VARGRAPHIC',
    'XML',
];
//# sourceMappingURL=db2i.keywords.js.map