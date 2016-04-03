'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
let vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "static-site-hero" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let helloDisposable = vscode.commands.registerCommand('extension.sayHello', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(helloDisposable);

    let fileLinkDisposable = vscode.commands.registerCommand('extension.insertLink', () => {
        vscode.window.showInformationMessage('Insert File Link Initiated.');
    });

    context.subscriptions.push(fileLinkDisposable);

    let figureDisposable = vscode.commands.registerCommand('extension.insertFigure', () => {
        vscode.window.showInformationMessage('Insert Figure Tag Initiated');
    });

    context.subscriptions.push(figureDisposable);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;