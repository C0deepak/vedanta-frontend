import React, { useContext } from 'react'
import { UserContext } from '../../App'
import Login from '../../components/Login'
import Register from '../../components/Register'
import './auth.css'

const Auth = () => {
    return (
        <>
            <div className="auth">
                <Login />
                <Register />
            </div>
        </>
    )
}

export default Auth