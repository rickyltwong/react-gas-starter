/**
 * Builds a success response as JSON
 * @param result - The result data to include in the response
 * @returns A TextOutput object with the response in JSON format
 */
function buildSuccessResponse(
	result: Record<string, unknown>,
): GoogleAppsScript.Content.TextOutput {
	return ContentService.createTextOutput(
		JSON.stringify({
			success: true,
			...result,
		}),
	).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Builds an error response as JSON
 * @param message - The error message
 * @param code - HTTP status code (default: 400)
 * @param additionalData - Additional data to include in the response
 * @returns A TextOutput object with the error in JSON format
 */
function buildErrorResponse(
	message: string,
	code = 400,
	additionalData: Record<string, unknown> = {},
): GoogleAppsScript.Content.TextOutput {
	return ContentService.createTextOutput(
		JSON.stringify({
			success: false,
			error: `Error ${code}: ${message}`,
			code: code,
			message: message,
			...additionalData,
		}),
	).setMimeType(ContentService.MimeType.JSON);
}

export { buildSuccessResponse, buildErrorResponse };
