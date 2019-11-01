import styled from 'styled-components';

const ButtonField = styled.button`
    width: 5em;
    height: 2.5em;
    margin-left: auto;
    background: ${({theme: {buttonBackground}}) => buttonBackground};
    border-color: ${({theme: {buttonBorderColor}}) => buttonBorderColor};
    color: ${({theme: {buttonFontColor}}) => buttonFontColor};
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
`;

export const Button = styled(
    ButtonField
)`
    margin-top: 0.8em;
    margin-right: 4em;
    margin-bottom: 0.8em;
    margin-left: auto;
`;