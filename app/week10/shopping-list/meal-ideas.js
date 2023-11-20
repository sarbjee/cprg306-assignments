import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas from TheMealDB API
const fetchMealIdeas = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.meals || []; // Return an empty array if no meals are found
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return []; // Return an empty array in case of error
  }
};

// Meals component
export default function Meals({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      const loadMeals = async () => {
        try {
          const data = await fetchMealIdeas(ingredient);
          setMeals(data);
        } catch (error) {
          console.error("Error fetching meal ideas:", error);
        }
      };
      
      loadMeals();
    }
  }, [ingredient]);

  return (
    <div>
      {ingredient ? (
        <h1 className="text-2xl font-bold">Meal Ideas with {ingredient}</h1>
      ) : (
        <h1 className="text-2xl font-bold">
          Choose an item to see meal ideas
        </h1>
      )}
      <ul>
        {meals && meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="my-1 px-2 bg-slate-700 rounded hover:bg-orange-500 cursor-pointer max-w-sm"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}

  