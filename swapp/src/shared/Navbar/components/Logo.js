import styled from 'styled-components';

export const Logo = styled.div`
    flex: 4;
    padding: 0 2em;

    span {
        cursor: pointer;
        color: ${({theme: {yellow}}) => yellow};
    }
    
    h1 {
        margin: 0.25rem auto;
        display: inline-block;
    }
`;