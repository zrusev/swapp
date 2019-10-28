import styled from 'styled-components';

export const Title = styled.span`
    flex: 2;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: 1em 1.5em;

    h1 {
        color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};
        font-size: 1em;
    }

    h3 {
        color: ${({theme: {cardTitle}}) => cardTitle};
        font-size: 0.5em;
    }

    @media (min-width: 700px) {
        h1 {
            font-size: 1.1em;
        }
    
        h3 {
            font-size: 0.75em;
        }
    }

    @media (min-width: 980px) {
        h1 {
            font-size: 0.8em;
        }
    
        h3 {
            font-size: 0.5em;
        }
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: 1em;
        }
    
        h3 {
            font-size: 0.8em;
        }
    }
`;