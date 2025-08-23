import { App, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface GoogleJulesPluginSettings {
	placeholderSetting: string;
}

const DEFAULT_SETTINGS: GoogleJulesPluginSettings = {
	placeholderSetting: 'default'
}

export default class GoogleJulesPlugin extends Plugin {
	settings: GoogleJulesPluginSettings;

	async onload() {
		await this.loadSettings();
		console.log('Google Jules Connector plugin loaded.');

		this.registerObsidianProtocolHandler("google-jules-connector", (params) => {
			const action = params.action;
			if (action === "hello") {
				new Notice("Hello from the browser extension!");
			} else {
				new Notice("Received an unknown action from browser extension.");
			}
		});
	}

	onunload() {
		console.log('Google Jules Connector plugin unloaded.');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
