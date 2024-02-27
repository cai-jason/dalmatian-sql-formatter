"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = void 0;
exports.functions = [
    // https://www.sqlite.org/lang_corefunc.html
    'ABS',
    'CHANGES',
    'CHAR',
    'COALESCE',
    'FORMAT',
    'GLOB',
    'HEX',
    'IFNULL',
    'IIF',
    'INSTR',
    'LAST_INSERT_ROWID',
    'LENGTH',
    'LIKE',
    'LIKELIHOOD',
    'LIKELY',
    'LOAD_EXTENSION',
    'LOWER',
    'LTRIM',
    'NULLIF',
    'PRINTF',
    'QUOTE',
    'RANDOM',
    'RANDOMBLOB',
    'REPLACE',
    'ROUND',
    'RTRIM',
    'SIGN',
    'SOUNDEX',
    'SQLITE_COMPILEOPTION_GET',
    'SQLITE_COMPILEOPTION_USED',
    'SQLITE_OFFSET',
    'SQLITE_SOURCE_ID',
    'SQLITE_VERSION',
    'SUBSTR',
    'SUBSTRING',
    'TOTAL_CHANGES',
    'TRIM',
    'TYPEOF',
    'UNICODE',
    'UNLIKELY',
    'UPPER',
    'ZEROBLOB',
    // https://www.sqlite.org/lang_aggfunc.html
    'AVG',
    'COUNT',
    'GROUP_CONCAT',
    'MAX',
    'MIN',
    'SUM',
    'TOTAL',
    // https://www.sqlite.org/lang_datefunc.html
    'DATE',
    'TIME',
    'DATETIME',
    'JULIANDAY',
    'UNIXEPOCH',
    'STRFTIME',
    // https://www.sqlite.org/windowfunctions.html#biwinfunc
    'row_number',
    'rank',
    'dense_rank',
    'percent_rank',
    'cume_dist',
    'ntile',
    'lag',
    'lead',
    'first_value',
    'last_value',
    'nth_value',
    // https://www.sqlite.org/lang_mathfunc.html
    'ACOS',
    'ACOSH',
    'ASIN',
    'ASINH',
    'ATAN',
    'ATAN2',
    'ATANH',
    'CEIL',
    'CEILING',
    'COS',
    'COSH',
    'DEGREES',
    'EXP',
    'FLOOR',
    'LN',
    'LOG',
    'LOG',
    'LOG10',
    'LOG2',
    'MOD',
    'PI',
    'POW',
    'POWER',
    'RADIANS',
    'SIN',
    'SINH',
    'SQRT',
    'TAN',
    'TANH',
    'TRUNC',
    // https://www.sqlite.org/json1.html
    'JSON',
    'JSON_ARRAY',
    'JSON_ARRAY_LENGTH',
    'JSON_ARRAY_LENGTH',
    'JSON_EXTRACT',
    'JSON_INSERT',
    'JSON_OBJECT',
    'JSON_PATCH',
    'JSON_REMOVE',
    'JSON_REPLACE',
    'JSON_SET',
    'JSON_TYPE',
    'JSON_TYPE',
    'JSON_VALID',
    'JSON_QUOTE',
    'JSON_GROUP_ARRAY',
    'JSON_GROUP_OBJECT',
    'JSON_EACH',
    'JSON_TREE',
    // cast
    'CAST',
];
//# sourceMappingURL=sqlite.functions.js.map