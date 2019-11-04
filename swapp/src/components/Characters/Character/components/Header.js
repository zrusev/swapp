import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5em;

  h1 {
    font-size: 1em;
    color: ${({ theme: { primaryHeadingFontColor } }) =>
      primaryHeadingFontColor};
  }

  h3 {
    font-size: 0.8em;
    color: ${({ theme: { secondaryHeadingFontColor } }) =>
      secondaryHeadingFontColor};
  }
`;
