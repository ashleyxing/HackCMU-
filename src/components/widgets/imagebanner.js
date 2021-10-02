import React from 'react';
import styled, { css } from 'styled-components';

const ImageBanner = ({src, width, backgroundColor, description}) => {
  return (
    <ImageBannerWrapper backgroundColor={backgroundColor}>
      <div className="title">{description}</div>
      <img className="image" src={src} alt="" width={width} />
    </ImageBannerWrapper>
  );
};

const ImageBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  .title {
    padding: 40px 0px;
    font-size: 30px;
  }
  .image {
    padding-bottom: 40px;
  }
  ${props => css`
      background-color: ${props.backgroundColor};
    `
  };
`; 

export default ImageBanner;