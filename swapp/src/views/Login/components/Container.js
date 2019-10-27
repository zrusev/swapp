import styled from 'styled-components';

export const Container = styled.div`
    margin: 2em auto;
    width: 30vw;
    height: auto;
    background: ${({theme: {black}}) => black};
    padding: 0 1em 1em 1em;

    @media screen and (max-width: 1024px) {
        width: 80vw;
    }
`;