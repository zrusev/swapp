import styled from 'styled-components';
import { People as EpisodePeople } from '../../Episodes/Episode/component/People';

export const People = styled(EpisodePeople)`
    @media (max-width: 700px) {
        &:after {
            width: 58vw;
        }
    }

    @media (min-width: 700px) {
        &:after {
            width: 20vw;
        }
    }

    @media (min-width: 980px) {
        &:after {
            width: 30vw;
        }
    }
`;