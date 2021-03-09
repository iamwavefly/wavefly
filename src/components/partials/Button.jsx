import React from 'react'
import "../../styles/button.css"

function Button({content, link}) {
    return <a href={link} className="re-button">{content}</a>
}

export default Button
