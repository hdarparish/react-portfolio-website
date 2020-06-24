import React from 'react';

import { NavLink } from 'react-router-dom';

//import logo from '../assets/logo.svg';
//import Contact from './components/Contact';

const Navigation = () => {
    return (
        <div className="nav-container">
            <h1 className="logo">HDARPARISH</h1>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

        </div>
    );
}

export default Navigation;
