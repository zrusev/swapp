import styled from 'styled-components';
import { Person as EpisodePerson } from '../../Episodes/Episode/component/Person';

export const Person = styled(EpisodePerson)`
    @media (max-width: 700px) {
        width: 90vw;
    }

    @media (min-width: 700px) {
        width: 30vw;
    }

    @media (min-width: 980px) {
        width: 30vw;
    }
`;