/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const functions: string[] = [
	// https://docs.microsoft.com/en-us/sql/t-sql/functions/functions?view=sql-server-ver15
	// aggregate
	'APPROX_COUNT_DISTINCT',
	'AVG',
	'CHECKSUM_AGG',
	'COUNT',
	'COUNT_BIG',
	'GROUPING',
	'GROUPING_ID',
	'MAX',
	'MIN',
	'STDEV',
	'STDEVP',
	'SUM',
	'VAR',
	'VARP',

	// analytic
	'CUME_DIST',
	'FIRST_VALUE',
	'LAG',
	'LAST_VALUE',
	'LEAD',
	'PERCENTILE_CONT',
	'PERCENTILE_DISC',
	'PERCENT_RANK',
	'Collation - COLLATIONPROPERTY',
	'Collation - TERTIARY_WEIGHTS',

	// configuration
	'@@DBTS',
	'@@LANGID',
	'@@LANGUAGE',
	'@@LOCK_TIMEOUT',
	'@@MAX_CONNECTIONS',
	'@@MAX_PRECISION',
	'@@NESTLEVEL',
	'@@OPTIONS',
	'@@REMSERVER',
	'@@SERVERNAME',
	'@@SERVICENAME',
	'@@SPID',
	'@@TEXTSIZE',
	'@@VERSION',

	// conversion
	'CAST',
	'CONVERT',
	'PARSE',
	'TRY_CAST',
	'TRY_CONVERT',
	'TRY_PARSE',

	// cryptographic
	'ASYMKEY_ID',
	'ASYMKEYPROPERTY',
	'CERTPROPERTY',
	'CERT_ID',
	'CRYPT_GEN_RANDOM',
	'DECRYPTBYASYMKEY',
	'DECRYPTBYCERT',
	'DECRYPTBYKEY',
	'DECRYPTBYKEYAUTOASYMKEY',
	'DECRYPTBYKEYAUTOCERT',
	'DECRYPTBYPASSPHRASE',
	'ENCRYPTBYASYMKEY',
	'ENCRYPTBYCERT',
	'ENCRYPTBYKEY',
	'ENCRYPTBYPASSPHRASE',
	'HASHBYTES',
	'IS_OBJECTSIGNED',
	'KEY_GUID',
	'KEY_ID',
	'KEY_NAME',
	'SIGNBYASYMKEY',
	'SIGNBYCERT',
	'SYMKEYPROPERTY',
	'VERIFYSIGNEDBYCERT',
	'VERIFYSIGNEDBYASYMKEY',

	// cursor
	'@@CURSOR_ROWS',
	'@@FETCH_STATUS',
	'CURSOR_STATUS',

	// dataType
	'DATALENGTH',
	'IDENT_CURRENT',
	'IDENT_INCR',
	'IDENT_SEED',
	'IDENTITY',
	'SQL_VARIANT_PROPERTY',

	// datetime
	'@@DATEFIRST',
	'CURRENT_TIMESTAMP',
	'CURRENT_TIMEZONE',
	'CURRENT_TIMEZONE_ID',
	'DATEADD',
	'DATEDIFF',
	'DATEDIFF_BIG',
	'DATEFROMPARTS',
	'DATENAME',
	'DATEPART',
	'DATETIME2FROMPARTS',
	'DATETIMEFROMPARTS',
	'DATETIMEOFFSETFROMPARTS',
	'DAY',
	'EOMONTH',
	'GETDATE',
	'GETUTCDATE',
	'ISDATE',
	'MONTH',
	'SMALLDATETIMEFROMPARTS',
	'SWITCHOFFSET',
	'SYSDATETIME',
	'SYSDATETIMEOFFSET',
	'SYSUTCDATETIME',
	'TIMEFROMPARTS',
	'TODATETIMEOFFSET',
	'YEAR',
	'JSON',
	'ISJSON',
	'JSON_VALUE',
	'JSON_QUERY',
	'JSON_MODIFY',

	// mathematical
	'ABS',
	'ACOS',
	'ASIN',
	'ATAN',
	'ATN2',
	'CEILING',
	'COS',
	'COT',
	'DEGREES',
	'EXP',
	'FLOOR',
	'LOG',
	'LOG10',
	'PI',
	'POWER',
	'RADIANS',
	'RAND',
	'ROUND',
	'SIGN',
	'SIN',
	'SQRT',
	'SQUARE',
	'TAN',
	'CHOOSE',
	'GREATEST',
	'IIF',
	'LEAST',

	// metadata
	'@@PROCID',
	'APP_NAME',
	'APPLOCK_MODE',
	'APPLOCK_TEST',
	'ASSEMBLYPROPERTY',
	'COL_LENGTH',
	'COL_NAME',
	'COLUMNPROPERTY',
	'DATABASEPROPERTYEX',
	'DB_ID',
	'DB_NAME',
	'FILE_ID',
	'FILE_IDEX',
	'FILE_NAME',
	'FILEGROUP_ID',
	'FILEGROUP_NAME',
	'FILEGROUPPROPERTY',
	'FILEPROPERTY',
	'FILEPROPERTYEX',
	'FULLTEXTCATALOGPROPERTY',
	'FULLTEXTSERVICEPROPERTY',
	'INDEX_COL',
	'INDEXKEY_PROPERTY',
	'INDEXPROPERTY',
	'NEXT VALUE FOR',
	'OBJECT_DEFINITION',
	'OBJECT_ID',
	'OBJECT_NAME',
	'OBJECT_SCHEMA_NAME',
	'OBJECTPROPERTY',
	'OBJECTPROPERTYEX',
	'ORIGINAL_DB_NAME',
	'PARSENAME',
	'SCHEMA_ID',
	'SCHEMA_NAME',
	'SCOPE_IDENTITY',
	'SERVERPROPERTY',
	'STATS_DATE',
	'TYPE_ID',
	'TYPE_NAME',
	'TYPEPROPERTY',

	// ranking
	'DENSE_RANK',
	'NTILE',
	'RANK',
	'ROW_NUMBER',
	'PUBLISHINGSERVERNAME',

	// security
	'CERTENCODED',
	'CERTPRIVATEKEY',
	'CURRENT_USER',
	'DATABASE_PRINCIPAL_ID',
	'HAS_DBACCESS',
	'HAS_PERMS_BY_NAME',
	'IS_MEMBER',
	'IS_ROLEMEMBER',
	'IS_SRVROLEMEMBER',
	'LOGINPROPERTY',
	'ORIGINAL_LOGIN',
	'PERMISSIONS',
	'PWDENCRYPT',
	'PWDCOMPARE',
	'SESSION_USER',
	'SESSIONPROPERTY',
	'SUSER_ID',
	'SUSER_NAME',
	'SUSER_SID',
	'SUSER_SNAME',
	'SYSTEM_USER',
	'USER',
	'USER_ID',
	'USER_NAME',

	// string
	'ASCII',
	'CHAR',
	'CHARINDEX',
	'CONCAT',
	'CONCAT_WS',
	'DIFFERENCE',
	'FORMAT',
	'LEFT',
	'LEN',
	'LOWER',
	'LTRIM',
	'NCHAR',
	'PATINDEX',
	'QUOTENAME',
	'REPLACE',
	'REPLICATE',
	'REVERSE',
	'RIGHT',
	'RTRIM',
	'SOUNDEX',
	'SPACE',
	'STR',
	'STRING_AGG',
	'STRING_ESCAPE',
	'STUFF',
	'SUBSTRING',
	'TRANSLATE',
	'TRIM',
	'UNICODE',
	'UPPER',

	// system
	'$PARTITION',
	'@@ERROR',
	'@@IDENTITY',
	'@@PACK_RECEIVED',
	'@@ROWCOUNT',
	'@@TRANCOUNT',
	'BINARY_CHECKSUM',
	'CHECKSUM',
	'COMPRESS',
	'CONNECTIONPROPERTY',
	'CONTEXT_INFO',
	'CURRENT_REQUEST_ID',
	'CURRENT_TRANSACTION_ID',
	'DECOMPRESS',
	'ERROR_LINE',
	'ERROR_MESSAGE',
	'ERROR_NUMBER',
	'ERROR_PROCEDURE',
	'ERROR_SEVERITY',
	'ERROR_STATE',
	'FORMATMESSAGE',
	'GET_FILESTREAM_TRANSACTION_CONTEXT',
	'GETANSINULL',
	'HOST_ID',
	'HOST_NAME',
	'ISNULL',
	'ISNUMERIC',
	'MIN_ACTIVE_ROWVERSION',
	'NEWID',
	'NEWSEQUENTIALID',
	'ROWCOUNT_BIG',
	'SESSION_CONTEXT',
	'XACT_STATE',

	// statistical
	'@@CONNECTIONS',
	'@@CPU_BUSY',
	'@@IDLE',
	'@@IO_BUSY',
	'@@PACK_SENT',
	'@@PACKET_ERRORS',
	'@@TIMETICKS',
	'@@TOTAL_ERRORS',
	'@@TOTAL_READ',
	'@@TOTAL_WRITE',
	'TEXTPTR',
	'TEXTVALID',

	// trigger
	'COLUMNS_UPDATED',
	'EVENTDATA',
	'TRIGGER_NESTLEVEL',
	'UPDATE',

	// Shorthand functions to use in place of CASE expression
	'COALESCE',
	'NULLIF',
];
