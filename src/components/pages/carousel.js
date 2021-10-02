import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import IngredientList from '../widgets/ingredientlist';
import CarbonView from '../widgets/carbonView';
import SubstitutesView from '../widgets/substitutes';

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
                <CarbonView />
              </div>
              <div className="slide">
                <SubstitutesView /> 
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Carousel;