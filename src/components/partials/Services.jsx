import React from 'react'
import "../../styles/services.css"
import WebDesignImg from "../../assets/img/website-design.svg"
import WebAppImg from "../../assets/img/web-application.svg"
import UIDesignImg from "../../assets/img/uiux-design.svg"
import DigitalMarketingImg from "../../assets/img/digital-marketing.svg"

function Services() {
    return (
        <div className="service_container">
            <div className="header">
                <h3 className="subtitle">WHAT WE SPECIALIZE IN</h3>
                <h2 className="title">Solutions that work</h2>
            </div>
            <div className="services">
                <div className="service-1">
                    <div className="service_img">
                        <img src={WebDesignImg} alt="web design" />
                    </div>
                    <h2>Website Design</h2>
                    <p>Effective websites that capture your brand, and maximize your revenue to help grow your business and achieve your goals.</p>
                </div>
                <div className="service-2">
                    <div className="service_img">
                        <img src={UIDesignImg} alt="ui/ux design" />
                    </div>
                    <h2>UI/UX Design</h2>
                    <p>The usability and speed with which users can perform tasks is largely affected by good interface development.</p>
                </div>
                <div className="service-3">
                    <div className="service_img">
                        <img src={WebAppImg} alt="web application" />
                    </div>
                    <h2>Web Application</h2>
                    <p>Development of complex web applications and web portals with top rated developers around the world. </p>
                </div>
                <div className="service-4">
                    <div className="service_img">
                        <img src={DigitalMarketingImg} alt="ui/ux design" />
                    </div>
                    <h2>Digital Marketing</h2>
                    <p>More leads. More sales. More revenue. That's digital marketing services from Wavefly</p>
                </div>
            </div>
        </div>
    )
}

export default Services
