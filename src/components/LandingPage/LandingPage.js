import React from "react";
import './LandingPage.css'

function LandingPage(){
    return (
        <>
        <div className="header">
          <div className="landing-page-frame97">
            <div className="landing-page-frame96">
              <div className="landing-page-group21841">
                <span className="brand-logo">
                  <span>Embrace</span>
                </span>
                <img
                  src="/images/circle.svg"
                  alt="Ellipse871684"
                  className="header-circle"
                />
                <img
                  src="/images/triangle.svg"
                  alt="Polygon11685"
                  className="header-arrow"
                />
                
              </div>
              <div className="nav-bar">
                <span className="nav-bar-text pointer">
                  <span>How it Works</span>
                </span>
                <span className="nav-bar-text pointer">
                  <span>Our Work</span>
                </span>
                <span className="nav-bar-text pointer">
                  <span>Pricing</span>
                </span>
                <span className="nav-bar-text pointer">
                  <span>About Us</span>
                </span>
              </div>
            </div>
            <div className="try-button pointer">
              <span className="try-button-text">
                <span>Try it Now</span>
              </span>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          
          <a class="navbar-brand" href="/">
          <img
            src="/images/circle.svg"
            alt="Ellipse871684"
            className="hc"
          />
          <img
            src="/images/triangle.svg"
            alt="Polygon11685"
            className="ha"
          />Embrace</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 x">
              <li class="nav-item pointer">
                <a class="nav-link active" aria-current="page" href="/">How it works</a>
              </li>
              <li class="nav-item pointer">
                <a class="nav-link" href="/">Our work</a>
              </li>
              <li class="nav-item pointer">
                <a class="nav-link" href="/">Pricing</a>
              </li>              
              <li class="nav-item pointer">
                <a class="nav-link" href="/">About Us</a>
              </li>
            </ul>
            <div className="try-button pointer">
              <span className="try-button-text">
                <span>Try it Now</span>
              </span>
            </div>
          </div>
        </div>
        </nav>

        {/* Hero */}
        <div className="landing-page-hero-section">
            <div className="landing-page-group589">
                <span className="landing-page-text">
                    <span>
                        <span>We Take Care of</span>
                        <br></br>
                        <span>Your Brand</span>
                    </span>
                </span>
                <span className="landing-page-sub-text">
                    <span>
                        Use this section to describe your company and the products you
                        offer. You could share your company's story and details about
                        why you are in business.
                    </span>
                </span>
                <div className="connect">
                    <div className="email-div">
                        <span className="email">
                            <span>Enter your Email</span>
                        </span>
                    </div>
                    <div className="lets-talk-div pointer">
                        <span className="lets-talk">
                            <span>Lets Talk</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="img-group landing-page-group237498">
          {/* <img
            src="/playground_assets/vector1694-c85.svg"
            alt="Vector1694"
            className="landing-page-vector5 landing-page-vector5"
          /> */}
          <div className="img-stack landing-page-group237494">
            <img
              src="images/Rectangle 196.svg"
              alt=""
              className="img-stack-basic rectangle196 up"
            />
            <img
              src="/images/Rectangle 200.svg"
              alt=""
              className="img-stack-basic rectangle200 up"
            />
            <img
              src="images/pencile.png"
              alt=""
              className="img-stack-basic rectangle201 up"
            />
            <img
              src="/images/Rectangle 202.svg"
              alt=""
              className="img-stack-basic rectangle202 up"
            />
            <img
              src="/images/Ellipse 84.svg"
              alt=""
              className="img-stack-basic ellipse84 up"
            />
            <img
              src="/images/girl.png"
              alt=""
              className="img-stack-basic rectangle204 up"
            />
            <img
              src="images/crown.png"
              alt=""
              className="img-stack-basic rectangle205 up "
            />
            
            <img
              src="images/loving-it.png"
              alt=""
              className="cloud-1 landing-page-union1 up "
            />
            <img
              src="/images/just.png"
              alt=""
              className="cloud-2 landing-page-union up"
            />
            
          </div>
        </div>
        </>
    )
}

export default LandingPage;