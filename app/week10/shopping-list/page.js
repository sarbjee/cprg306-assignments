"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import Meals from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { addItem, getShoppingList } from "../_services/shopping-list-service.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  useEffect(() => {
    if (user) {
      getShoppingList(user.uid).then((items) => setItems(items));
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const item = { id: newItemId, ...newItem };
      setItems((prevItems) => [...prevItems, item]);
    } catch (error) {
      console.log("Error adding item:");
    }
  };

  const handleItemSelect = (item) => {
    const nameNoEmoji = item.name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const nameNoComma = nameNoEmoji.replace(/,/g, "");
    const nameCleaned = nameNoComma
      .replace(/\d+(\s?(kg|g|L|pack)?)|dozen/g, "")
      .trim();
    const name = nameCleaned.replace(/s$/, "");
    setSelectedItemName(name);
  };

  if (user) {
    return (
      <main className="bg-gray-100 p-4">
        <h1 className="p-4 text-3xl font-bold bg-gray-200 text-gray-800">Shopping List</h1>
        <div className="flex">
          <div className="flex-1 max-w-sm bg-white shadow-md rounded p-4">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <Link
              href="/"
              className="p-1 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Home
            </Link>
          </div>
          <div className="flex-1 pl-4 bg-white shadow-md rounded p-4">
            <Meals ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <>
        Content Blocked
        <p>
          <Link
            href="/"
            className="p-1 text-white bg-gray-500 rounded hover:bg-gray-600"
          >
            Home
          </Link>
        </p>
      </>
    );
  }
}




