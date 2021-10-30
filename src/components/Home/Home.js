import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import TopBanner from '../TopBanner/TopBanner';
import TourPackage from '../TourPackage/TourPackage';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <TourPackage />
            <About />
            <Contact />
        </div>
    );
};

export default Home;