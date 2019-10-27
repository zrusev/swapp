import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
    position: relative;
    margin-bottom: 2em;
    padding-bottom: 2em;
    color: ${({theme: {fontColor}}) => fontColor};
    background: ${({theme: {cardBackground}}) => cardBackground};
    border-color: ${({theme: {cardBorderColor}}) => cardBorderColor};
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
    border-radius: 5px;

    &:hover,
    &:focus {
        box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;

        .meta-data {
            max-height: 2em;
        }
    }

    @media (max-width: 700px) {
        max-width: 55vw;
    }

    @media (min-width: 700px) {
        max-width: 30vw;
        margin-bottom: 3em;
        margin-left: 1.5em;
        margin-right: 1.5em;
    }

    @media (min-width: 980px) {
        max-width: 15vw;
        margin-left: 5em;
        margin-right: 5em;
    }
`;