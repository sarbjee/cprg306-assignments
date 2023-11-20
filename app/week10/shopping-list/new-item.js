"use client";

import { useState } from "react";

export default function Item({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity("");
    setCategory("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="mb-2 p-2 rounded bg-gray-200 max-w-sm">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
        <input
          required
          type="text"
          placeholder="Item Name"
          onChange={handleNameChange}
          value={name}
          className="col-span-2 h-7 w-full px-1 bg-gray-300 text-gray-700 rounded"
        ></input>
        <input
          required
          type="number"
          min="1"
          max="99"
          placeholder="Quantity"
          onChange={handleQuantityChange}
          value={quantity}
          className="h-7 w-full px-1 bg-gray-300 text-gray-700 rounded"
        ></input>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="col-span-2 h-7 w-full bg-gray-300 text-gray-700 rounded"
        >
          {/* Options remain the same */}
        </select>
        <button
          type="submit"
          className="h-7 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}


