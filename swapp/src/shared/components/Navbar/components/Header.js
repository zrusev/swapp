import styled from 'styled-components';

export const Header = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: 1;
  display: grid;
  grid-template-areas: 'logo logo nav';
  border-color: ${({ theme: { appBarBorderColor } }) => appBarBorderColor};
  background: ${({ theme: { appBarBackground } }) => appBarBackground};

  @media (max-width: 700px) {
    grid-template-areas: 'logo logo burger' 'nav nav nav';
  }
`;
