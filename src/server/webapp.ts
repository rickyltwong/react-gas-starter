import {
	buildErrorResponse,
	buildSuccessResponse,
} from "./utils/buildResponses";

/**
 * Handles POST requests for API calls
 * @param e - The event object
 * @returns A TextOutput object with the response in JSON format
 */
function doPost(
	e: GoogleAppsScript.Events.DoPost,
): GoogleAppsScript.Content.TextOutput {
	try {
		const request = JSON.parse(JSON.stringify(e));
		const response = {
			...request,
			processed: true,
		};
		return buildSuccessResponse(response);
	} catch (error) {
		return buildErrorResponse("Failed to process POST request", 500, {
			error: String(error),
		});
	}
}

/**
 * Handles GET requests to serve the web app UI
 * @param e - The event object
 * @returns An HtmlOutput object with the web app UI
 */
function doGet(
	e: GoogleAppsScript.Events.DoGet,
): GoogleAppsScript.HTML.HtmlOutput {
	return HtmlService.createHtmlOutputFromFile("index").setXFrameOptionsMode(
		HtmlService.XFrameOptionsMode.ALLOWALL,
	);
}

export { doPost, doGet };
