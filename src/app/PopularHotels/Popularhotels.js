import React, { Fragment } from 'react'
import './popular.css';
import Image from 'next/image';
import hotels1 from '../assets/h1.svg'
import hotels2 from '../assets/h2.svg'
import hotels3 from '../assets/h3.svg'
import hotels4 from '../assets/h4.svg'
import facilities1 from '../assets/C1.svg'
import facilities2 from '../assets/C2.svg'
import facilities3 from '../assets/C3.svg'
import facilities4 from '../assets/C4.svg'

const Popularhotels = () => {
    return (
        <Fragment>
            <div className="main_popular_hotels">
                <div className="sub_popular_hotels">
                    <h3>Our most popular hotels</h3>
                    <button>View All</button>
                </div>

                <div className="cards_hotels_main">
                    <div className="cards_hotels">
                        <Image src={hotels1} alt='' />
                        <span>London NW8 7JT England</span>
                        <h4>Danubius Hotel Regents Park</h4>
                        <p>$200 Per Night</p>
                    </div>
                    <div className="cards_hotels">
                        <Image src={hotels2} alt='' />
                        <span>London NW8 7JT England</span>
                        <h4>The Resident Soho</h4>
                        <p>$200 Per Night</p>
                    </div>
                    <div className="cards_hotels">
                        <Image src={hotels3} alt='' />
                        <span>London NW8 7JT England</span>
                        <h4>London Bridge Hotel</h4>
                        <p>$200 Per Night</p>
                    </div>
                </div>


                <div className="main_facilities">
                    <div className="">
                        <h1>We do our best facilities provide you</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy </p>
                        <button>Contact Now</button>
                    </div>

                    <div className="main_sub_facilities">
                        <div className="sub_new_facilities">
                            <Image src={facilities1} alt='' />
                            <p>Private Workspace</p>
                        </div>
                        <div className="sub_new_facilities">
                            <Image src={facilities2} alt='' />
                            <p>Parking Area</p>
                        </div>
                        <div className="sub_new_facilities">
                            <Image src={facilities3} alt='' />
                            <p>Breakfast</p>
                        </div>
                        <div className="sub_new_facilities">
                            <Image src={facilities4} alt='' />
                            <p>Free Wifi</p>
                        </div>
                    </div>
                </div>

                <div className="main_hotels_discovery">
                    <Image src={hotels4} alt='' />
                    <div className="">
                        <h1>Discover our History</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys </p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <button>Explore more</button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}


export default Popularhotels;