"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = void 0;
exports.functions = [
    // https://www.postgresql.org/docs/14/functions.html
    //
    // https://www.postgresql.org/docs/14/functions-math.html
    'ABS',
    'ACOS',
    'ACOSD',
    'ACOSH',
    'ASIN',
    'ASIND',
    'ASINH',
    'ATAN',
    'ATAN2',
    'ATAN2D',
    'ATAND',
    'ATANH',
    'CBRT',
    'CEIL',
    'CEILING',
    'COS',
    'COSD',
    'COSH',
    'COT',
    'COTD',
    'DEGREES',
    'DIV',
    'EXP',
    'FACTORIAL',
    'FLOOR',
    'GCD',
    'LCM',
    'LN',
    'LOG',
    'LOG10',
    'MIN_SCALE',
    'MOD',
    'PI',
    'POWER',
    'RADIANS',
    'RANDOM',
    'ROUND',
    'SCALE',
    'SETSEED',
    'SIGN',
    'SIN',
    'SIND',
    'SINH',
    'SQRT',
    'TAN',
    'TAND',
    'TANH',
    'TRIM_SCALE',
    'TRUNC',
    'WIDTH_BUCKET',
    // https://www.postgresql.org/docs/14/functions-string.html
    'ABS',
    'ASCII',
    'BIT_LENGTH',
    'BTRIM',
    'CHARACTER_LENGTH',
    'CHAR_LENGTH',
    'CHR',
    'CONCAT',
    'CONCAT_WS',
    'FORMAT',
    'INITCAP',
    'LEFT',
    'LENGTH',
    'LOWER',
    'LPAD',
    'LTRIM',
    'MD5',
    'NORMALIZE',
    'OCTET_LENGTH',
    'OVERLAY',
    'PARSE_IDENT',
    'PG_CLIENT_ENCODING',
    'POSITION',
    'QUOTE_IDENT',
    'QUOTE_LITERAL',
    'QUOTE_NULLABLE',
    'REGEXP_MATCH',
    'REGEXP_MATCHES',
    'REGEXP_REPLACE',
    'REGEXP_SPLIT_TO_ARRAY',
    'REGEXP_SPLIT_TO_TABLE',
    'REPEAT',
    'REPLACE',
    'REVERSE',
    'RIGHT',
    'RPAD',
    'RTRIM',
    'SPLIT_PART',
    'SPRINTF',
    'STARTS_WITH',
    'STRING_AGG',
    'STRING_TO_ARRAY',
    'STRING_TO_TABLE',
    'STRPOS',
    'SUBSTR',
    'SUBSTRING',
    'TO_ASCII',
    'TO_HEX',
    'TRANSLATE',
    'TRIM',
    'UNISTR',
    'UPPER',
    // https://www.postgresql.org/docs/14/functions-binarystring.html
    'BIT_COUNT',
    'BIT_LENGTH',
    'BTRIM',
    'CONVERT',
    'CONVERT_FROM',
    'CONVERT_TO',
    'DECODE',
    'ENCODE',
    'GET_BIT',
    'GET_BYTE',
    'LENGTH',
    'LTRIM',
    'MD5',
    'OCTET_LENGTH',
    'OVERLAY',
    'POSITION',
    'RTRIM',
    'SET_BIT',
    'SET_BYTE',
    'SHA224',
    'SHA256',
    'SHA384',
    'SHA512',
    'STRING_AGG',
    'SUBSTR',
    'SUBSTRING',
    'TRIM',
    // https://www.postgresql.org/docs/14/functions-bitstring.html
    'BIT_COUNT',
    'BIT_LENGTH',
    'GET_BIT',
    'LENGTH',
    'OCTET_LENGTH',
    'OVERLAY',
    'POSITION',
    'SET_BIT',
    'SUBSTRING',
    // https://www.postgresql.org/docs/14/functions-matching.html
    'REGEXP_MATCH',
    'REGEXP_MATCHES',
    'REGEXP_REPLACE',
    'REGEXP_SPLIT_TO_ARRAY',
    'REGEXP_SPLIT_TO_TABLE',
    // https://www.postgresql.org/docs/14/functions-formatting.html
    'TO_CHAR',
    'TO_DATE',
    'TO_NUMBER',
    'TO_TIMESTAMP',
    // https://www.postgresql.org/docs/14/functions-datetime.html
    // 'AGE',
    'CLOCK_TIMESTAMP',
    'CURRENT_DATE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'DATE_BIN',
    'DATE_PART',
    'DATE_TRUNC',
    'EXTRACT',
    'ISFINITE',
    'JUSTIFY_DAYS',
    'JUSTIFY_HOURS',
    'JUSTIFY_INTERVAL',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'MAKE_DATE',
    'MAKE_INTERVAL',
    'MAKE_TIME',
    'MAKE_TIMESTAMP',
    'MAKE_TIMESTAMPTZ',
    'NOW',
    'PG_SLEEP',
    'PG_SLEEP_FOR',
    'PG_SLEEP_UNTIL',
    'STATEMENT_TIMESTAMP',
    'TIMEOFDAY',
    'TO_TIMESTAMP',
    'TRANSACTION_TIMESTAMP',
    // https://www.postgresql.org/docs/14/functions-enum.html
    'ENUM_FIRST',
    'ENUM_LAST',
    'ENUM_RANGE',
    // https://www.postgresql.org/docs/14/functions-geometry.html
    'AREA',
    'BOUND_BOX',
    'BOX',
    'CENTER',
    'CIRCLE',
    'DIAGONAL',
    'DIAMETER',
    'HEIGHT',
    'ISCLOSED',
    'ISOPEN',
    'LENGTH',
    'LINE',
    'LSEG',
    'NPOINTS',
    'PATH',
    'PCLOSE',
    'POINT',
    'POLYGON',
    'POPEN',
    'RADIUS',
    'SLOPE',
    'WIDTH',
    // https://www.postgresql.org/docs/14/functions-net.html
    'ABBREV',
    'BROADCAST',
    'FAMILY',
    'HOST',
    'HOSTMASK',
    'INET_MERGE',
    'INET_SAME_FAMILY',
    'MACADDR8_SET7BIT',
    'MASKLEN',
    'NETMASK',
    'NETWORK',
    'SET_MASKLEN',
    'TEXT',
    'TRUNC',
    // https://www.postgresql.org/docs/14/functions-textsearch.html
    'ARRAY_TO_TSVECTOR',
    'GET_CURRENT_TS_CONFIG',
    'JSONB_TO_TSVECTOR',
    'JSON_TO_TSVECTOR',
    'LENGTH',
    'NUMNODE',
    'PHRASETO_TSQUERY',
    'PLAINTO_TSQUERY',
    'QUERYTREE',
    'SETWEIGHT',
    'STRIP',
    'TO_TSQUERY',
    'TO_TSVECTOR',
    'TSQUERY_PHRASE',
    'TSVECTOR_TO_ARRAY',
    'TS_DEBUG',
    'TS_DELETE',
    'TS_FILTER',
    'TS_HEADLINE',
    'TS_LEXIZE',
    'TS_PARSE',
    'TS_RANK',
    'TS_RANK_CD',
    'TS_REWRITE',
    'TS_STAT',
    'TS_TOKEN_TYPE',
    'WEBSEARCH_TO_TSQUERY',
    // https://www.postgresql.org/docs/14/functions-uuid.html
    'UUID',
    // https://www.postgresql.org/docs/14/functions-xml.html
    'CURSOR_TO_XML',
    'CURSOR_TO_XMLSCHEMA',
    'DATABASE_TO_XML',
    'DATABASE_TO_XMLSCHEMA',
    'DATABASE_TO_XML_AND_XMLSCHEMA',
    'NEXTVAL',
    'QUERY_TO_XML',
    'QUERY_TO_XMLSCHEMA',
    'QUERY_TO_XML_AND_XMLSCHEMA',
    'SCHEMA_TO_XML',
    'SCHEMA_TO_XMLSCHEMA',
    'SCHEMA_TO_XML_AND_XMLSCHEMA',
    'STRING',
    'TABLE_TO_XML',
    'TABLE_TO_XMLSCHEMA',
    'TABLE_TO_XML_AND_XMLSCHEMA',
    'XMLAGG',
    'XMLCOMMENT',
    'XMLCONCAT',
    'XMLELEMENT',
    'XMLEXISTS',
    'XMLFOREST',
    'XMLPARSE',
    'XMLPI',
    'XMLROOT',
    'XMLSERIALIZE',
    'XMLTABLE',
    'XML_IS_WELL_FORMED',
    'XML_IS_WELL_FORMED_CONTENT',
    'XML_IS_WELL_FORMED_DOCUMENT',
    'XPATH',
    'XPATH_EXISTS',
    // https://www.postgresql.org/docs/14/functions-json.html
    'ARRAY_TO_JSON',
    'JSONB_AGG',
    'JSONB_ARRAY_ELEMENTS',
    'JSONB_ARRAY_ELEMENTS_TEXT',
    'JSONB_ARRAY_LENGTH',
    'JSONB_BUILD_ARRAY',
    'JSONB_BUILD_OBJECT',
    'JSONB_EACH',
    'JSONB_EACH_TEXT',
    'JSONB_EXTRACT_PATH',
    'JSONB_EXTRACT_PATH_TEXT',
    'JSONB_INSERT',
    'JSONB_OBJECT',
    'JSONB_OBJECT_AGG',
    'JSONB_OBJECT_KEYS',
    'JSONB_PATH_EXISTS',
    'JSONB_PATH_EXISTS_TZ',
    'JSONB_PATH_MATCH',
    'JSONB_PATH_MATCH_TZ',
    'JSONB_PATH_QUERY',
    'JSONB_PATH_QUERY_ARRAY',
    'JSONB_PATH_QUERY_ARRAY_TZ',
    'JSONB_PATH_QUERY_FIRST',
    'JSONB_PATH_QUERY_FIRST_TZ',
    'JSONB_PATH_QUERY_TZ',
    'JSONB_POPULATE_RECORD',
    'JSONB_POPULATE_RECORDSET',
    'JSONB_PRETTY',
    'JSONB_SET',
    'JSONB_SET_LAX',
    'JSONB_STRIP_NULLS',
    'JSONB_TO_RECORD',
    'JSONB_TO_RECORDSET',
    'JSONB_TYPEOF',
    'JSON_AGG',
    'JSON_ARRAY_ELEMENTS',
    'JSON_ARRAY_ELEMENTS_TEXT',
    'JSON_ARRAY_LENGTH',
    'JSON_BUILD_ARRAY',
    'JSON_BUILD_OBJECT',
    'JSON_EACH',
    'JSON_EACH_TEXT',
    'JSON_EXTRACT_PATH',
    'JSON_EXTRACT_PATH_TEXT',
    'JSON_OBJECT',
    'JSON_OBJECT_AGG',
    'JSON_OBJECT_KEYS',
    'JSON_POPULATE_RECORD',
    'JSON_POPULATE_RECORDSET',
    'JSON_STRIP_NULLS',
    'JSON_TO_RECORD',
    'JSON_TO_RECORDSET',
    'JSON_TYPEOF',
    'ROW_TO_JSON',
    'TO_JSON',
    'TO_JSONB',
    'TO_TIMESTAMP',
    // https://www.postgresql.org/docs/14/functions-sequence.html
    'CURRVAL',
    'LASTVAL',
    'NEXTVAL',
    'SETVAL',
    // https://www.postgresql.org/docs/14/functions-conditional.html
    // 'CASE',
    'COALESCE',
    'GREATEST',
    'LEAST',
    'NULLIF',
    // https://www.postgresql.org/docs/14/functions-array.html
    'ARRAY_AGG',
    'ARRAY_APPEND',
    'ARRAY_CAT',
    'ARRAY_DIMS',
    'ARRAY_FILL',
    'ARRAY_LENGTH',
    'ARRAY_LOWER',
    'ARRAY_NDIMS',
    'ARRAY_POSITION',
    'ARRAY_POSITIONS',
    'ARRAY_PREPEND',
    'ARRAY_REMOVE',
    'ARRAY_REPLACE',
    'ARRAY_TO_STRING',
    'ARRAY_UPPER',
    'CARDINALITY',
    'STRING_TO_ARRAY',
    'TRIM_ARRAY',
    'UNNEST',
    // https://www.postgresql.org/docs/14/functions-range.html
    'ISEMPTY',
    'LOWER',
    'LOWER_INC',
    'LOWER_INF',
    'MULTIRANGE',
    'RANGE_MERGE',
    'UPPER',
    'UPPER_INC',
    'UPPER_INF',
    // https://www.postgresql.org/docs/14/functions-aggregate.html
    // 'ANY',
    'ARRAY_AGG',
    'AVG',
    'BIT_AND',
    'BIT_OR',
    'BIT_XOR',
    'BOOL_AND',
    'BOOL_OR',
    'COALESCE',
    'CORR',
    'COUNT',
    'COVAR_POP',
    'COVAR_SAMP',
    'CUME_DIST',
    'DENSE_RANK',
    'EVERY',
    'GROUPING',
    'JSONB_AGG',
    'JSONB_OBJECT_AGG',
    'JSON_AGG',
    'JSON_OBJECT_AGG',
    'MAX',
    'MIN',
    'MODE',
    'PERCENTILE_CONT',
    'PERCENTILE_DISC',
    'PERCENT_RANK',
    'RANGE_AGG',
    'RANGE_INTERSECT_AGG',
    'RANK',
    'REGR_AVGX',
    'REGR_AVGY',
    'REGR_COUNT',
    'REGR_INTERCEPT',
    'REGR_R2',
    'REGR_SLOPE',
    'REGR_SXX',
    'REGR_SXY',
    'REGR_SYY',
    // 'SOME',
    'STDDEV',
    'STDDEV_POP',
    'STDDEV_SAMP',
    'STRING_AGG',
    'SUM',
    'TO_JSON',
    'TO_JSONB',
    'VARIANCE',
    'VAR_POP',
    'VAR_SAMP',
    'XMLAGG',
    // https://www.postgresql.org/docs/14/functions-window.html
    'CUME_DIST',
    'DENSE_RANK',
    'FIRST_VALUE',
    'LAG',
    'LAST_VALUE',
    'LEAD',
    'NTH_VALUE',
    'NTILE',
    'PERCENT_RANK',
    'RANK',
    'ROW_NUMBER',
    // https://www.postgresql.org/docs/14/functions-srf.html
    'GENERATE_SERIES',
    'GENERATE_SUBSCRIPTS',
    // https://www.postgresql.org/docs/14/functions-info.html
    'ACLDEFAULT',
    'ACLEXPLODE',
    'COL_DESCRIPTION',
    'CURRENT_CATALOG',
    'CURRENT_DATABASE',
    'CURRENT_QUERY',
    'CURRENT_ROLE',
    'CURRENT_SCHEMA',
    'CURRENT_SCHEMAS',
    'CURRENT_USER',
    'FORMAT_TYPE',
    'HAS_ANY_COLUMN_PRIVILEGE',
    'HAS_COLUMN_PRIVILEGE',
    'HAS_DATABASE_PRIVILEGE',
    'HAS_FOREIGN_DATA_WRAPPER_PRIVILEGE',
    'HAS_FUNCTION_PRIVILEGE',
    'HAS_LANGUAGE_PRIVILEGE',
    'HAS_SCHEMA_PRIVILEGE',
    'HAS_SEQUENCE_PRIVILEGE',
    'HAS_SERVER_PRIVILEGE',
    'HAS_TABLESPACE_PRIVILEGE',
    'HAS_TABLE_PRIVILEGE',
    'HAS_TYPE_PRIVILEGE',
    'INET_CLIENT_ADDR',
    'INET_CLIENT_PORT',
    'INET_SERVER_ADDR',
    'INET_SERVER_PORT',
    'MAKEACLITEM',
    'OBJ_DESCRIPTION',
    'PG_BACKEND_PID',
    'PG_BLOCKING_PIDS',
    'PG_COLLATION_IS_VISIBLE',
    'PG_CONF_LOAD_TIME',
    'PG_CONTROL_CHECKPOINT',
    'PG_CONTROL_INIT',
    'PG_CONTROL_SYSTEM',
    'PG_CONVERSION_IS_VISIBLE',
    'PG_CURRENT_LOGFILE',
    'PG_CURRENT_SNAPSHOT',
    'PG_CURRENT_XACT_ID',
    'PG_CURRENT_XACT_ID_IF_ASSIGNED',
    'PG_DESCRIBE_OBJECT',
    'PG_FUNCTION_IS_VISIBLE',
    'PG_GET_CATALOG_FOREIGN_KEYS',
    'PG_GET_CONSTRAINTDEF',
    'PG_GET_EXPR',
    'PG_GET_FUNCTIONDEF',
    'PG_GET_FUNCTION_ARGUMENTS',
    'PG_GET_FUNCTION_IDENTITY_ARGUMENTS',
    'PG_GET_FUNCTION_RESULT',
    'PG_GET_INDEXDEF',
    'PG_GET_KEYWORDS',
    'PG_GET_OBJECT_ADDRESS',
    'PG_GET_OWNED_SEQUENCE',
    'PG_GET_RULEDEF',
    'PG_GET_SERIAL_SEQUENCE',
    'PG_GET_STATISTICSOBJDEF',
    'PG_GET_TRIGGERDEF',
    'PG_GET_USERBYID',
    'PG_GET_VIEWDEF',
    'PG_HAS_ROLE',
    'PG_IDENTIFY_OBJECT',
    'PG_IDENTIFY_OBJECT_AS_ADDRESS',
    'PG_INDEXAM_HAS_PROPERTY',
    'PG_INDEX_COLUMN_HAS_PROPERTY',
    'PG_INDEX_HAS_PROPERTY',
    'PG_IS_OTHER_TEMP_SCHEMA',
    'PG_JIT_AVAILABLE',
    'PG_LAST_COMMITTED_XACT',
    'PG_LISTENING_CHANNELS',
    'PG_MY_TEMP_SCHEMA',
    'PG_NOTIFICATION_QUEUE_USAGE',
    'PG_OPCLASS_IS_VISIBLE',
    'PG_OPERATOR_IS_VISIBLE',
    'PG_OPFAMILY_IS_VISIBLE',
    'PG_OPTIONS_TO_TABLE',
    'PG_POSTMASTER_START_TIME',
    'PG_SAFE_SNAPSHOT_BLOCKING_PIDS',
    'PG_SNAPSHOT_XIP',
    'PG_SNAPSHOT_XMAX',
    'PG_SNAPSHOT_XMIN',
    'PG_STATISTICS_OBJ_IS_VISIBLE',
    'PG_TABLESPACE_DATABASES',
    'PG_TABLESPACE_LOCATION',
    'PG_TABLE_IS_VISIBLE',
    'PG_TRIGGER_DEPTH',
    'PG_TS_CONFIG_IS_VISIBLE',
    'PG_TS_DICT_IS_VISIBLE',
    'PG_TS_PARSER_IS_VISIBLE',
    'PG_TS_TEMPLATE_IS_VISIBLE',
    'PG_TYPEOF',
    'PG_TYPE_IS_VISIBLE',
    'PG_VISIBLE_IN_SNAPSHOT',
    'PG_XACT_COMMIT_TIMESTAMP',
    'PG_XACT_COMMIT_TIMESTAMP_ORIGIN',
    'PG_XACT_STATUS',
    'PQSERVERVERSION',
    'ROW_SECURITY_ACTIVE',
    'SESSION_USER',
    'SHOBJ_DESCRIPTION',
    'TO_REGCLASS',
    'TO_REGCOLLATION',
    'TO_REGNAMESPACE',
    'TO_REGOPER',
    'TO_REGOPERATOR',
    'TO_REGPROC',
    'TO_REGPROCEDURE',
    'TO_REGROLE',
    'TO_REGTYPE',
    'TXID_CURRENT',
    'TXID_CURRENT_IF_ASSIGNED',
    'TXID_CURRENT_SNAPSHOT',
    'TXID_SNAPSHOT_XIP',
    'TXID_SNAPSHOT_XMAX',
    'TXID_SNAPSHOT_XMIN',
    'TXID_STATUS',
    'TXID_VISIBLE_IN_SNAPSHOT',
    'USER',
    'VERSION',
    // https://www.postgresql.org/docs/14/functions-admin.html
    'BRIN_DESUMMARIZE_RANGE',
    'BRIN_SUMMARIZE_NEW_VALUES',
    'BRIN_SUMMARIZE_RANGE',
    'CONVERT_FROM',
    'CURRENT_SETTING',
    'GIN_CLEAN_PENDING_LIST',
    'PG_ADVISORY_LOCK',
    'PG_ADVISORY_LOCK_SHARED',
    'PG_ADVISORY_UNLOCK',
    'PG_ADVISORY_UNLOCK_ALL',
    'PG_ADVISORY_UNLOCK_SHARED',
    'PG_ADVISORY_XACT_LOCK',
    'PG_ADVISORY_XACT_LOCK_SHARED',
    'PG_BACKUP_START_TIME',
    'PG_CANCEL_BACKEND',
    'PG_COLLATION_ACTUAL_VERSION',
    'PG_COLUMN_COMPRESSION',
    'PG_COLUMN_SIZE',
    'PG_COPY_LOGICAL_REPLICATION_SLOT',
    'PG_COPY_PHYSICAL_REPLICATION_SLOT',
    'PG_CREATE_LOGICAL_REPLICATION_SLOT',
    'PG_CREATE_PHYSICAL_REPLICATION_SLOT',
    'PG_CREATE_RESTORE_POINT',
    'PG_CURRENT_WAL_FLUSH_LSN',
    'PG_CURRENT_WAL_INSERT_LSN',
    'PG_CURRENT_WAL_LSN',
    'PG_DATABASE_SIZE',
    'PG_DROP_REPLICATION_SLOT',
    'PG_EXPORT_SNAPSHOT',
    'PG_FILENODE_RELATION',
    'PG_GET_WAL_REPLAY_PAUSE_STATE',
    'PG_IMPORT_SYSTEM_COLLATIONS',
    'PG_INDEXES_SIZE',
    'PG_IS_IN_BACKUP',
    'PG_IS_IN_RECOVERY',
    'PG_IS_WAL_REPLAY_PAUSED',
    'PG_LAST_WAL_RECEIVE_LSN',
    'PG_LAST_WAL_REPLAY_LSN',
    'PG_LAST_XACT_REPLAY_TIMESTAMP',
    'PG_LOGICAL_EMIT_MESSAGE',
    'PG_LOGICAL_SLOT_GET_BINARY_CHANGES',
    'PG_LOGICAL_SLOT_GET_CHANGES',
    'PG_LOGICAL_SLOT_PEEK_BINARY_CHANGES',
    'PG_LOGICAL_SLOT_PEEK_CHANGES',
    'PG_LOG_BACKEND_MEMORY_CONTEXTS',
    'PG_LS_ARCHIVE_STATUSDIR',
    'PG_LS_DIR',
    'PG_LS_LOGDIR',
    'PG_LS_TMPDIR',
    'PG_LS_WALDIR',
    'PG_PARTITION_ANCESTORS',
    'PG_PARTITION_ROOT',
    'PG_PARTITION_TREE',
    'PG_PROMOTE',
    'PG_READ_BINARY_FILE',
    'PG_READ_FILE',
    'PG_RELATION_FILENODE',
    'PG_RELATION_FILEPATH',
    'PG_RELATION_SIZE',
    'PG_RELOAD_CONF',
    'PG_REPLICATION_ORIGIN_ADVANCE',
    'PG_REPLICATION_ORIGIN_CREATE',
    'PG_REPLICATION_ORIGIN_DROP',
    'PG_REPLICATION_ORIGIN_OID',
    'PG_REPLICATION_ORIGIN_PROGRESS',
    'PG_REPLICATION_ORIGIN_SESSION_IS_SETUP',
    'PG_REPLICATION_ORIGIN_SESSION_PROGRESS',
    'PG_REPLICATION_ORIGIN_SESSION_RESET',
    'PG_REPLICATION_ORIGIN_SESSION_SETUP',
    'PG_REPLICATION_ORIGIN_XACT_RESET',
    'PG_REPLICATION_ORIGIN_XACT_SETUP',
    'PG_REPLICATION_SLOT_ADVANCE',
    'PG_ROTATE_LOGFILE',
    'PG_SIZE_BYTES',
    'PG_SIZE_PRETTY',
    'PG_START_BACKUP',
    'PG_STAT_FILE',
    'PG_STOP_BACKUP',
    'PG_SWITCH_WAL',
    'PG_TABLESPACE_SIZE',
    'PG_TABLE_SIZE',
    'PG_TERMINATE_BACKEND',
    'PG_TOTAL_RELATION_SIZE',
    'PG_TRY_ADVISORY_LOCK',
    'PG_TRY_ADVISORY_LOCK_SHARED',
    'PG_TRY_ADVISORY_XACT_LOCK',
    'PG_TRY_ADVISORY_XACT_LOCK_SHARED',
    'PG_WALFILE_NAME',
    'PG_WALFILE_NAME_OFFSET',
    'PG_WAL_LSN_DIFF',
    'PG_WAL_REPLAY_PAUSE',
    'PG_WAL_REPLAY_RESUME',
    'SET_CONFIG',
    // https://www.postgresql.org/docs/14/functions-trigger.html
    'SUPPRESS_REDUNDANT_UPDATES_TRIGGER',
    'TSVECTOR_UPDATE_TRIGGER',
    'TSVECTOR_UPDATE_TRIGGER_COLUMN',
    // https://www.postgresql.org/docs/14/functions-event-triggers.html
    'PG_EVENT_TRIGGER_DDL_COMMANDS',
    'PG_EVENT_TRIGGER_DROPPED_OBJECTS',
    'PG_EVENT_TRIGGER_TABLE_REWRITE_OID',
    'PG_EVENT_TRIGGER_TABLE_REWRITE_REASON',
    'PG_GET_OBJECT_ADDRESS',
    // https://www.postgresql.org/docs/14/functions-statistics.html
    'PG_MCV_LIST_ITEMS',
    // cast
    'CAST',
];
//# sourceMappingURL=postgresql.functions.js.map