import React from 'react';

import { NavLink } from 'react-router-dom';

//import logo from '../assets/logo.svg';
//import Contact from './components/Contact';

const Navigation = () => {
    return (
        <div className="nav-container">
            <a className="logo" href="/">HDARPARISH</a>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/submissions">Submissions</NavLink>
            </div>

        </div>
    );
}

export default Navigation;
