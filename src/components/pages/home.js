import React, { Fragment } from 'react';
import styled from 'styled-components';
import Sidebar from '../widgets/sidebar';
import VerticalScroll from '../widgets/verticalscroll';

const Home = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <VerticalScroll />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  margin: 0;
  width: 100%;
  height 100%;
  background-color: #fff;
  font-family: 'Quicksand',sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

export default Home;