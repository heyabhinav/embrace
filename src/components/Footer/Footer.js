import React from "react";
import './Footer.css';

function Footer(){
    return(
        <>
        <div className="footer">  
            <div className="footer-logo">
                <img
                src="/images/circle.svg"
                alt="Ellipse871452"
                className="circle"
                />
                <img
                src="/images/triangle.svg"
                alt="Polygon11453"
                className="triangle"
                />
                <span className="embrace-heading">
                    <span>Embrace</span>
                </span>
            </div>
            <span className="landing-page-text006">
                <span>Los Angeles, California, USA</span>
            </span>
            <img
                src="/images/insta.svg"
                alt="riinstagramfill1444"
                className="social instagram"
            />
            <img
                src="/images/twitter.svg"
                alt="bitwitter1446"
                className="social twitter"
            />
            <img
                src="/images/facebook.svg"
                alt="icbaselinefacebook1448"
                className="social facebook"
            />
            <div className="contact-box landing-page-frame24">
                <span className="contact-text landing-page-text030">
                    <span>Contact Us</span>
                </span>
            </div>
            <div className="footer-options landing-page-frame103">
                <div className="op-cols">
                    <span className="op-text">
                        <span>Work With Us</span>
                    </span>
                    <span className="op-text">
                        <span>Advertise With Us</span>
                    </span>
                    <span className="op-text">
                        <span>Support Us</span>
                    </span>
                    <span className="op-text">
                        <span>Business Advices</span>
                    </span>
                </div>
                <div className="op-cols">
                    <span className="op-text">
                        <span>Private Coaching</span>
                    </span>
                    <span className="op-text">
                        <span>Our Work</span>
                    </span>
                    <span className="op-text">
                        <span>Our Commitment</span>
                    </span>
                    <span className="op-text">
                        <span>Our Team</span>
                    </span>
                </div>
                <div className="op-cols">
                    <span className="op-text">
                        <span>About Us</span>
                    </span>
                    <span className="op-text">
                        <span>FAQs</span>
                    </span>
                    <span className="op-text">
                        <span>Report a Bug</span>
                    </span>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Footer;