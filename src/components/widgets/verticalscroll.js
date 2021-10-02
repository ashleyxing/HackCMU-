import React from 'react';
import styled from 'styled-components';
import ImageBanner from './imagebanner';


const VerticalScroll = () => {
  return (
    <VerticalScrollWrapper>
      <ImageBanner 
        src="https://eaternity.org/img/home/Website-Export.png"
        width={400}
        backgroundColor="beige"
        description="Get eco-friendly analysis"
      />
      <ImageBanner 
        src="https://food.unl.edu/newsletters/images/basic-ingredients-for-baking.png"
        width={400}
        backgroundColor="rgba(122, 155, 118, 0.7)"
        description="Find eco-friendly substitutions"
      />
      <ImageBanner 
        src="https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg"
        width={400}
        backgroundColor="beige"
        description="Discover similar recipes"
      />
      <ImageBanner 
        src="https://www.sis.se/globalassets/sisinternationelldev/bilder/enviroment_and_climate_800x457.jpg?format=jpg&bgcolor=white&quality=80&width=750&upscale=false"
        width={400}
        backgroundColor="rgba(122, 155, 118, 0.7)"
        description="Save the environment"
      />
    </VerticalScrollWrapper>
  );
};

const VerticalScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
  width: 60%;
  max-width: 1200px;
  height: 100%;
  margin-left: 40%;
  float: none;
  clear: none;
  background-color: beige; 
  z-index: 2;
`;

export default VerticalScroll;