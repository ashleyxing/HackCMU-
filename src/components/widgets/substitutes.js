import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { dataContext } from '../DataProvider';

const Substitute = ({ingredient, ingredients, ingredientImpact, type, substitutes}) => {
    console.log("BBBBB",substitutes);
    var substitutesList = substitutes[ingredient];
    console.log("SUB LISTTTT",substitutesList);
    var replacement = substitutesList[0];
    var replacementImpact = ingredientImpact[replacement][type].amount
    return (
        <SubstituteWrapper>
            <div className='name'>{ingredient}</div>
            <div>{replacement}</div>
            <div>{replacementImpact}</div>
        </SubstituteWrapper>
    );
};
const SubstitutesView = () => {
    const { ingredients, ingredientImpact, substitutes } = useContext(dataContext);
    console.log("SUBSTITUTES", substitutes);
    const findGreatestCarbon = (ingredientImpact) => {
        var greatest = -1;
        var greatestIngredient;
        for (let i in ingredientImpact) {
            if (ingredientImpact[i].carbon.amount > greatest) {
                greatest = ingredientImpact[i].carbon.amount;
                greatestIngredient = i;
            }
        }
        return greatestIngredient;
    };
    const findGreatestWater = (ingredientImpact) => {
        var greatest = -1;
        var greatestIngredient;
        for (let i in ingredientImpact) {
            if (ingredientImpact[i].water.amount > greatest) {
                greatest = ingredientImpact[i].water.amount;
                greatestIngredient = i;
            }
        }
        return greatestIngredient;
    };

    return (
        <SubstitutesViewWrapper backgroundColor='beige'>
            <div className='title'>Substitutions</div>
            <div className='subtitle'>Easy swaps for a more environmentally conscious recipe</div>
            <Substitute 
                ingredient={findGreatestCarbon(ingredientImpact)} 
                ingredients={ingredients} 
                ingredientImpact={ingredientImpact} 
                substitutes={substitutes}
                type={"carbon"} 
            /> 
            <Substitute 
                ingredient={findGreatestWater(ingredientImpact)} 
                ingredients={ingredients} 
                ingredientImpact={ingredientImpact} 
                substitutes={substitutes}
                type={"water"} 
            /> 
        </SubstitutesViewWrapper>
    );
};
const SubstituteWrapper = styled.div`
  margin: 35px;
  .name {
    display: inline-block;
    width: 150px;
    font-weight: bold;
  }
  .co2 {
    display: inline-block;
    background-color: lightblue;
    border-radius: 5px;
    height: 25px;
    padding: 10px;
    padding-top: 12px;
    padding-right: 12px;
    margin-left: 20px;
    ${(props) => css`
      width: max(${props.width}px, 15px);
    `};
  }
`;
const SubstitutesViewWrapper = styled.div`
  font-family: Quicksand, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  .title {
    padding: 20px 0px;
    font-size: 60px;
    font-weight: bold;
  }
  ul {
    list-style-type: none;
  }
  .image {
    padding-bottom: 40px;
  }
  ${(props) => css`
    background-color: ${props.backgroundColor};
  `};
`;
export default SubstitutesView;