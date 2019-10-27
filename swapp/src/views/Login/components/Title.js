import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.yellow};

    & h1 {
        margin: auto;
    }
`;