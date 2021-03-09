import React from 'react'
import Logo from "../../assets/img/wavefly-logo.svg"
import "../../styles/header.css"

function Header() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Wavefly Logo" srcset=""/>
            </div>
            <ul>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Let's Talk</a></li>
            </ul>
        </nav>
    )
}

export default Header
