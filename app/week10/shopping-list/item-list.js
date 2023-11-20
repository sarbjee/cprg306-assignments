"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("category");

  if (sortBy === "name") items.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "category")
    items.sort((a, b) => a.category.localeCompare(b.category));

  const handleNameClick = () => {
    setSortBy("name");
  };
  const handleCategoryClick = () => {
    setSortBy("category");
  };

  // Adjusting button color based on selection
  var nameColor = sortBy === "name" ? "bg-gray-500" : "bg-gray-300";
  var categoryColor = sortBy === "category" ? "bg-gray-500" : "bg-gray-300";
  nameColor += " mx-1 p-1 text-white rounded hover:bg-gray-400";
  categoryColor += " mx-1 p-1 text-white rounded hover:bg-gray-400";

  return (
    <>
      <div className="flex justify-center my-2">
        <button className={nameColor} onClick={handleNameClick}>
          Sort by name
        </button>
        <button className={categoryColor} onClick={handleCategoryClick}>
          Sort by Category
        </button>
      </div>
      <div className="flex flex-col items-center">
        {items &&
          items.map((item, index) => (
            <div key={index} className="w-full max-w-md p-2 bg-gray-200 my-1 rounded">
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            </div>
          ))}
      </div>
    </>
  );
}



