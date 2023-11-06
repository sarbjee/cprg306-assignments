import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id:Date.now().toString(),
            name,
            quantity: parseInt(quantity, 10), // Convert quantity to a number
            category,
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main>
            <div className="flex items-center h-full w-full bg-gray-100">
                <form className="flex flex-col justify-center mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-row mb-4">
                        <input
                            required
                            className="text-black p-2 mr-2"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Item Name"
                        />
                        <input
                            className="text-black p-2"
                            type="number"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                            placeholder="Quantity"
                        />
                    </div>
                    <select
                        className="text-black p-2 mb-4"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option> 
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors">
                        Add Item
                    </button>
                </form>
            </div>
        </main>
    );
}

