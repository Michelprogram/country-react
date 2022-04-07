import React from 'react';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import Countries from '../Components/Countries';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;