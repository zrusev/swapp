import styled from 'styled-components';

export const ExitContainer = styled.div`
    padding: 0;
    display: block;
    content: '';
    cursor: pointer;
    background: ${({theme: {appBarExitBackground}}) => appBarExitBackground};
    border-radius: 5px;
`;