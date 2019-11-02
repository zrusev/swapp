import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90rem;
    margin: 5em 1em;
    margin-bottom: 1em;

    &:after {
        display: block;
        content: '';
        flex-grow: 0;
    }
`;