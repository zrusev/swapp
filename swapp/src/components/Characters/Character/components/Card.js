import styled from 'styled-components';

export const Card = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme: { cardBackground } }) => cardBackground};
  border-color: ${({ theme: { cardBorderColor } }) => cardBorderColor};
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  border-radius: 5px;
  margin: 1em;
`;
