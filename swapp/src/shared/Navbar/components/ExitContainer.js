import styled from 'styled-components';
import { Item } from './Item';

export const ExitContainer = styled(
    Item
)`
    display: block;
    content: '';
    cursor: pointer;
    background: ${({theme: {appBarExitBackground}}) => appBarExitBackground};
    border-radius: 5px;
`;