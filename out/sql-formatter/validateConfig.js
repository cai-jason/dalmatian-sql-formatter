"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = exports.ConfigError = void 0;
class ConfigError extends Error {
}
exports.ConfigError = ConfigError;
function validateConfig(cfg) {
    const removedOptions = [
        'multilineLists',
        'newlineBeforeOpenParen',
        'newlineBeforeCloseParen',
        'aliasAs',
        'commaPosition',
        'tabulateAlias',
    ];
    for (const optionName of removedOptions) {
        if (optionName in cfg) {
            throw new ConfigError(`${optionName} config is no more supported.`);
        }
    }
    if (cfg.expressionWidth <= 0) {
        throw new ConfigError(`expressionWidth config must be positive number. Received ${cfg.expressionWidth} instead.`);
    }
    if (cfg.params && !validateParams(cfg.params)) {
        // eslint-disable-next-line no-console
        console.warn('WARNING: All "params" option values should be strings.');
    }
    return cfg;
}
exports.validateConfig = validateConfig;
function validateParams(params) {
    const paramValues = params instanceof Array ? params : Object.values(params);
    return paramValues.every(p => typeof p === 'string');
}
//# sourceMappingURL=validateConfig.js.map