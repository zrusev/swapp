import styled from 'styled-components';

export const Media = styled.div`
  background: #666;
  width: 15vw;
  position: relative;
  overflow: hidden;
  margin: 0;

  &:before,
  &:after {
    display: block;
    content: '';
  }

  &:before {
    padding-top: 100%;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 0.2s ease-in;
  }

  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 102%;
    height: auto;
  }

  @media (max-width: 700px) {
    width: 55vw;
  }

  @media (min-width: 700px) {
    width: 30vw;
  }

  @media (min-width: 980px) {
    width: 15vw;
  }
`;
