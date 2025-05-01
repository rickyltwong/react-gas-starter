// Store items in memory for development purposes
// In a real application, the data must be stored in an external data source like a database or a spreadsheet
let itemsList = ["test", "test3", "test5"];

/**
 * Gets all items from the list
 * @returns Array of items
 */
function getItems(): string[] {
	// Return a copy of the array to prevent direct modification
	return [...itemsList];
}

/**
 * Adds an item to the list if it doesn't already exist
 * @param item - The item to add
 * @returns Updated array of items
 */
function addItem(item: string): string[] {
	// Only add if the item doesn't already exist and is not empty
	if (item && itemsList.indexOf(item) === -1) {
		itemsList.push(item);
	}
	return [...itemsList];
}

/**
 * Removes an item from the list
 * @param item - The item to remove
 * @returns Updated array of items
 */
function removeItem(item: string): string[] {
	itemsList = itemsList.filter((i) => i !== item);
	return [...itemsList];
}

export { getItems, addItem, removeItem };
