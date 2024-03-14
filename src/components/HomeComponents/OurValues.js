import React from 'react'
import Slider from "react-slick";


export default function OurValues() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <div className='jobBox'>
            <Slider {...settings}>
                <div>
                    <div className="jobs">
                        <div className="video">
                            <video src="images/ceo.mp4" controls className='w-100 h-100'></video>
                        </div>
                        <div className="jobDetail">
                            <div className="jobContent">
                                {/* <h3>Looking for a company</h3> */}
                                <h3>Our Values</h3>
                                <h1>that is in line with your values?</h1>
                                <p>Joining the Citi Pharma Group means entering a company with a history overflowing with values, innovation and expertise for patients and consumers. Don't wait! Look at our offers, apply and embark on a human adventure !</p>
                                <button className="btn">Discover our job offer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="jobs">
                        <div className="video">
                            <video src="images/ceo.mp4" controls className='w-100 h-100'></video>
                        </div>
                        <div className="jobDetail">
                            <div className="jobContent">
                                {/* <h3>Looking for a company</h3> */}
                                <h3>Our Culture</h3>
                                <h1>that is in line with your Culture?</h1>
                                <p>Joining the Citi Pharma Group means entering a company with a history overflowing with values, innovation and expertise for patients and consumers. Don't wait! Look at our offers, apply and embark on a human adventure !</p>
                                <button className="btn">Discover our job offer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
