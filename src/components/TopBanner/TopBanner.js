import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="banner-bg">
            <div className="text-center">
                <h1 className="text-white hero-title mb-3">Travel To The Beautiful Place</h1>
                <p className="hero-description">“The most beautiful thing in the world is, of course, the world itself” <br />– Wallace Stevens</p>
                <button className="hero-btn mt-3">Booking Now</button>
            </div>
        </div>
    );
};

export default TopBanner;