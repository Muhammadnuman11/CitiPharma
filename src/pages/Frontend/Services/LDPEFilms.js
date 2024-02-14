import React from 'react'
// import Pages from '../../../components/Pages'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function LDPEFilms() {
    return (
        <Layout title={'Services - LDPE Stretch Films'}>
            <div className="services">
                {/* <Pages title={"Our Services"} /> */}
                <div className="services-detail">
                    <div className="services-box">
                        <h1>LDPE Stretch Films</h1>
                        <div className="content">
                            <p>
                                It is a highly stretchable plastic film that is wrapped across items.The elastic recovery keeps the products tightly bound. Stretch film is used to wrap products on pallets and secure them to each other and the pallet. It improves stability of products, more efficient in handling and protects them from dust and moisture. It can be used to wrap machines and other industrial items.
                            </p>
                            <div className="img">
                                <Carousel autoplay dots={false}>
                                    <div>
                                        <img src="images/wrapping/wrapping1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/wrapping/wrapping2.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/wrapping/wrapping3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/wrapping/wrapping4.jpg" alt="" />
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
