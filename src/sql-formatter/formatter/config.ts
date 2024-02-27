/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { FormatOptions } from '../FormatOptions.js';

// Utility functions for config options

/**
 * Creates a string to use for one step of indentation.
 */
export function indentString(cfg: FormatOptions): string {
	if (cfg.indentStyle === 'tabularLeft' || cfg.indentStyle === 'tabularRight') {
		return ' '.repeat(10);
	}
	if (cfg.useTabs) {
		return '\t';
	}
	return ' '.repeat(cfg.tabWidth);
}

/**
 * True when indentStyle is one of the tabular ones.
 */
export function isTabularStyle(cfg: FormatOptions): boolean {
	return cfg.indentStyle === 'tabularLeft' || cfg.indentStyle === 'tabularRight';
}