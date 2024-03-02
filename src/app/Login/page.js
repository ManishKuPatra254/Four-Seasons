"use client";

import React, { Fragment, useState } from 'react'
import './Login.css'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import Alert from '@mui/material/Alert';
import { LoginUser } from '../Service/auth.service'
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const handleInputLoginChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const showAlert = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
    };

    const handleAlertClose = () => {
        setAlertMessage('');
        setAlertSeverity('');
    };

    const handleLoginUser = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            showAlert('Please fill in all required fields', 'error');
            return
        }
        try {
            const response = await LoginUser(formData);
            if (response.status === 200) {
                // localStorage.setItem('isLoggedIn', 'true');
                // setIsLoggedIn(true); // Set login status to true
                console.log(response)
                router.push('/');
                showAlert(response.msg, 'success');
            }
            else {
                showAlert(response.msg, 'error');
            }
        }
        catch (error) {
            console.log(error.msg)
        }
    }

    return (
        <Fragment>
            <Navbar

            // isLoggedIn={isLoggedIn}
            />
            <div className="main_login_form">
                <form>
                    {alertMessage && (
                        <Alert sx={{ mb: 2 }} severity={alertSeverity} onClose={handleAlertClose}>
                            {alertMessage}
                        </Alert>
                    )}

                    <h2>Login to your account</h2>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleInputLoginChange}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleInputLoginChange}
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button onClick={handleLoginUser} style={{ width: "100%", background: "#24AB70", border: "none", borderRadius: "8px", padding: "9px", color: "white", marginTop: "15px" }} >Login now</button>
                    <p style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>Dont have a account <Link href={'/Signup'}>Signup</Link></p>
                </form>
            </div>
        </Fragment>
    )
}

export default Login
