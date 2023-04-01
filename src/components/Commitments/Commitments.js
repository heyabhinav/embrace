import React from "react";
import './Commitments.css'

function Commitments(){
    return(
        <>
        <div className="our-commitments">
            <div className="container">
                <div className="col-1">
                    <div className="row-1">
                        <div className="revenue">
                            <span className="highlight-text-bold">
                                <span>245%</span>
                            </span>
                            <span className="highlight-text">
                                <span>More revenues for the brand</span>
                            </span>
                        </div>
                        <div className="audience">
                            <span className="highlight-text-bold">
                                <span>130K+</span>
                            </span>
                            <span className="highlight-text">
                                <span>Audiences reached across platfrom</span>
                            </span>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="brands">
                            <span className="highlight-text-bold">
                                <span>50+</span>
                            </span>
                            <span className="highlight-text">
                                <span>brands work with us</span>
                            </span>
                        </div>
                        <div className="partnership">
                            <span className="highlight-text-bold">
                                <span>24+</span>
                            </span>
                            <span className="highlight-text">
                                <span>
                                    Use this section to describe your
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                    <div className="commitments-textbox">
                        <div className="head-text">
                            <span className="commitments-heading">
                                <span>Our Commitments</span>
                            </span>
                            <span className="commitments-text">
                                <span>
                                    Use this section to describe your company and the products
                                    you offer. You could share your company's story and details
                                    about why you are in business. Use this section to describe
                                    your company and the products you offer. You could share
                                    your company's story and details about why you are in
                                    business.
                                </span>
                            </span>
                        </div>
                    <div className="learn-more-img pointer">
                            <span className="commitment-learn-more-text">
                                <span>Learn More</span>
                            </span>
                            <img
                            src="/images/Vector.svg"
                            alt="Arrow"
                            className="vector4"
                            />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Commitments;