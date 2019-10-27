import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: ${({theme: {yellow}}) => yellow};

    & h1 {
        margin: auto;
    }
`;