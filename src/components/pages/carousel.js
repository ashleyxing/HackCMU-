import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import IngredientList from '../widgets/ingredientlist';

const Carousel = () => {
  return (
    <ReactFullpage
      sectionsColor={["beige"]}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <div className="slide">
                <IngredientList />
              </div>
              <div className="slide">
                <h3>Slide 2.2</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.3</h3>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Carousel;