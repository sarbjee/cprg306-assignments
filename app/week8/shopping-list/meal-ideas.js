"use client";

import { useEffect, useState } from "react";

async function fetchRecipes(ingredient) {
    
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const { meal } = await response.json();
    
}

export default function MealIdeas({ ingredient }) {
    const [meal, setmeals] = useState([]);
    async function loadMeals() {
        setmeals(await fetchRecipes(ingredient));
    }

    useEffect(() => {
        loadMeals();
    }, [ingredient])
    
    return (
        <main>
            <h2> Meal  Ideas</h2>
            { meals ? <p> Meal Ideas for {ingredient}</p> : <p> have no meal Ideas</p>}
            <ul>
                        {meals.map((meal) => (
                           <li key={meal.idMeal} className="bg-white border-b border-gray-200 p-4 hover:bg-gray-50">
                            <h2>{meal.strMeal}</h2>
                            </li>

                        ))}
            </ul>
              
        </main>
    )
}