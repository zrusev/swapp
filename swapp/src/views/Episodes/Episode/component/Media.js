import styled from 'styled-components';

import { Media as EpisodesMedia } from '../../components/Media';

export const Media = styled(EpisodesMedia)`
    @media (max-width: 700px) {
        width: 60vw;
    }

    @media (min-width: 700px) {
        width: 25vw;
    }

    @media (min-width: 980px) {
        width: 15vw;
    }
`;
