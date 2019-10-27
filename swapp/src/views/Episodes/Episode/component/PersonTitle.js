import styled from 'styled-components';

export const PersonTitle = styled.span`
    padding-top: 2em;
    width: 100%;

    h5 {
        color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};;
        font-size: 1em;
        padding: 0 0.2em;
        margin: 0;
    }
`;