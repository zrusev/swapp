import styled from 'styled-components';

export const Line = styled.hr`
    color: ${({theme: {cardBorderColor}}) => cardBorderColor};
    background: ${({theme: {cardBackground}}) => cardBackground};
    width: 75%; 
    margin: 0 auto;

    @media (max-width: 700px) {
        width: 100%;
    }

    @media (min-width: 700px) {
        width: 100%;
    }

    @media (min-width: 980px) {
        width: 100%;
    }
`;