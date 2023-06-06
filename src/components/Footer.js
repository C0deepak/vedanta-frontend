import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Footer = () => {
    return (
        <footer>
            <div className="footerLink">
                <Link to='/'>Home</Link>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="footerSocial">
                <i className='fa-brands fa-facebook-f'></i>
                <i className='fa-brands fa-youtube'></i>
                <i className='fa-brands fa-linkedin'></i>
                <i className='fa-brands fa-twitter'></i>
            </div>
            <div className="footerCopy">copyright &copy; IETE 2022-23</div>
        </footer>
    )
}

export default Footer