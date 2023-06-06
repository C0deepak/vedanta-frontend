import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
import '../pages/auth/auth.css';

const Login = () => {

    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const [luser, setLuser] = useState({
        email: '', password: ''
    })

    let name, value;
    const handleInputsLogin = (e) => {
        name = e.target.name;
        value = e.target.value

        setLuser({ ...luser, [name]: value })
    }

    const PostDataLogin = async (e) => {
        e.preventDefault();
        const { email, password } = luser;
        const res = await fetch('api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid! Details Entered!");
            console.log("Invalid something!");
        }
        else {
            dispatch({type: 'USER', payload: true})
            window.alert("Login Successfull!");
            console.log("Login Successfull!");

            navigate('/')
        }
    }

    return (
        <div className='loginContainer'>
            <p>LOGIN</p>
            <p>Already Registered!</p>
            <form method='POST'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={luser.email} onChange={handleInputsLogin}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={luser.password} onChange={handleInputsLogin}/>
                </div>
                <button type="submit" class="btn btn-danger loginButton" onClick={PostDataLogin}>Log In</button>
            </form>

            <img src="/img/login.png" alt="" />
        </div>
    )
}

export default Login