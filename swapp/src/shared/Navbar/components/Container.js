import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-color: ${({theme: {appBarBorderColor}}) => appBarBorderColor};
    background: ${({theme: {appBarBackground}}) => appBarBackground};
`;