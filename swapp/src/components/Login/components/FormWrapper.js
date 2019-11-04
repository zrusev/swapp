import styled from 'styled-components';

export const FormWrapper = styled.div`
  background: ${({ theme: { cardBackground } }) => cardBackground};
  padding: 0.5em;
  border-radius: 5px;
`;
