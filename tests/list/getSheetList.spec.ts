import { getItems } from "../../src/services/listService";

describe("getSheetList.ts", () => {
	it("list", () => {
		const items = getItems();
		expect(items).toEqual(["test", "test3", "test5"]);
	});
});
