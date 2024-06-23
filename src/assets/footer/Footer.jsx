import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <h3>Copyright 2024. All rights are reserverd</h3>
        <div className="footer-icons">
            <span className='icons'>
              <a href="https://github.com/agussch" className='git'><img src="https://agustinsch.dev/recursos/imagenes/github.png" alt="" /></a>
              <a href="https://www.linkedin.com/in/agustin-schanwarzkoff-001732279/" className='linkedin'><img src="https://agustinsch.dev/recursos/imagenes/linkedin.png" alt="" /></a>
            </span>
        </div> 
    </footer>
  )
}

export default Footer