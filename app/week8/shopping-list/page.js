"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import ItemList from "./item-list";
import MealIdeas  from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [itemsSelectedName, setSelectedItemName] = useState(null);
    
    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleItemSelect(ingredient) {
        let clearStr = ingredient.name.replace(/[^a-zA-Z0-9\s]/g, "");
        setSelectedItemName(clearStr);
    }

    return (
        <main className="flex flex-col items-center m-10">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            {itemsSelectedName && <MealIdeas ingredient={itemsSelectedName} />}
        </main>
    );
}




