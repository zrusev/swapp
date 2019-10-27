import styled from 'styled-components';

export const Label = styled.div`
    margin: 0.5em 0;
    color: ${({theme: {cardTitle}}) => cardTitle};

    span {
        color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};
    }
`;