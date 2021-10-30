import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="banner-bg">
            <div className="text-center">
                <h1 className="text-white hero-title mb-3">Travel To The Beautiful Place</h1>
                <p className="hero-description">“The most beautiful thing in the world is, of course, the world itself” <br />– Wallace Stevens</p>
                <HashLink to="/#tour-package">
                    <button className="hero-btn mt-3">Booking Now</button>
                </HashLink>
            </div>
        </div>
    );
};

export default TopBanner;