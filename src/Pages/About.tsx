import React, { useContext } from 'react';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import UserContext from '../UserContext';

import { Button } from 'antd';

import FakeUser from '../data/User';

const About = () => {

    const [user, setUser] = useContext(UserContext)

    return (
        <div>
            <Logo />

            <Navigation />
            <h1>About le go</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatibus! Magni sit eveniet, modi ratione deserunt vel voluptas ab similique eius corporis illum cupiditate sed quaerat, officiis quam nobis id.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptatibus! Magni sit eveniet, modi ratione deserunt vel voluptas ab similique eius corporis illum cupiditate sed quaerat, officiis quam nobis id.</p>
            <p className="context">{JSON.stringify(user, null, 2)}</p>
            <Button type="primary" onClick={() => setUser(FakeUser)}>Login</Button>
        </div>
    );
};

export default About;