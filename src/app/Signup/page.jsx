"use client";

import React, { Fragment, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import Link from 'next/link'
import { SignupUser } from '../Service/auth.service'

function Signup() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })


    const handleSignupUser = async (e) => {
        e.preventDefault();
        try {
            const response = await SignupUser(formData)
            console.log(response);
            alert(response.msg);
        }
        catch (error) {
            alert(error.msg)
        }
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <Fragment>
            <Navbar />
            <form style={{ width: "40%", margin: "auto", marginTop: "80px" }} onSubmit={handleSignupUser}>
                <h2>Signup to your account</h2>
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
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                        className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" style={{ width: "100%", background: "#24AB70", border: "none", borderRadius: "8px", padding: "9px", color: "white", marginTop: "15px" }} >Signup now</button>
                <p style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>Dont have a account <Link href={'/Login'}>Login</Link></p>
            </form>
        </Fragment>
    )
}

export default Signup
