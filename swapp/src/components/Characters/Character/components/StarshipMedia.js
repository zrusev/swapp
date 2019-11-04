import styled from 'styled-components';
import { Media as EpisodesMedia } from '../../../Episodes/components/_index';

export const StarshipMedia = styled(EpisodesMedia)`
  @media (max-width: 700px) {
    width: 20vw;
  }

  @media (min-width: 700px) {
    width: 10vw;
  }

  @media (min-width: 980px) {
    width: 5vw;
  }
`;
