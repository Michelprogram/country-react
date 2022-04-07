import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to={"/"} className={(nav): string => nav.isActive ? "nav-active" : ""}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to={"/about"} className={(nav): string => nav.isActive ? "nav-active" : ""}>
                    <li>About go</li>
                </NavLink>
            </ul>
        </div>
    );
};


export default Navigation;