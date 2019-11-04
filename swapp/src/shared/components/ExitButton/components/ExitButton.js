import styled from 'styled-components';
import logo from '../assets/logout.png';

export const ExitButton = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.8em 1em;

  &:hover,
  &:focus {
    box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;
  }
`;
