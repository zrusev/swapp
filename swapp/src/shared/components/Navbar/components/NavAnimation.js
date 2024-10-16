import styled from 'styled-components';

export const NavAnimation = styled.div`
  @media (max-width: 700px) {
    grid-column: 1 / 4;
  }

  &.NavAnimation-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  &.NavAnimation-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 350ms,
      transform 350ms;
  }

  &.NavAnimation-exit {
    opacity: 1;
  }

  &.NavAnimation-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity 350ms,
      transform 350ms;
  }
`;
