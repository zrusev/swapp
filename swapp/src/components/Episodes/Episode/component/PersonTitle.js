import styled from 'styled-components';

export const PersonTitle = styled.span`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;

  h5 {
    color: ${({ theme: { primaryHeadingFontColor } }) =>
      primaryHeadingFontColor};
    padding: 0 0.2em;
    margin: 0;
  }

  @media (max-width: 700px) {
    font-size: 0.5em;
  }

  @media (min-width: 700px) {
    font-size: 0.6em;
  }

  @media (min-width: 980px) {
    font-size: 0.8em;
  }
`;
