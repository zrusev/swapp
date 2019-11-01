import React from 'react';
import Pages from './Pages';
import Login from './Login/Login';

const Home = () => {
    const isAuthenticated = true;

    return (
        <>
            {
                isAuthenticated ? <Pages /> : <Login />
            }
        </>
    )
}

export default Home;