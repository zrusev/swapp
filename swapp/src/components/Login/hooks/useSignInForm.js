import { useState } from 'react';

const useSignInForm = login => {
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    login({
      variables: {
        email: inputs.email,
        password: inputs.password,
      },
    });
  };

  const handleInputChange = event => {
    event.persist();

    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useSignInForm;
