import React from "react";
import styled, { css } from "styled-components";
import CountUp, { useCountUp } from "react-countup";

const IngredientSection = () => {
  var data = [
    ["beef", "chicken"],
    ["american cheese", "mozerella cheese"],
    ["butter", "margarine"],
  ];

  return (
    <div className='ingredient-list'>
      {data.map((datapoint) => (
        <li className='ingredient'>
          {datapoint[0]} replaced with {datapoint[1]}
        </li>
      ))}
    </div>
  );
};

const RecipeSection = () => {
  var data = ["Impossible Burger", "Black Bean Burger", "Vegan Sloppy Joes"];
  return (
    <div className='recipe-list'>
      {data.map((recipe_sub) => (
        <li className='recipe'>{recipe_sub}</li>
      ))}
    </div>
  );
};

const SubstituteView = () => {
  // sort data by carbon amount

  function sort_by_key(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  var data = [
    ["Beef", 122],
    ["American Cheese", 59],
    ["Tomatoes", 15],
  ];

  data = sort_by_key(data, 1).reverse();

  return (
    <SubstituteViewWrapper backgroundColor='beige'>
      <div className='toptitle'>Try substituting these ingredients ... </div>
      <div className='sub-wrapper'>
        <div className='ingredient-sub'>
          <IngredientSection />
        </div>
        <div className='recipe-sub'>
          <RecipeSection />
        </div>
      </div>
      <div className='bottomtitle'>... or take a look at these recipes</div>
    </SubstituteViewWrapper>
  );
};

const SubstituteViewWrapper = styled.div`
  font-family: Quicksand, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  .toptitle {
    // border: 4px solid red;
    height: auto;
    width: 100%;
    top: 0px;
    font-size: 75px;
    font-weight: bold;
  }
  .bottomtitle {
    position: relative;
    // border: 4px solid green;
    height: auto;
    width: 100%;
    bottom: 0px;
    right: 15px;
    text-align: right;
    font-size: 75px;
    font-weight: bold;
  }
  .sub-wrapper {
    // border: 4px solid yellow;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .ingredient-sub {
    // border: 4px solid blue;
    display: inline-block;
    width: 50%;
  }
  .recipe-sub {
    // border: 4px solid purple;
    display: inline-block;
    width: 50%;
  }

  .ingredient-list {
    // border: 4px solid red;
    height: 100%;
    padding-left: 10%;
    padding-top: 10%;
    font-size: 25px;
  }

  .recipe-list {
    // border: 4px solid green;
    list-style-type: none;
    padding-left: 35%;
    font-size: 25px;
    margin-top: 50%;
  }

  .ingredient {
    margin: 20px;
  }

  .recipe {
    margin: 20px;
  }

  ${(props) => css`
    background-color: ${props.backgroundColor};
  `};
`;

export default SubstituteView;
