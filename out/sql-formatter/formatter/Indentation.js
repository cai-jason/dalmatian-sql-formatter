"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("../utils.js");
const INDENT_TYPE_TOP_LEVEL = 'top-level';
const INDENT_TYPE_BLOCK_LEVEL = 'block-level';
/**
 * Manages indentation levels.
 *
 * There are two types of indentation levels:
 *
 * - BLOCK_LEVEL : increased by open-parenthesis
 * - TOP_LEVEL : increased by RESERVED_CLAUSE words
 */
class Indentation {
    indent;
    indentTypes = [];
    /**
     * @param indent A string to indent with
     */
    constructor(indent) {
        this.indent = indent;
    }
    /**
     * Returns indentation string for single indentation step.
     */
    getSingleIndent() {
        return this.indent;
    }
    /**
     * Returns current indentation level
     */
    getLevel() {
        return this.indentTypes.length;
    }
    /**
     * Increases indentation by one top-level indent.
     */
    increaseTopLevel() {
        this.indentTypes.push(INDENT_TYPE_TOP_LEVEL);
    }
    /**
     * Increases indentation by one block-level indent.
     */
    increaseBlockLevel() {
        this.indentTypes.push(INDENT_TYPE_BLOCK_LEVEL);
    }
    /**
     * Decreases indentation by one top-level indent.
     * Does nothing when the previous indent is not top-level.
     */
    decreaseTopLevel() {
        if (this.indentTypes.length > 0 && (0, utils_js_1.last)(this.indentTypes) === INDENT_TYPE_TOP_LEVEL) {
            this.indentTypes.pop();
        }
    }
    /**
     * Decreases indentation by one block-level indent.
     * If there are top-level indents within the block-level indent,
     * throws away these as well.
     */
    decreaseBlockLevel() {
        while (this.indentTypes.length > 0) {
            const type = this.indentTypes.pop();
            if (type !== INDENT_TYPE_TOP_LEVEL) {
                break;
            }
        }
    }
}
exports.default = Indentation;
//# sourceMappingURL=Indentation.js.map