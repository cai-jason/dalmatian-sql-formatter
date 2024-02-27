"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const sql_formatter_1 = require("./sql-formatter");
const SUPPORTED_LANGUAGE_IDS = {
    'sql': 'sql',
    'snowflake-sql': 'snowflake',
};
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('dalmatian-sql-formatter.format-selection', formatSelection));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
function formatSelection() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const languageId = editor.document.languageId;
    if (!(languageId in SUPPORTED_LANGUAGE_IDS)) {
        return;
    }
    const selectedText = editor.selection;
    const text = editor.document.getText(selectedText);
    const formattedText = (0, sql_formatter_1.format)(text, { language: SUPPORTED_LANGUAGE_IDS[languageId] });
    const edit = new vscode.WorkspaceEdit();
    edit.replace(editor.document.uri, selectedText, formattedText);
    vscode.workspace.applyEdit(edit);
}
//# sourceMappingURL=extension.js.map