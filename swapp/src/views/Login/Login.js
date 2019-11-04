import React, { useState } from 'react';
import LoginPreview from '../../components/Login/LoginPreview';
import Spinner from '../../shared/components/Spinner/Spinner';

import gql from 'graphql-tag.macro';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

const LOG_IN = gql`
    mutation ($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            token
        }
    }
`;

const Login = () => {
    const [error, setError] = useState(null);
    const client = useApolloClient();

    const [login, { loading }] = useMutation(LOG_IN, {
      onCompleted: ({ signIn: {token} }) => {
        localStorage.setItem('token', token);
        client.writeData({ data: { authenticated: true } });
      },
      onError: ({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ message }) => setError(message));
        }
    
        if (networkError) {
            setError(networkError.message);
        }       
      },
    });

    if(loading) return <Spinner />;
    
    return (
        <LoginPreview 
            login={login}
            error={error}
        />
    )
}

export default Login;