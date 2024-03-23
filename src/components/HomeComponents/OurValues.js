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
                            <video src="images/charmain.mp4" controls className='w-100 h-100'></video>
                        </div>
                        <div className="jobDetail">
                            <div className="jobContent">
                                <h1>Mr. Nadeem Amjad</h1>
                                <h3>Chairman</h3>
                                <p>Mr. Amjad is also an early age entrepreneur with over 3 decades of profession business experience. He expanded the family business into the Hong Kong Real Estate business as well as hospitality.He holds an MBA from University of London.</p>
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
                                <h1>Mr. Rizwan Ahmad</h1>
                                <h3>CEO</h3>
                                <p>Mr. Rizwan Sheikh, CEO of the company, is a prominent figure in Pakistan's pharma sector.He began his career in the family's telecom business, Citi Phones (Pvt.), and is esteemed for his leadership.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
