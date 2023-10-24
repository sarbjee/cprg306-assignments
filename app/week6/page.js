"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import ItemList from "./item-list";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <main className="justify-center m-10">
            <NewItem onAddItem={handleAddItem} />
            {Array.isArray(items) ? <ItemList items={items}/> : <p>Loading...</p>}
        </main>
    );
}



