import React from 'react';
import LoginPreview from '../../components/Login/LoginPreview';

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
    const client = useApolloClient();

    const [login, { loading, error }] = useMutation(LOG_IN, {
      onCompleted: ({ signIn: {token} }) => {
        localStorage.setItem('token', token);
        client.writeData({ data: { authenticated: true } });
      },
    });

    if(loading) return (<div>Loading...</div>);
    if(error) return (<div>{error.message}</div>);

    return (
        <LoginPreview 
            login={login}
        />
    )
}

export default Login;