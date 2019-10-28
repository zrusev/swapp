import styled from 'styled-components';

export const Label = styled.div`
    margin: 0.5em 0;
    color: ${({theme: {cardTitle}}) => cardTitle};

    span {
        color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};
    }

    h1 {
        font-size: 1em;
    }

    h3 {
        font-size: 0.8em;
    }   
`;