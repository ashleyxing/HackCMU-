import React from 'react';
import styled from 'styled-components';

const NutritionLabel = ({ingredients}) => {
  return (
    <NutritionLabelWrapper>
      <header class="performance-facts__header">
        <h1 class="performance-facts__title">Ingredients List</h1>
        <p>Here's the deets about your recipe!</p>
      </header>
      <table class="performance-facts__table">
        <thead>
          <tr>
            <th colspan="3" class="small-info">
              Eco-Friendly Breakdown
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">
              <b>Carbon</b> 200
            </th>
            <td>
              <b>Calories</b> 130
            </td>
          </tr>
          <tr class="thick-row">
            <th colspan="2" class="small-info">
              <b>Ingredient</b>
            </th>
            <td colspan="3" class="small-info">
              <b>Quantity</b>
            </td>
          </tr>
          {ingredients.map((ingredient, i) => {
            return (
              <tr class={(() => {
                if (i === ingredients.length - 1) 
                  return "thick-end" 
              })()}>
                <th colspan="2">
                  <b>{ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)}</b>
                </th>
                <td>
                  <b>{(ingredient.amount + " " + ingredient.unit).trim()}</b>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table class="performance-facts__table--grid">
        <tbody>
          <tr>
            <td colspan="2">
              Vitamin A
              10%
            </td>
            <td>
              Vitamin C
              0%
            </td>
          </tr>
          <tr class="thin-end">
            <td colspan="2">
              Calcium
              10%
            </td>
            <td>
              Iron
              6%
            </td>
          </tr>
        </tbody>
      </table>

      <p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>

    </NutritionLabelWrapper>
  );
};

const NutritionLabelWrapper = styled.div`
  border: 1px solid black;
  margin: 20px;
  // float: left;
  width: 280px;
  padding: 0.5rem;
  table {
    border-collapse: collapse;
  }
  .performance-facts__title {
    font-weight: bold;
    font-size: 2rem;
    margin: 0 0 0.25rem 0;
  }
  .performance-facts__header {
    border-bottom: 10px solid black;
    padding: 0 0 0.25rem 0;
    margin: 0 0 0.5rem 0;
    p {
      margin: 0;
    }
  }
  .performance-facts__table {
    font-size: 14px;
    width: 100%;
    thead tr {
      th,
      td {
        border: 0;
      }
    }
    th,
    td {
      font-weight: normal;
      text-align: left;
      padding: 0.25rem 0;
      border-top: 1px solid black;
      white-space: nowrap;
    }
    td {
      &:last-child {
        text-align: right;
      }
    }
    .blank-cell {
      width: 1rem;
      border-top: 0;
    }
    .thick-row {
      th,
      td {
        border-top-width: 5px;
      }
    }
  }
  .small-info {
    font-size: 0.7rem;
  }

  .performance-facts__table--small {
    @extend .performance-facts__table;
    border-bottom: 1px solid #999;
    margin: 0 0 0.5rem 0;
    thead {
      tr {
        border-bottom: 1px solid black;
      }
    }
    td {
      &:last-child {
        text-align: left;
      }
    }
    th,
    td {
      border: 0;
      padding: 0;
    }
  }

  .performance-facts__table--grid {
    @extend .performance-facts__table;
    width: 100%;
    margin: 0 0 0.5rem 0;
    td {
      &:last-child {
        text-align: left;
      }
    }
  }

  .text-center {
    text-align: center;
  }
  .thick-end {
    border-bottom: 10px solid black;
  }
  .thin-end {
    border-bottom: 1px solid black;
  }
`;

export default NutritionLabel;