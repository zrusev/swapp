import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: ${({theme: {cardBackground}}) => cardBackground};
    border-radius: 5px;
    margin: 1em;

    &:before,
    &:after {
    display: block;
    content: '';
    }

    &:after {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        transition: opacity 0.2s ease-in; 
    }
`;