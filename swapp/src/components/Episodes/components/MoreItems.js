import styled from 'styled-components';

export const MoreItems = styled.div`
    button {
        display: block;
        width: 7em;
        height: 2.5em;
        margin: 0 auto;
        margin-bottom: 3em;
        background: ${({theme: {buttonBackground}}) => buttonBackground};
        border-color: ${({theme: {buttonBorderColor}}) => buttonBorderColor};
        color: ${({theme: {yellow}}) => yellow};
        border-radius: 5px;
        border-style: none;
        cursor: pointer;
    }
`;