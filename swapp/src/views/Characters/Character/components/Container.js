import styled from 'styled-components';

export const Container = styled.div`
    max-width: 65vw;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    border-top: 5px solid ${({theme: {lineColor}}) => lineColor};
`;