import React from "react";
import './Working.css'

function Working(){
    return (
        <>
        <div className="howitworks">
            <div className="container">
                <div className="col-1">
                    <div className="how-it-works-box">
                        <span className="how-it-works-heading">
                            <span>How It Works</span>
                        </span>
                        <span className="how-it-works-text">
                            <span>
                                Use this section to describe your company and the products
                                you offer. You could share your company’s story and details
                                about why you are in business.
                            </span>
                        </span>
                    </div>
                    <img
                        src="/images/Rectangle 160.svg"
                        alt="Buildings"
                        className="building-img"
                    />
                </div>
                <div className="col-2">
                    <div className="row-1">
                        <div className="row-1-col">
                            <div className="img-head">
                                <div className="key-img">
                                    <img
                                        src="/images/Vector(0).svg"
                                        className=""
                                    />
                                </div>
                                <span className="key-heading">
                                    <span>Ideation</span>
                                </span>
                            </div>
                            <span className="key-text">
                                <span>
                                Use this section to describe your company and the products
                                you offer. You could share your company's
                                </span>
                            </span>
                        </div>
                        <div className="row-1-col">
                            <div className="img-head">
                                <div className="key-img">
                                    <img
                                    src="/images/Vector (1).svg"
                                    className=""
                                    />
                                </div>
                                <span className="key-heading">
                                    <span>Budget</span>
                                </span>
                            </div>
                            <span className="key-text">
                                <span>
                                Use this section to describe your company and the products
                                you offer. You could share your company's
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="row-1-col">
                            <div className="img-head">
                                <div className="key-img">
                                    <img
                                        src="/images/Vector (2).svg"
                                        className=""
                                    />
                                </div>
                                <span className="key-heading">
                                    <span>Perfomance</span>
                                </span>
                            </div>
                            <span className="key-text">
                                <span>
                                Use this section to describe your company and the products
                                you offer. You could share your company's
                                </span>
                            </span>
                        </div>
                        <div className="row-1-col">
                            <div className="img-head">
                                <div className="key-img">
                                    <img
                                        src="/images/Vector (3).svg"
                                        className=""
                                    />
                                </div>
                                <span className="key-heading">
                                    <span>Speed</span>
                                </span>
                            </div>
                            <span className="key-text">
                                <span>
                                Use this section to describe your company and the products
                                you offer. You could share your company's
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Working;