import styled from 'styled-components';

export const Logo = styled.div`
    grid-area: logo;
    border-color: ${({theme: {appBarBorderColor}}) => appBarBorderColor};
    background: ${({theme: {appBarBackground}}) => appBarBackground};
    display: flex;
    align-items: center;
    margin: 0.5em 1.5em;

    span {
        padding: 0 0.5em;
        font-size: 1.5em;
        cursor: pointer;
        color: ${({theme: {yellow}}) => yellow};

        &:hover,
        &:focus {
            box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;
        }
    }

    @media (max-width: 700px) {
        margin: 0.5em 0.5em;
    }
`;