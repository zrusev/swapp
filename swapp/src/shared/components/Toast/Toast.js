import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    0%{
        opacity:0;
        transform: translateY(20em);
    }

    100%{
        opacity:1;
        transform: translateY(0);
    }
`;

const Container = styled.div`
    position: fixed;
    bottom: 2vh;
    left: 1vw;
    border-radius: 4px;
    box-shadow: #310808 2px 2px 7px;
    background-color: ${({theme: {background}}) => background};
    padding: 0.5em;
    color: ${({theme: {primaryHeadingFontColor}}) => primaryHeadingFontColor};
    
    opacity:1;
    animation: ${kf} 500ms cubic-bezier(.23,.82,.16,1.46);
    animation-iteration-count: 1;
`;

const Toast = ({children}) =>  (
    <Container>
        <p>{children}</p>
    </Container>
);

export default Toast;