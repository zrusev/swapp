import styled from 'styled-components';

export const Item = styled.div`
    a {
        width: 100%;
        height: auto;
        color: ${({theme: {appBarFontColor}}) => appBarFontColor};
        text-decoration: none;
    }
`;