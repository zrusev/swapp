import styled from 'styled-components';
import { Title as EpisodeTitle } from '../../../Episodes/Episode/component/_index';

export const Title = styled(EpisodeTitle)`
  align-items: center;
  padding: 0;
  padding-top: 0.5em;

  h3 {
    color: ${({ theme: { primaryHeadingFontColor } }) =>
      primaryHeadingFontColor};
  }

  h1 {
    color: ${({ theme: { secondaryHeadingFontColor } }) =>
      secondaryHeadingFontColor};
  }
`;
