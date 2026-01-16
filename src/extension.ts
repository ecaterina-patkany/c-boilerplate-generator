// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

// This method is called the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('c-boilerplate.generate', () => {
		// The code placed here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;

		if ( !editor ) {
			vscode.window.showErrorMessage('No active editor!');
			return;
		}

		vscode.window.showInformationMessage(`Active file: ${editor.document.fileName}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {}
