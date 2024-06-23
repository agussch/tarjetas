import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="h-header">
        <nav className="h-nav">
            <h3 className="logo">Agustinsch.dev</h3>
            <ul className="h-ul">
                <li className="home">
                    <a href="#home">Home</a>
                </li>
                <li className="about-p">
                    <a href="#about">About</a>
                </li>
                <li className="projects">
                    <a href="#projects">Projects</a>
                </li>
                <li className="contact">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header