import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.4vw 1.5vw;
  margin: 1.5vw;
  margin-top: 2vw;
  text-decoration: none;
  border-radius: 4px;
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
  background-color: #5c52447a;

  &:hover {
    background-color: #5c5244;
    border: 2px solid #42392c;
    color: #fff;
    text-decoration: none;
  }

  &:active {
    background-color: #5c5244;
    color: #fff;
  }
`;
