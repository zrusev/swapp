import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-area: nav;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: flex-end;
    border-color: ${({theme: {appBarBorderColor}}) => appBarBorderColor};
    background: ${({theme: {appBarBackground}}) => appBarBackground};

    a:hover {
        transform: scale(1.1);
    }

    @media (max-width: 700px) {
        grid-template-rows: repeat(4, auto);
        grid-template-columns: none;
        grid-row-gap: 20px;
    
        background: rgba(40, 44, 47, 0.95);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

        display: flex;
        flex-direction: column;
    }
`;