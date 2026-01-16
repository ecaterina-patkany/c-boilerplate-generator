// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { extractFirstMultilineComment } from './utils/parser';

// This method is called the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('c-boilerplate.generate', () => {
		// The code placed here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;

		if ( !editor ) {
			vscode.window.showErrorMessage('No active editor!');
			return;
		}

		const document = editor.document;
		const fullText = document.getText(); // read entire file
		const problemComment = extractFirstMultilineComment(fullText);

		if (!problemComment) {
			vscode.window.showWarningMessage('No multiline comment found in this file.');
			return;
		}

		// Log the extracted comment
		const output = vscode.window.createOutputChannel('C Boilerplate');
		output.show(true);
		output.appendLine('--- PROBLEM STATEMENT START ---');
		output.appendLine(problemComment);
		output.appendLine('--- PROBLEM STATEMENT END ---');

		vscode.window.showInformationMessage('Problem statement extracted. Check console for details.');
	});

	context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {}
