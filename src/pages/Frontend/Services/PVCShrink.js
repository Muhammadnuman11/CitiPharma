import React from 'react'
// import Pages from '../../../components/Pages'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function PVCShrink() {
    return (
        <Layout title={'Services - PVC Shrink Films'}>
            <div className="services">
                {/* <Pages title={"Our Services"} /> */}
                <div className="services-detail">
                    <div className="services-box">
                        <h1>PVC Shrink Films</h1>
                        <div className="content">
                            <p>
                                PVC stands for Polyvinyl Chloride and is the third most produced plastic in the world. PVC shrink films are used for a variety of applications because of its lightweight and in-expensive multi-purpose capabilities.
                                The major quality of PVC shrink film is that it is water proof and makes product bright, elegant, valued, clear-cut and transparent.Shrink packaging used in the packing of Cosmetics, Pesticides, Pharmaceuticals, filters, lubricants, plastic products, toys, hardware, Beverages, furniture, house hold appliances and chemical products etc.
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
