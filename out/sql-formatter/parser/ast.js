"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType["statement"] = "statement";
    NodeType["clause"] = "clause";
    NodeType["set_operation"] = "set_operation";
    NodeType["function_call"] = "function_call";
    NodeType["parameterized_data_type"] = "parameterized_data_type";
    NodeType["array_subscript"] = "array_subscript";
    NodeType["property_access"] = "property_access";
    NodeType["parenthesis"] = "parenthesis";
    NodeType["between_predicate"] = "between_predicate";
    NodeType["case_expression"] = "case_expression";
    NodeType["case_when"] = "case_when";
    NodeType["case_else"] = "case_else";
    NodeType["limit_clause"] = "limit_clause";
    NodeType["all_columns_asterisk"] = "all_columns_asterisk";
    NodeType["literal"] = "literal";
    NodeType["identifier"] = "identifier";
    NodeType["keyword"] = "keyword";
    NodeType["data_type"] = "data_type";
    NodeType["parameter"] = "parameter";
    NodeType["operator"] = "operator";
    NodeType["comma"] = "comma";
    NodeType["line_comment"] = "line_comment";
    NodeType["block_comment"] = "block_comment";
})(NodeType || (exports.NodeType = NodeType = {}));
//# sourceMappingURL=ast.js.map