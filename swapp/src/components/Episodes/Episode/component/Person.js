import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Person = styled(Link)`
  display: flex;
  position: relative;
  margin-bottom: 1em;
  color: #abb1ba;
  background: #333;
  border-color: #3c4858;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  border-radius: 5px;
  width: 12em;

  &:hover,
  &:focus {
    box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;
  }

  @media (max-width: 700px) {
    width: 58vw;
  }

  @media (min-width: 700px) {
    width: 30vw;
  }

  @media (min-width: 980px) {
    width: 20vw;
  }
`;
