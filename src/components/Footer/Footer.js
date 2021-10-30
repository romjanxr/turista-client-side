import React from 'react';
import footerImg from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg p-5">
            <div className="row w-80 mx-auto pt-4">
                <div className="col-md-3">
                    <img width="150px" src={footerImg} alt="" />
                    <br />
                    <p className="copyright">Copyright © 2021 | All Rights Reserved.</p>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title">Quick Links</h3>
                    <p className="footer-text">Home</p>
                    <p className="footer-text">Term</p>
                    <p className="footer-text">Privacy &amp; Policy</p>
                    <p className="footer-text">Blog</p>
                    <p className="footer-text">Contact Us</p>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title">About US</h3>
                    <p className="footer-text">Our Story</p>
                    <p className="footer-text">Travel Blog &amp; Tips</p>
                    <p className="footer-text">Working With Us</p>
                    <p className="footer-text">Tour Guid</p>
                    <p className="footer-text">Be Our Partner</p>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title">Support</h3>
                    <p className="footer-text">Customer Support</p>
                    <p className="footer-text">Terms &amp; Condition</p>
                    <p className="footer-text">Privacy &amp; Policy</p>
                    <p className="footer-text">Forum</p>
                    <p className="footer-text">Tour Guide</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;