import React from 'react';
import styled, { css } from 'styled-components';

const SubstitutesView = () => {
    return (
        <SubstitutesWrapper backgroundColor='beige'>
            <div className='title'>Substitutions</div>
            <div className='subtitle'>Easy swaps for a more environmentally conscious recipe</div>
        </SubstitutesWrapper>
    );
};
const SubstitutesWrapper = styled.div`
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
export default Substitutes;