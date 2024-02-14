import React from 'react'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function BOPPBags() {
    return (
        <Layout title={'Services - BOPP Bags'}>  
            <div className="services">
                <div className="services-detail">
                    <div className="services-box">
                        <h1>BOPP Bags</h1>
                        <div className="content">
                            <p>
                                BOPP stands for Biaxially Oriented Polypropylene. It is an additional film applied to woven bags which allows clear and vivid printing to be done on both sides of bag. These bags are produced by laminating a reverse printed film to a woven fabric and printing is achieved by applying inks directly to film. BOPP Bags are highly efficient and durable in terms of usage and can be made available in different dimensions, colors and size options. It can be used for food packaging and medical packaging.

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
