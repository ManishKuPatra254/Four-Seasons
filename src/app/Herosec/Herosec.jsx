import React, { Fragment } from 'react'
import Image from 'next/image'
import './Herosec.css';
import herosec from '../assets/hero.svg'
import herobuttonplay from '../assets/play.svg'
import { CiSearch } from "react-icons/ci";

export function Herosec() {
    return (
        <Fragment>
            <div className="main_hero_sec">
                <div className="sub_hero_sec">
                    <div className="main_hero_content">
                        <h1>Find your perfect place to stay</h1>
                        <p>Discover Your Oasis: Unforgettable Stays Await at FourSeasons</p>
                        <div className="sub_video">
                            <Image src={herobuttonplay} alt='' />
                            <span>Watch video</span>
                        </div>
                    </div>
                    <div className="sub_hero_image">
                        <Image src={herosec} alt='' className="w-100" />
                    </div>
                </div>


                <div className="searchbox_area">
                    <div className="inputs-searcharea">
                        <p>Enter Locations</p>
                        <input type="text" placeholder="Ex: Kerela" />
                    </div>
                    <div className="inputs-searcharea">
                        <p>Check in</p>
                        <input type="date" />
                    </div>
                    <div className="inputs-searcharea">
                        <p>Check out</p>
                        <input type="date" />
                    </div>
                    <div className="inputs-searcharea">
                        <p>Rooms</p>
                        <select class="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="inputs-searcharea">
                        <p>Adults</p>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <div className="inputs-searcharea">
                        <p>Children</p>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                    <button><CiSearch />Search</button>
                </div>
            </div>
        </Fragment>
    )
}
