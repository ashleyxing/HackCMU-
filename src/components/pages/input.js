import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dataContext } from '../DataProvider';
import fetchWebsite from '../../api/recipes/fetchWebsite';
import axios from 'axios';

const Input = () => {
  const { website, setWebsite, setIngredients, setSubstitutes, ingredientImpact, setIngredientImpact, setRecipeName } = useContext(dataContext);

  const getImpact = async () => {
      await axios.get(`http://localhost:3002/impact`, {
          headers: {
          'Content-Type': 'application/json'
      }})
          .then((response) => {
            var data = response.data;
            // console.log("THE DATA CLEARLY EXISTS",data)
            setIngredientImpact(data);
          })
          .catch((error) => console.log(error));
      return 0;
      // console.log("WHY THE FUCK IS IT EMPTY", ingredientImpact)
  };
  
  const getSubstitute = (websiteData, ingredient) => {
    let name = ingredient.name
    console.log(name)
    console.log(websiteData.substitutes)
    return websiteData.substitutes[name];
  };

  const getSubstitutes = (websiteData, ingredients) => {
      return ingredients.map((ingredient) => getSubstitute(websiteData, ingredient))
  };

  const fetchWebsite = async (website) => {
      // var websiteData = 
      await axios.get(`http://localhost:3001/${website}`, {
          headers: {
          'Content-Type': 'application/json'
      }})
          .then(async (response) => {
            var data = response.data;
            var ingredients = data.ingredients;
            var substitutes = getSubstitutes(data, ingredients);
            await getImpact();
            setIngredients(ingredients);
            setSubstitutes(substitutes);
            setRecipeName(data.name);
          })
          .catch((error) => console.log(error));
  }

  return (
    <InputWrapper>
      <h1 className="recipe-title">Send Us a Recipe</h1>
      <p className="description">Give us the link to a recipe you like, and we'll do the rest!</p>
      <input 
        type="text"
        className="input"
        placeholder="A delicious recipe..."
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <Link to="/results" className="button" onClick={() => {
        var replaced = website.replaceAll('/','*');
        setWebsite(replaced);
        fetchWebsite(replaced); 
      }}>See Results</Link>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  height: 100%;
  font-family: 'Quicksand',sans-serif;
  background-color: #dcdcdc;

  .recipe-title {
    font-size: 40px;
    font-weight: 700;
  }

  .description {
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .input {
    font-family: 'Quicksand',sans-serif;
    margin-bottom: 30px;
    width: 400px;
    height: 25px;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  .button {
    color: white;
    background-color: rgb(122, 155, 118);
    border-radius: 4px;
    padding: 0.75rem;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      transform: none;
      background-color: rgba(122, 155, 118, 0.7);
      outline: none;
    }
  }
`; 

export default Input;