import styled from 'styled-components';

export const Hamburger = styled.button`
    display: none;
    grid-area: burger;
    margin: 0 20px 0 0;
    padding: 0;
    justify-self: end;
    font-size: 40px;
    border: none;
    background: none;
    outline: none;
    transition: 0.1s;
    
    &:active {
        transform: scale(1.2);
    }

    @media (max-width: 700px) {
        display: inline;
    }
`;