import React, { Fragment } from 'react'
import './page.css'
import { Navbar } from '../Navbar/Navbar'

function Login() {
    return (
        <Fragment>
            <Navbar />
            <form style={{ width: "40%", margin: "auto", marginTop: "80px" }}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" style={{ width: "100%", background: "#24AB70", border: "none", borderRadius: "8px", padding: "9px", color: "white", marginTop: "15px" }} >Login now</button>
                <p style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>Dont have a account <a href="">Sign up</a></p>
            </form>
        </Fragment>
    )
}

export default Login
