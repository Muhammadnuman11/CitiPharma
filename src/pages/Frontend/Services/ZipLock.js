import React from 'react'
// import Pages from '../../../components/Pages'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function ZipLock() {
    return (
        <Layout title={'Services - Zip lock Bags'}>
            <div className="services">
                {/* <Pages title={"Our Services"} /> */}
                <div className="services-detail">
                    <div className="services-box">
                        <h1>Zip lock Bags</h1>
                        <div className="content">
                            <p>
                            This is a LDPE Bag with a zip on its upper side which we can open & seal very easily several times. It can be found in various sizes and thickness. Its basic purpose is to pack screws, electronics elements, Medicines, brochures, instructions leaflets, paper clips, rubber belts, labels, post cards, nails, dusters, threads, fish hooks, gloves & surgical instruments etc. It canlaso be used to store products and documents.

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
