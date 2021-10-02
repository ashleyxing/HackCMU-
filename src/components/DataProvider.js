import React, { useState, createContext } from 'react';

const dataContext = createContext();
const DataProvider = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [website, setWebsite] = useState("");
  const [substitutes, setSubstitutes] = useState([])
  const [ingredientImpact, setIngredientImpact] = useState([])
  const value = {
    ingredients,
    setIngredients,
    recipeName,
    setRecipeName,
    ingredientImpact,
    setIngredientImpact,
    substitutes,
    setSubstitutes,
    website,
    setWebsite
  }
  return <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
}
export {
  DataProvider,
  dataContext
};