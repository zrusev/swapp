import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Person = styled(Link)`
    display: flex;
    position: relative;
    margin-bottom: 1em;
    color: #ABB1BA;
    background: #333;
    border-color: #3C4858;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
    border-radius: 5px;
    max-width: 14em;
`;