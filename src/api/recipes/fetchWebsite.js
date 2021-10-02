import React, { useState } from "react";

const getIngredients = (recipe) => {
    console.log(recipe)
    return recipe.extendedIngredients.map((ingredient) => [ingredient.name, ingredient.measures.metric.amount, ingredient.measures.metric.unitLong]);
};
const getSubstitute = async (ingredient) => {
    var subs = await fetch(`https://api.spoonacular.com/food/ingredients/substitutes?apiKey=6b87762d3baa4f7d911132a401c70e65&ingredientName=${ingredient}`)
        .then((response) => response.json())
        .then((data) => data.substitutes);
    console.log(subs);
    return subs
};
const getSubstitutes = async (ingredients) => {
    return await ingredients.map(async (ingredient) => await getSubstitute(ingredient))
};
const fetchWebsite = async () => {
    var ingredients = await fetch('https://localhost:3001', {
        headers: {
            'Content-Type':'application/json',
        },
    })
        .then((data) => data.ingredients)
        .catch((error) => console.log(error));
    console.log(ingredients)
    // var subs = getSubstitutes(ingredients);
    // console.log([ingredients,subs]);
    // return [ingredients, subs];
}

export default fetchWebsite;