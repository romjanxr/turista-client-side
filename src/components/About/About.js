import { faArchive, faGlobeAsia, faLock, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutImg from '../../images/why-choose-us.png'
import './About.css'

const About = () => {
    return (
        <div className="w-80 mx-auto my-5" id="about">
            <div className="text-center section-title mb-5">
                <span>Why Choose Us?</span>
                <h2>Every Time We Provide <br />
                    Best Service</h2>
            </div>
            <div className="row g-5">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <div className="row g-5 my-4">
                        <div className="col-md-6">
                            <div className="about-icon mb-3">
                                <FontAwesomeIcon icon={faArchive} />
                            </div>
                            <h4 className="package-title">Exclusive Packages</h4>
                            <p>You will get world class best exclusive packages from us</p>
                        </div>
                        <div className="col-md-6">
                            <div className="about-icon mb-3">
                                <FontAwesomeIcon icon={faGlobeAsia} />
                            </div>
                            <h4 className="package-title">World Class Service</h4>
                            <p>You will get world class best services from us</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="about-icon mb-3">
                                <FontAwesomeIcon icon={faUserTie} />
                            </div>
                            <h4 className="package-title">Best Travel Guide</h4>
                            <p>We have best trained very friendly skilled travel guide </p>
                        </div>
                        <div className="col-md-6">
                            <div className="about-icon mb-3">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <h4 className="package-title">100% Secure</h4>
                            <p>We are very much concern about your safety and privacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;