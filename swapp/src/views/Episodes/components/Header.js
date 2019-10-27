import styled from 'styled-components';
import img from '../assets/81WjGytz7HL._SY445_.jpg';

export const Header = styled.span`
    display: block;
    position: relative;
    height: 20em;
    overflow: hidden;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(255, 255, 255, 0.15);
    background-blend-mode: overlay;
    border-radius: 5px 5px 0 0;
`;