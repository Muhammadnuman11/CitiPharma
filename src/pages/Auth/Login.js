import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const initialState = {
    email: "",
    password: "",
}

export default function Login() {
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate()
    // Get current year
    const year = new Date().getFullYear()

    // Show and Hide Password
    const [show, setShow] = useState("password")
    const [hide, setHide] = useState("Show")
    const showPass = () => {
        if (show === "password") {
            setShow("text")
            setHide("Hide")
        }
        else {
            setShow("password")
            setHide("Show")
        }
    }

    // Login Here
    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        let { email, password } = state

        email = email.trim()
        password = password.trim()

        if (!email) {
            return window.notify("Please enter email", "error")
        }
        if (!password) {
            return window.notify("Please enter password", "error")
        }

        let userData = { email, password };
        console.log(userData)

        try {
            const response = await axios.post(`http://localhost:5000/api/users/login`, userData);
            // console.log('Item updated successfully:', response.data);
            window.notify("User login successfully:", "success")
            setState(initialState)
            setAuth({
                ...auth,
                user: response.data,
            })
            localStorage.setItem('auth', JSON.stringify(response.data))
            navigate("/dashboard")
        } catch (error) {
            // console.error('Error updating item:', error);
            window.notify("Error user login:", "error")
        }

    }

    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <main className="form-signin shadow">
                <form>
                    <img className="mb-4" src="images/logo.png" alt="" width="70" height="70" />
                    <h1 className="h3 mb-3 fw-bold">Login Here</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control shadow-none" id="floatingInput" placeholder="name@example.com" name='email' value={state.email} onChange={handleChange} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type={show} className="form-control shadow-none" id="floatingPassword" placeholder="Password" name='password' value={state.password} onChange={handleChange} />
                        <span className='show' onClick={showPass}>{hide}</span>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input shadow-none" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" onClick={handleLogin}>Login</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; {year} Citi Pharma</p>
                </form>
            </main>
        </div>
    )
}
