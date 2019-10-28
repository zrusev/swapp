import styled from 'styled-components';
import { Link as RouterLink} from 'react-router-dom';

export const Link = styled(RouterLink)`
    margin: 0.5em 0;
    padding: 0.5em 0.5em;
    color: ${({theme: {appBarFontColor}}) => appBarFontColor};
    text-decoration: none;
    font-size: 0.8em;

    &:hover,
    &:focus {
        box-shadow: rgba(255, 255, 255, 0.45) 0px 0px 10px 0px;
    }
`;