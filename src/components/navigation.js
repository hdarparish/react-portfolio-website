import React from "react"
import logo from '../assets/logo.svg';

class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="logo" src={logo} alt ="Logo" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
