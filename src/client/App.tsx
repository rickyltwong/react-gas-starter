import { GASClient } from "gas-client";
import { useEffect, useState } from "react";
import "./styles.css";
import type * as server from "../server/main";

// Initialize the GAS client to access server functions with TypeScript type support
const { serverFunctions } = new GASClient<typeof server>({
	allowedDevelopmentDomains: "https://localhost:3000",
});

const App: React.FC = () => {
	const [items, setItems] = useState<string[]>([]);
	const [newItem, setNewItem] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		setLoading(true);
		setError("");

		try {
			const result = await serverFunctions.getItems();
			setItems(result);
		} catch (error) {
			console.error("Error fetching items:", error);
			setError(
				`Failed to fetch items: ${error instanceof Error ? error.message : String(error)}`,
			);
		} finally {
			setLoading(false);
		}
	};

	const handleAddItem = async () => {
		if (!newItem.trim()) {
			setError("Please enter an item name");
			return;
		}

		setLoading(true);
		setError("");

		try {
			const result = await serverFunctions.addItem(newItem);
			setItems(result);
			setNewItem("");
		} catch (error) {
			console.error("Error adding item:", error);
			setError(
				`Failed to add item: ${error instanceof Error ? error.message : String(error)}`,
			);
		} finally {
			setLoading(false);
		}
	};

	const handleRemoveItem = async (item: string) => {
		setLoading(true);
		setError("");

		try {
			const result = await serverFunctions.removeItem(item);
			setItems(result);
		} catch (error) {
			console.error("Error removing item:", error);
			setError(
				`Failed to remove item: ${error instanceof Error ? error.message : String(error)}`,
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="app-container">
			<h1>List Management System</h1>

			{error && <p className="error-message">{error}</p>}

			<div className="add-item-form">
				<input
					type="text"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					placeholder="Enter new item"
					disabled={loading}
				/>
				<button type="button" onClick={handleAddItem} disabled={loading}>
					Add Item
				</button>
			</div>

			<button
				type="button"
				onClick={fetchItems}
				disabled={loading}
				className="refresh-button"
			>
				Refresh Items
			</button>

			<div className="items-list">
				<h2>Items List</h2>
				{loading ? (
					<p>Loading...</p>
				) : items.length === 0 ? (
					<p>No items found</p>
				) : (
					<ul>
						{items.map((item) => (
							<li key={item} className="item-row">
								<span>{item}</span>
								<button
									type="button"
									onClick={() => handleRemoveItem(item)}
									className="remove-button"
									disabled={loading}
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default App;
