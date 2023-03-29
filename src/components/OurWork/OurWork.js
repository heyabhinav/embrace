import React from "react";
import './OurWork.css'

function OurWork(){
    return (
        <>
        <div className="our-work">
            <div className="rows-center">
                <div className="our-work-text-images">
                    <div className="our-work-text">
                        <span className="our-work-heading">
                            <span>Our Work</span>
                        </span>
                        <span className="our-work-subtext">
                            <span>
                                Use this section to describe your company and the products
                                you offer. You could share your company's story and details
                                about why you are in business.
                            </span>
                        </span>
                    </div>
                    <div className="our-work-images">
                        <div className="apple-img-text">
                            <img
                                src="/images/Rectangle 161.svg"
                                alt="Apple"
                                className="brand-img"
                            />
                            <div className="brand-text landing-page-frame63">
                                <span className="brand-heading landing-page-text094">
                                    <span>Apple</span>
                                </span>
                                <span className="brand-subtext landing-page-text096">
                                    <span>
                                        Use this section to describe your
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="cola-img-text">
                            <img
                                src="/images/Rectangle 161-1.svg"
                                alt="CocaCola"
                                className="brand-img landing-page-rectangle1611"
                            />
                            <div className="brand-text landing-page-frame631">
                                <span className="brand-heading landing-page-text098">
                                    <span>Coca-cola</span>
                                </span>
                                <span className="brand-subtext landing-page-text100">
                                    <span>
                                        Use this section to describe your
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="nike-img-text">
                            <img
                                src="/images/Rectangle 161-2.svg"
                                alt="Rectangle1611586"
                                className="brand-img landing-page-rectangle1612"
                            />
                            <div className="brand-text landing-page-frame632">
                                <span className="brand-heading landing-page-text102">
                                    <span>Nike</span>
                                </span>
                                    <span className="brand-subtext landing-page-text104">
                                    <span>
                                        Use this section to describe your
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see-more">
                    <span className="more-text">
                        <span>See More</span>
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}

export default OurWork;