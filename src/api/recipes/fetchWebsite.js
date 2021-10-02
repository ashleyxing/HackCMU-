import React, { useState } from "react";

const getIngredients = (recipe) => {
    console.log(recipe)
    return recipe.extendedIngredients.map((ingredient) => [ingredient.name, ingredient.measures.metric.amount, ingredient.measures.metric.unitLong]);
};
const getSubstitute = (json, ingredient) => {
    let name = ingredient.name
    console.log(name)
    console.log(json.substitutes)
    return json.substitutes[name];
};
const getSubstitutes = (json, ingredients) => {
    return ingredients.map((ingredient) => getSubstitute(json, ingredient))
};
const fetchWebsite = async () => {
    var json = require('../../data/burger.json');
    var ingredients = json.ingredients;
    console.log(ingredients)
    var subs = getSubstitutes(json, ingredients);
    console.log([ingredients,subs]);
    return [ingredients, subs];
}

export default fetchWebsite;