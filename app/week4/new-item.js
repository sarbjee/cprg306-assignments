"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);

        alert(`You are buying ${quantity} ${name} in the ${category} category.`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <main>
            <div className="justify-center flex items-center h-120 w-120 m-3 p-3">
                <form className="justify-center" onSubmit={handleSubmit}>
                    <div className="flex flex-row">
                        <input className="text-black" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                        <input className="text-black ml-5" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    </div>
                    <select className="text-black bg-slate-300 m-3 p-3" value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">beverages</option> 
                        <option value="Snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="other">Other</option>
                    </select>
                    <button className="bg-slate-300 text-white py-2 ml-5 px-4 rounded hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" type="submit">
                    Add Item
                    </button>

                </form>
            </div>
        </main>
    )
}