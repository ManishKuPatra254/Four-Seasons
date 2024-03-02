"use client";

import React, { Fragment, useEffect, useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import dynamic from "next/dynamic";
import Link from 'next/link';

const Navbar = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(
    //     typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true'
    // );

    // useEffect(() => {
    //     setIsLoggedIn(typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true');
    // }, []);

    return (
        <Fragment>
            <div className="main_nav">
                {/* <h2>FourSeasons</h2> */}
                <h2>FourSeasons</h2>
                <ul>
                    <li>Booking</li>
                    <li>Facilities</li>
                    <li>About Us</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
                <Link href={'/Login'}>
                    <button>Login</button>
                </Link>
            </div>
        </Fragment>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
