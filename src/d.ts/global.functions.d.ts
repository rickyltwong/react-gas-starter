declare namespace glFunctions {
	interface global {
		// Standard GAS handlers
		doPost: (
			e: GoogleAppsScript.Events.DoPost,
		) => GoogleAppsScript.Content.TextOutput;
		doGet: (
			e: GoogleAppsScript.Events.DoGet,
		) => GoogleAppsScript.HTML.HtmlOutput;
		main(): void;
	}
}

declare let global: glFunctions.global;
