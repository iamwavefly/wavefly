import React from 'react'
import Header from "../components/partials/Header"
import "../styles/index.css"
import Section from "../../src/components/partials/Section"
import Strategy from "../../src/components/partials/Strategy_section"
import Process from "../../src/components/partials/Process"
import Services from "../../src/components/partials/Services"

function App() {
    return (
        <div>
            <Header />
            <Section />
            <Strategy />
            <Process />
            <Services />
        </div>
    )
}

export default App
