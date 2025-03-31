/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate({ subscriptions }: vscode.ExtensionContext) {
    const outputChannel = vscode.window.createOutputChannel('extension-example');

	subscriptions.push(vscode.commands.registerCommand('hello-world', async () => {
		const what = await vscode.window.showInputBox({ placeHolder: 'say anything' });
		if (what) {
			outputChannel.appendLine(`Message: ${what}`);
			outputChannel.show();
		}
	}));
}
