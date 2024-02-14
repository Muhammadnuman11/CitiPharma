import React from 'react'
// import Pages from '../../../components/Pages'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function POFShrinkFilms() {
    return (
        <Layout title={'Services - POF Shrink Films'}>
            <div className="services">
                {/* <Pages title={"Our Services"} /> */}
                <div className="services-detail">
                    <div className="services-box">
                        <h1>P.O.F Shrink Films</h1>
                        <div className="content">
                            <p>
                            Polyolefin shrink is an extremely durable and versatile shrink wrap. Polyolefin materials are available with different characteristics, including cross-linked wrap that provides high-tensile strength and incredible clarity for high-speed packaging applications. It has the ability to shrink quickly when heated. It is mostly used in packaging items. 
                            </p>
                            <div className="img">
                                <Carousel autoplay dots={false}>
                                    <div>
                                        <img src="images/sheet1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/sheet4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/sheet6.jpg" alt="" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
