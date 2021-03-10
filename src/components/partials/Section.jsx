import React from 'react'
import Button from "../partials/Button"
import "../../styles/section.css"
import Hero from "../../assets/img/collaborate.svg"
import Phone from "../../assets/img/hero-phone.png"
import AppleWatch from "../../assets/img/hero-applewatch.png"

function Section({title, subtitle, button, img}) {
    return (
        <header className="header_section">
            <div className="left_section">
                <p>DRIVING DIGITAL TRANSFORMATION</p>
                <h1>Development of software and digital solutions for companies</h1>
                <Button link="#" content="Let's talk of your project" />
            </div>
            <div className="right_section">
                <img src={Hero} alt="hero laptop"/>
                {/* <img src={AppleWatch} alt="apple watch"/>
                <img src={Phone} alt="hero phone"/> */}
            </div>
        </header>
    )
}

export default Section
