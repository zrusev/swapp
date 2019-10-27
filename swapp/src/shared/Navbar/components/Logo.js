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
        padding: 0 0.5rem;
        display: inline-block;
        &:hover,
        &:focus {
            box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;
        }
    }

`;