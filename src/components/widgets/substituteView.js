import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { dataContext } from "../DataProvider";

const SubstituteView = () => {


  const { ingredients, substitutes, ingredientImpact } = useContext(dataContext);

  function maxCarbon() {
    let amt = 0;
    let res = "";
    for (let i = 0; i < ingredients.length; i++) {
      let name = ingredients[i].name;
      if (ingredientImpact[name].carbon.amount > amt) {
        amt = ingredientImpact[name].carbon.amount;
        res = name;
      }
    }
    return res;
  }

  function maxWater() {
    let amt = 0;
    let res = "";
    for (let i = 0; i < ingredients.length; i++) {
      let name = ingredients[i].name;
      if (ingredientImpact[name].water.amount > amt) {
        amt = ingredientImpact[name].water.amount;
        res = name;
      }
    }
    return res;
  }
  console.log("Max Carbon: ", maxCarbon())
  console.log("Max water: ", maxWater())

  return (
    <SubstituteViewWrapper backgroundColor='beige'>
      <div className='title'>Suggested Substitutes</div>
      <div className='subtitle'>
        Replace the ingredient with the highest carbon or water usage!
      </div>
    </SubstituteViewWrapper>
  );
};

const SubstituteViewWrapper = styled.div`
  font-family: Quicksand, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${(props) => css`
    background-color: ${props.backgroundColor};
  `};

  .title {
    padding: 20px 0px;
    font-size: 60px;
    font-weight: bold;
  }
`;

export default SubstituteView;