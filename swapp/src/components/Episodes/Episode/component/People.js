import styled from 'styled-components';

export const People = styled.div`
    display: flex;
    flex-grow: 1;
    flex-flow: row wrap;
    justify-content: space-between;
    box-sizing: border-box;

    &:after {
        display: block;
        content: '';
        flex-grow: 0;
    }

    @media (max-width: 700px) {
        &:after {
            width: 58vw;
        }
    }

    @media (min-width: 700px) {
        &:after {
            width: 30vw;
        }
    }

    @media (min-width: 980px) {
        &:after {
            width: 20vw;
        }
    }
`;