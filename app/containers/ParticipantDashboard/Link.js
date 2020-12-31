import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.4vw 1.5vw;
  margin: 1.5vw;
  margin-top: 1vh;
  text-decoration: none;
  border-radius: 5px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'stencil';
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #42392c;
  color: #fff;
  background-color: #5c5244;

  &:hover {
    background-color: #7c2f49;
    border: 2px solid #ffffff;
    color: #fff;
    text-decoration: none;
  }

  &:active {
    background-color: #7c2f49;
    color: #fff;
  }
`;
