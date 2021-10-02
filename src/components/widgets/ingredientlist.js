import React, { useContext } from 'react';
import styled from 'styled-components';
import { dataContext } from '../DataProvider';
import NutritionLabel from './nutritionlabel';

const IngredientList = () => {
  const { ingredients, recipeName, ingredientImpact, substitutes } = useContext(dataContext);
  console.log("Ingredients inside ingredient list: ", ingredients);
  console.log("Substitutes inside ingredient list: ", substitutes);
  return (
    <IngredientListWrapper>
      <NutritionLabel 
        recipeName={recipeName}
        ingredients={ingredients}
        ingredientImpact={ingredientImpact}
      />
    </IngredientListWrapper>
  );
};

const IngredientListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  height: 100%;
  font-family: 'Quicksand',sans-serif;
  background-color: beige;
  
  .list-title {
    font-size: 40px;
    font-weight: 700;
  }

  .list-description {
    margin: 0;
  }
`; 

export default IngredientList;