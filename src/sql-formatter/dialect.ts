/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
	DialectFormatOptions,
	ProcessedDialectFormatOptions,
} from './formatter/ExpressionFormatter.js';
import Tokenizer from './lexer/Tokenizer.js';
import { TokenizerOptions } from './lexer/TokenizerOptions.js';

export interface DialectOptions {
	name: string;
	tokenizerOptions: TokenizerOptions;
	formatOptions: DialectFormatOptions;
}

export interface Dialect {
	tokenizer: Tokenizer;
	formatOptions: ProcessedDialectFormatOptions;
}

const cache = new Map<DialectOptions, Dialect>();

/**
 * Factory function for building Dialect objects.
 * When called repeatedly with same options object returns the cached Dialect,
 * to avoid the cost of creating it again.
 */
export const createDialect = (options: DialectOptions): Dialect => {
	let dialect = cache.get(options);
	if (!dialect) {
		dialect = dialectFromOptions(options);
		cache.set(options, dialect);
	}
	return dialect;
};

const dialectFromOptions = (dialectOptions: DialectOptions): Dialect => ({
	tokenizer: new Tokenizer(dialectOptions.tokenizerOptions, dialectOptions.name),
	formatOptions: processDialectFormatOptions(dialectOptions.formatOptions),
});

const processDialectFormatOptions = (
	options: DialectFormatOptions
): ProcessedDialectFormatOptions => ({
	alwaysDenseOperators: options.alwaysDenseOperators || [],
	onelineClauses: Object.fromEntries(options.onelineClauses.map(name => [name, true])),
});
