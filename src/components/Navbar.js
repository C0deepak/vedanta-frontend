import React, { useContext } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import '../style.css'

const Navbar = () => {
    const { state } = useContext(UserContext)

    return (
        <nav>
            <div className="navLogo">
                <img src="/img/jeep.png" alt="" />
            </div>
            <div className="navLink">
                <Link to='/'>Home</Link>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="navProfile">
                {state ? (
                    <div>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/logout'>Logout</Link>
                        {/* <Link to='/scanqr'>Scan Qr</Link> */}
                    </div>
                ) : (
                    <div>
                        <Link to='/auth'>Login</Link>
                        <Link to='/auth'>Register</Link>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar