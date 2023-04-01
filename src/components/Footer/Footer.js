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
            <div className="contact-box pointer up">
                <span className="contact-text">
                    <span>Contact Us</span>
                </span>
            </div>
            <div className="footer-options">
                <div className="op-cols">
                    <span className="op-text pointer up b">
                        <span>Work With Us</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Advertise With Us</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Support Us</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Business Advices</span>
                    </span>
                </div>
                <div className="op-cols">
                    <span className="op-text pointer up b">
                        <span>Private Coaching</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Our Work</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Our Commitment</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Our Team</span>
                    </span>
                </div>
                <div className="op-cols">
                    <span className="op-text pointer up b">
                        <span>About Us</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>FAQs</span>
                    </span>
                    <span className="op-text pointer up b">
                        <span>Report a Bug</span>
                    </span>
                </div>
            </div>      
        </div>
        <div className="landing-page-footer">
            <span className="copyright">
                <span>© 2022 Embrace, Inc. - All Rights Reserved</span>
            </span>
            <div className="terms-and-policy">
                <span className="terms">
                    <span>
                        Terms of use
                    </span>
                </span>
                <span className="policy">
                    <span>
                        Privacy policy
                    </span>
                </span>
            </div>
        </div>
        </>
    );
}

export default Footer;