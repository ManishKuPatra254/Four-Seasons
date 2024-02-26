"use client"
import React, { Fragment, useState } from 'react'
import './Login.css'
import Link from 'next/link'
import { Navbar } from '../Navbar/Navbar'
import Alert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Login() {

    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');


    const showAlert = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
    };

    const handleAlertClose = () => {
        setAlertMessage('');
        setAlertSeverity('');
    };

    const handleTogglePasswordVisibility = () => {
        setFormData((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }));
    };
    return (
        <Fragment>
            <Navbar />
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
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                // type={formData.showPassword ? 'text' : 'password'}
                                name='password'
                                // value={formData.password}
                                // onChange={handleInputChange}
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                            {/* <div className="input-group-append">
                                <button
                                    className="btn btn-dark"
                                    type='button'
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <button type="submit" style={{ width: "100%", background: "#24AB70", border: "none", borderRadius: "8px", padding: "9px", color: "white", marginTop: "15px" }} >Login now</button>
                    <p style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>Dont have a account <Link href={'/Signup'}>Signup</Link></p>
                </form>
            </div>
        </Fragment>
    )
}

export default Login
