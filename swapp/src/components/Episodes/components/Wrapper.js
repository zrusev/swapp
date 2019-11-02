import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-flow: row wrap;
    margin-top: 2em;
    padding: 2em;
    box-sizing: border-box;

    &:after {
        display: block;
        content: '';
        flex-grow: 0;
    }

    @media (max-width: 700px) {
        justify-content: center;
    }

    @media (min-width: 700px) {
        &:after {
            width: 15vw;
            margin-left: 5em;
            margin-right: 5em;
        }
    }
`;