import React from "react";
import './OurTeam.css';

function OurTeam(){
    return(
        <>
        <div className="our-team">
            <div className="team-container">
                <div className="image-container">
                    <div className="image-container-1">
                        <img
                        src="/images/Rectangle 185.svg"
                        alt="Rectangle1851537"
                        className="rectangle185 up"
                        />
                        <img
                        src="/images/Rectangle 184.svg"
                        alt="Rectangle1841538"
                        className="rectangle184 up "
                        />
                        <img
                        src="/images/Rectangle 181.svg"
                        alt="Rectangle1811539"
                        className="rectangle181 up"
                        />
                    </div>
                    <div className="image-container-2">
                        <img
                        src="/images/Rectangle 182.svg"
                        alt="Rectangle1821541"
                        className="rectangle182 up "
                        />
                        <img
                        src="/images/Rectangle 183.svg"
                        alt="Rectangle1831542"
                        className="rectangle183 up"
                        />
                        <img
                        src="/images/Rectangle 186.svg"
                        alt="Rectangle1861543"
                        className="rectangle186 up"
                        />
                    </div>
                </div>
                <div className="text-container">
                    <div className="text-area">
                        <div className="our-team-text-heading">
                            <span className="our-team-heading">
                                <span>Meet Our Team</span>
                            </span>
                            <span className="our-team-subheading">
                                <span>
                                Use this section to describe your company and the
                                </span>
                            </span>
                        </div>
                        <span className="our-team-text">
                        <span>
                            Use this section to describe your company and the products
                            you offer. You could share your company's story and details
                            about why you are in business.
                        </span>
                        </span>
                    </div>
                    <div className="meet-team-learn-more pointer up">
                        <span className="meet-team-learn-more-text">
                            <span>Learn More</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default OurTeam;