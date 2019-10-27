import styled from 'styled-components';

export const Item = styled.div`
    padding: 0.5em;

    a {
        width: 100%;
        height: auto;
        color: ${({theme: {appBarFontColor}}) => appBarFontColor};
        text-decoration: none;
    }

    &:hover,
    &:focus {
        box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;
    }
`;