import styled from 'styled-components';

export const Title = styled.span`
    padding-top: 1em;
    width: 100%;

    color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};
    font-size: 0.6em;
    line-height: 1.2;
    padding: 0 1em;

    h3 {
        padding: 0 1em;
        margin: 0;
    }
`;