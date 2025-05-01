import { addItem, getItems, removeItem } from "./services/listService";
import { doGet, doPost } from "./webapp";

// Entry point for the server
// All server functions must be exported here

export { getItems, addItem, removeItem };
export { doGet, doPost };
