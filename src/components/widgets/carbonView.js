import React from "react";
import styled, { css } from "styled-components";
import CountUp, { useCountUp } from "react-countup";

var maxVal = 200;

const CarbonIngredient = ({ name, co2 }) => {
  console.log(co2.toString() + "px");
  return (
    <CarbonIngredientWrapper width={co2}>
      <div className='name'>{name}</div>
      <div className='co2'>
        <CountUp
          className='co2'
          start={0}
          end={co2}
          duration={2.75}
          delay={0}
          useEasing={true}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
    </CarbonIngredientWrapper>
  );
};

const CarbonView = () => {
  var data = [
    ["Beef", 122],
    ["American Cheese", 59],
    ["Tomatoes", 15],
  ];

  return (
    <CarbonViewWrapper backgroundColor='beige'>
      <div className='title'>High Carbon Ingredients</div>
      <div className='subtitle'>
        Ingredients whose production processes develop the most carbon (kg of
        gas per kg of ingredient)
      </div>
      <ul>
        {data.map((data_point) => (
          <li>
            <CarbonIngredient name={data_point[0]} co2={data_point[1]} />
          </li>
        ))}
      </ul>
    </CarbonViewWrapper>
  );
};

const CarbonIngredientWrapper = styled.div`
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

const CarbonViewWrapper = styled.div`
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

export default CarbonView;
