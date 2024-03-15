import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setUser, fetchHighscore} from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json();

        if (response.ok) {
            
            localStorage.setItem('user', JSON.stringify(json));

          
            dispatch(setUser(json))
            dispatch(fetchHighscore())
        }
    }

    return (
        <div className='login-container' >
                        <div className="login-content">
                            <h1>Login</h1>
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <label>Email : </label> <br />
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                                </div>

                                <div>
                                    <label>Password : </label> <br />
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                                </div>
                                <button type="submit">Submit</button>
                            </form>

                            <button onClick={ () => navigate("/signup") } >Not a user? Signup</button>
                        </div>
        </div>
    )
}

export default Login
