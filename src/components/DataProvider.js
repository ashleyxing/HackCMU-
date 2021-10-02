import React, { useState, createContext } from 'react';

const dataContext = createContext();
const DataProvider = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [website, setWebsite] = useState("");
  const [substitutes, setSubstitutes] = useState([])
  const value = {
    ingredients,
    setIngredients,
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