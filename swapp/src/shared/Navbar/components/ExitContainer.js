import styled from 'styled-components';
import { Item } from './Item';

export const ExitContainer = styled(
    Item
)`
    padding: 0;
    display: block;
    content: '';
    cursor: pointer;
    background: ${({theme: {appBarExitBackground}}) => appBarExitBackground};
    border-radius: 5px;
`;