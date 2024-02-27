/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { format } from './sql-formatter';

type SupportedLanguages = 'sql' | 'snowflake' | undefined;

const SUPPORTED_LANGUAGE_IDS: Record<string, SupportedLanguages> = {
	'sql': 'sql',
	'snowflake-sql': 'snowflake',
};

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('dalmatian-sql-formatter.format-selection', formatSelection),
	);
}

export function deactivate() { }

function formatSelection() {
	const editor = vscode.window.activeTextEditor;
	if (!editor) { return; }

	const languageId = editor.document.languageId;
	if (!(languageId in SUPPORTED_LANGUAGE_IDS)) { return; }

	const selectedText = editor.selection;
	const text = editor.document.getText(selectedText);
	const formattedText = format(text, { language: SUPPORTED_LANGUAGE_IDS[languageId as keyof typeof SUPPORTED_LANGUAGE_IDS] });

	const edit = new vscode.WorkspaceEdit();
	edit.replace(editor.document.uri, selectedText, formattedText);
	vscode.workspace.applyEdit(edit);
}
