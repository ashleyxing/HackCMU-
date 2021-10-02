import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="about-container">
        <h1 className="clean-plate-title">Clean Plate</h1>
        <p className="description">A fresh and environmentally friendly way of finding recipes and substitutes. Try it out now!</p>
        <Link to="/input" className="button">Get Started</Link>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 552px;
  bottom: 0px;
  z-index: 0;
  width: 40%;
  padding: 50px;
  background-color: #dcdcdc;

  .about-container {
    padding-right: 75px;
  }

  .clean-plate-title {
    font-size: 50px;
    font-weight: 700;
  }

  .description {
    margin-bottom: 40px;
  }

  .button {
    color: white;
    background-color: rgb(122, 155, 118);
    border-radius: 4px;
    padding: 0.75rem;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      transform: none;
      background-color: rgba(122, 155, 118, 0.7);
      outline: none;
    }
  }
`; 

export default Sidebar;