import React, { useContext } from "react";
import styled, { css } from "styled-components";
import CountUp from "react-countup";
import { dataContext } from "../DataProvider";

// WAVES FROM: https://codepen.io/goodkatz/pen/LYPGxQz?editors=1100
const Waves = () => {
  var wavestr = "rgba(107,154,196,";
  return (
    <WaveWrapper>
      <div>
        <svg
          class='waves'
          xmlns='http://www.w3.org/2000/svg'
          throwIfNamespace='false'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shape-rendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g class='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill={wavestr + "0.7)"}
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill={wavestr + "0.5)"}
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill={wavestr + "0.3)"}
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='7'
              fill={wavestr + "0.9)"}
            />
          </g>
        </svg>
      </div>
    </WaveWrapper>
  );
};

const WaterIngredient = ({ name, water }) => {
  return (
    <div className='column'>
      <WaterIngredientWrapper height={water}>
        <div className='name'>
          {name}
          <br />
          <div className='water'>
            <CountUp
              className='water'
              start={0}
              end={water}
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
        </div>
      </WaterIngredientWrapper>
    </div>
  );
};

const WaterView = () => {
  function sort_by_key(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  var data = [];
  const { ingredients, ingredientImpact } = useContext(dataContext);
  for (let i = 0; i < ingredients.length; i++) {
    data.push([ingredients[i].name, ingredientImpact[ingredients[i].name].water.amount]);
  }
  data = sort_by_key(data, 1);
  data = data.slice(0, 5);

  return (
    <WaterViewWrapper backgroundColor='beige'>
      <div className='title'>Water Consuming Ingredients</div>
      <div className='subtitle'>
        Ingredients whose production processes develop the most water (liters of
        water per kg of ingredient)
      </div>
      <ul className='list'>
        {data.map((data_point) => (
          <li>
            <WaterIngredient name={data_point[0]} water={data_point[1]} />
          </li>
        ))}
      </ul>
      <div className='waveContainer'>
        <Waves />
      </div>
    </WaterViewWrapper>
  );
};

const WaterIngredientWrapper = styled.div`
  margin: 35px;
  .name {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: block;
    font-weight: bold;
  }
  .water {
    display: inline-block;
    background-color: transparent;
    border: 5px solid rgb(107, 154, 196);
    border-radius: 5px;
    height: 25px;
    padding: 10px;
    margin-top: 15px;
    ${(props) => css`
      height: min(${props.height / 2}px, 30vw);
    `};
  }
`;

const WaterViewWrapper = styled.div`
  font-family: Quicksand, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 100%;
  height: 100%;
  color: rgb(47, 84, 117);
  .title {
    padding: 20px 0px;
    font-size: 60px;
    font-weight: bold;
  }
  .list {
    list-style-type: none;
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: top;
    padding-right: 100px;
  }
  li {
    transition: 0.25s transform ease-out;
    z-index: 4;
  }
  li:hover {
    transform: translateY(-15px);
  }
  .waveContainer {
    position: absolute;
    overflow: hidden;
    width: 99.5vw;
    height: 100%;
  }
  ${(props) => css`
    background-color: ${props.backgroundColor};
  `};
`;

const WaveWrapper = styled.div`
  @import url(//fonts.googleapis.com/css?family=Lato:300:400);

  body {
    margin: 0;
  }

  .header {
    position: relative;
    text-align: center;
    background: linear-gradient(
      60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%
    );
    color: white;
  }

  .flex {
    /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .waves {
    position: absolute;
    left: -5px;
    bottom: 0px;
    width: 100vw;
    height: clamp(100px, 125px, 150px);
  }

  .content {
    position: relative;
    text-align: center;
    background-color: white;
  }

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
    .content {
      height: 30vh;
    }
    h1 {
      font-size: 24px;
    }
  }
`;

export default WaterView;
