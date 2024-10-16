import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Container,
  Title,
  FormWrapper,
  Form,
  WarningBar,
  Input,
  Button,
} from './components/_index';

import useSignInForm from './hooks/useSignInForm';

const LoginPreview = ({ login, error }) => {
  const { inputs, handleInputChange, handleSubmit, overwriteCredentials } =
    useSignInForm(login);

  useLayoutEffect(() => {
    setTimeout(() => {
      overwriteCredentials({
        email: process.env.REACT_APP_DEMO_USER,
        password: process.env.REACT_APP_DEMO_PASSWORD,
      });

      return () => clearTimeout();
    }, 1000);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>
          <h1>SWAPP</h1>
        </Title>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            {error && <WarningBar>{error}</WarningBar>}
            <Input
              inputType="text"
              placeholder="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
            <Input
              inputType="password"
              placeholder="password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              required
            />
            <Button type="submit">
              <b>Login</b>
            </Button>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

LoginPreview.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default LoginPreview;
