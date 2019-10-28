import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5em;

    h1, h3 {
        color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};    
    }

    h1 {
        font-size: 1em;
    }

    h3 {
        font-size: 0.8em;
    }    
`;