"use client"

import React from 'react'
import { useEffect, useState } from 'react'


async function GetMealIdeas(ingredient){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals
}
export default function Meal_Ideas({ingredient}) {

    const [meals, setmeals ] = useState([]);

    const loadMealIdeas = async function fetchmeals(){
        const mealsideas = await GetMealIdeas(ingredient);
        setmeals(mealsideas);

    }
    useEffect (() => {
        loadMealIdeas();

    }, [ingredient])
    return (
        <div className="m-2 bg-blue-950 border-orange-50 border-2 w-64 p-1 rounded-lg" style={{display: "flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <h1 className='underline text-xl '>Meal Ideas with {ingredient}</h1>
          <ul>
            {meals && meals.length > 0 ? ( // Check if meals exists and has items
              meals.map((meal) => (
                <li key={meal.idMeal} className='p-2 text-lg '>
                  <h2>{meal.strMeal}</h2>
                </li>
              ))
            ) : (
              <li>No meal ideas found.</li> 
            )}
          </ul>
        </div>
      );
}
