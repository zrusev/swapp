import styled from 'styled-components';

export const Meta = styled.span`
    max-height: 0;
    overflow: hidden;
    color: #3C4858;
    font-size: 0.5em;
    text-transform: uppercase;
    position: absolute;
    bottom: 5%;
    padding: 0 5%;
    transition-property: max-height;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
`;