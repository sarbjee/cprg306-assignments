import React, { useState, useEffect } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const sortedItemsCopy = [...items]; // Use items prop instead of itemsData

    if (sortBy === "name") {
      sortedItemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      sortedItemsCopy.sort((a, b) => {
        const categoryA = a.category.toLowerCase();
        const categoryB = b.category.toLowerCase();

        if (categoryA < categoryB) {
          return -1;
        }
        if (categoryA > categoryB) {
          return 1;
        }
        return 0;
      });
    }

    setSortedItems(sortedItemsCopy);
  }, [sortBy, items]); // Add items to the dependency array

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl mb-8">Shopping List</h1>
      <label htmlFor="sortBy" className="mb-2 text-gray-600">
        Sort by:
      </label>
      <div className="flex justify-start mb-4">
        <button
          className="border border-orange-500 bg-orange-200 text-white w-32 p-2 mr-4"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="border border-orange-500 bg-orange-200 text-white w-32 p-2"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <div className="flex flex-col items-start">
        {sortedItems.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={item.id}
          />
        ))}
      </div>
    </main>
  );
}


