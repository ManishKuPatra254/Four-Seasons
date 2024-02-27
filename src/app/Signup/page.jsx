"use client";

import React, { Fragment, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Signup.css'
import Link from 'next/link'
import { SignupUser } from '../Service/auth.service'
import Alert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Signup() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');

    const handleSignupUser = async (e) => {
        e.preventDefault();
        if (!formData.first_name || !formData.last_name || !formData.email || !formData.password) {
            showAlert('Please fill in all required fields', 'error');
            return;
        }
        try {
            const response = await SignupUser(formData);
            console.log(response);
            if (response.status === 200) {
                showAlert(response.msg, 'success');
                // setFormData('');
            }
            else {
                showAlert(response.msg, 'error');
            }
        } catch (error) {
            showAlert(error.msg, 'error');
        }
    }


    const handleInputChange = (e) => {
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

    const handleTogglePasswordVisibility = () => {
        setFormData((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }));
    };

    return (
        <Fragment>
            <Navbar />
            <div className="main_signup_form">
                <form onSubmit={handleSignupUser}>
                    {alertMessage && (
                        <Alert sx={{ mb: 2 }} severity={alertSeverity} onClose={handleAlertClose}>
                            {alertMessage}
                        </Alert>
                    )}

                    <h2>Create an account</h2>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">First name</label>
                        <input type="text"
                            name='first_name'
                            value={formData.first_name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Last name</label>
                        <input type="text"
                            name='last_name'
                            value={formData.last_name}
                            onChange={handleInputChange}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type={formData.showPassword ? 'text' : 'password'}
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn"
                                    type='button'
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" style={{ width: "100%", background: "#24AB70", border: "none", borderRadius: "8px", padding: "9px", color: "white", marginTop: "15px" }} >Create account</button>
                    <p style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>Dont have a account <Link href={'/Login'}>Login</Link></p>
                </form>
            </div>
        </Fragment>
    )
}

export default Signup
