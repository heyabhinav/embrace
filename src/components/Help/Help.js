import React from "react";
import './Help.css';

function Help(){
    return (
        <>
        <div className="landing-page-help">
            <div className="landing-page-frame93">
                <div className="landing-page-frame90">
                    <div className="ques-box top">
                        <div className="ques-frame">
                        <span className="question">
                            <span>How do i sign up for the project?</span>
                        </span>
                        </div>
                        <img
                        src="/images/plus.svg"
                        alt="Plus symbol"
                        className="plus-symbol"
                        />
                    </div>
                    <div className="ques-box">
                        <div className="ques-frame">
                        <span className="question">
                            <span>
                            What thing that i should prepare before starting?
                            </span>
                        </span>
                        </div>
                        <img
                        src="/images/plus.svg"
                        alt="Plus symbol"
                        className="plus-symbol"
                        />
                    </div>
                    <div className="ques-box bottom">
                        <div className="ques-frame">
                        <span className="question">
                            <span>
                            Does my company need help for marketing advices?
                            </span>
                        </span>
                        </div>
                        <img
                        src="images/plus.svg"
                        alt="Plus Symbol"
                        className="plus-symbol"
                        />
                    </div>
                </div>
                <div className="help-col-2">
                    <div className="ques-email">
                        <div className="ques-text">
                            <span className="ques-heading">
                                <span>How we can help you?</span>
                            </span>
                            <span className="follow">
                                <span>
                                Follow our newsletter. We will regulary update our latest
                                project and availability.
                                </span>
                            </span>
                        </div>
                        <div className="email-talk">
                            <div className="email-box">
                                <span className="email-placeholder">
                                    <span>Enter your Email</span>
                                </span>
                            </div>
                            <div className="talk-box">
                                <span className="talk-text">
                                    <span>Lets Talk</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="FAQ-box">
                        <span className="FAQ-text">
                            <span>More FAQ</span>
                        </span>
                        <img
                        src="/images/Vector.svg"
                        alt="Vector1488"
                        className="landing-page-vector"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Help;