import React, { Fragment } from 'react'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';


export function Navbar() {
    return (
        <Fragment>
            <div className="main_nav">
                <h2>FourSeasons</h2>
                <ul>
                    <li>Booking</li>
                    <li>Facilities</li>
                    <li>About Us</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
                <Link href={'/Login'}> <button>Login</button></Link>
            </div>
        </Fragment>
    )
}
