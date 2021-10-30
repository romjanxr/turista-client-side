import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import LocationMap from '../LocationMap/LocationMap';
import TopBanner from '../TopBanner/TopBanner';
import TourPackage from '../TourPackage/TourPackage';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <TourPackage />
            <About />
            <Contact />
            <LocationMap />
        </div>
    );
};

export default Home;