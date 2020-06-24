import React from 'react';

import { NavLink } from 'react-router-dom';

//import logo from '../assets/logo.svg';
//import Contact from './components/Contact';
/*
class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="logo" src={logo} alt ="Logo" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}
*/


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
