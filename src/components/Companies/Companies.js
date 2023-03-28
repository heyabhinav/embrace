import React from "react";
import './Companies.css'

function Companies(){
    return(
        <>
        <div className="company-partners">
            <div className="text-band">
                <span className="company-heading">
                    <span>Companies we Work with</span>
                </span>
                <span className="random-text">
                    <span>
                        Use this section to describe your company and the products you
                        offer. You could share your company's story and details about
                        why you are in business.
                    </span>
                </span>
            </div>
            <div className="companies-band-1">
                <img
                src="/images/Company logo.svg"
                alt="Spotify"
                className="spotify company-logo-common"
                />
                <img
                src="/images/Company logo-1.svg"
                alt="Google"
                className="google company-logo-common"
                />
                <img
                src="/images/Company logo-2.svg"
                alt="Uber"
                className="uber company-logo-common"
                />
                <img
                src="/images/Company logo-3.svg"
                alt="Microsoft"
                className="microsoft company-logo-common"
                />
                <img
                src="/images/Company logo-4.svg"
                alt="Shopify"
                className="shopify company-logo-common"
                />
            </div>
            <div className="companies-band-2">
                <img
                src="/images/Company logo-5.svg"
                alt="Evernote"
                className="evernote company-logo-common"
                />
                <img
                src="/images/Company logo-6.svg"
                alt="Adobe"
                className="adobe company-logo-common"
                />
                <img
                src="/images/Company logo-7.svg"
                alt="PayPal"
                className="paypal company-logo-common"
                />
                <img
                src="/images/Company logo-8.svg"
                alt="Amazon"
                className="amazon company-logo-common"
                />
                <img
                src="/images/Company logo-9.svg"
                alt="Asana"
                className="asana company-logo-common"
                />
            </div>
        </div>
        </>
    )
}

export default Companies;