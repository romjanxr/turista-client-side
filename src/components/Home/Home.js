import React from 'react';
import About from '../About/About';
import TopBanner from '../TopBanner/TopBanner';
import TourPackage from '../TourPackage/TourPackage';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <TourPackage />
            <About />
        </div>
    );
};

export default Home;