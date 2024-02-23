import React, { Fragment } from 'react'
import Image from 'next/image'
import './Herosec.css';
import herosec from '../assets/hero.svg'
import herobuttonplay from '../assets/play.svg'

export function Herosec() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col p-4">
                        <h1>Find your perfect place to stay</h1>
                        <p>Discover Your Oasis: Unforgettable Stays Await at FourSeasons</p>
                        <div className="sub_video">
                            <Image src={herobuttonplay} alt='' />
                            <p>Watch video</p>
                        </div>
                    </div>
                    <div className="col">
                        <Image src={herosec} alt='' className="w-100" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
