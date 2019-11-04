import styled from 'styled-components';

export const Summary = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme: { cardBackground } }) => cardBackground};
  margin: 1em;
  padding: 1em;
  font-size: 0.8em;
`;
