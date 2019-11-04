import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme: { black } }) => black};

  @media (max-width: 700px) {
    width: 61vw;
    height: 62vh;
  }

  @media (min-width: 700px) {
    width: 28vw;
    height: 19vh;
  }

  @media (min-width: 980px) {
    width: 30vw;
    height: 62vh;
  }
`;
