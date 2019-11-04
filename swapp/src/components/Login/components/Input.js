import styled from 'styled-components';
import logo from '../assets/cloud-computing.png';

const InputField = styled.input.attrs(props => ({
  type: props.inputType,
}))`
  max-width: 100%;
  height: auto;
  text-indent: 10px;
  background: ${({ theme: { inputBackground } }) => inputBackground};
  border-color: ${({ theme: { inputBorderColor } }) => inputBorderColor};
  color: ${({ theme: { inputFontColor } }) => inputFontColor};
  border-radius: 5px;
  &:focus {
    background-image: url(${logo});
    background-position: right center;
    background-repeat: no-repeat;
  }
`;

export const Input = styled(InputField)`
  margin: 0.8em 4em;
`;
