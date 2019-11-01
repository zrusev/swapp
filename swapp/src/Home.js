import React from 'react';
import Views from './views/Views';
import Login from './views/Login/Login';

const Home = () => {
    const isAuthenticated = true;

    return (
        <>
            {
                isAuthenticated ? <Views /> : <Login />
            }
        </>
    )
}

export default Home;