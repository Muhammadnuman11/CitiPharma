import React from 'react'
// import Pages from '../../../components/Pages'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function StandingPouch() {
    return (
        <Layout title={'Services - Standing Pouch'}>
            <div className="services">
                {/* <Pages title={"Our Services"} /> */}
                <div className="services-detail">
                    <div className="services-box">
                        <h1>Standing Pouch</h1>
                        <div className="content">
                            <p>
                            Standing pouch is a type of flexible packaging which is able to stand erect on its bottom for display, storage, and use.These pouches are available in different sizes, shapes and colors. The main feature of standing pouches is their bellows in the lower portion. Once the bag containing product within the bellows is expanded and allows the bag to stand upright when it is displayed on shelves. Stand up bags are the best choice for packaging of various products. Various food items and drinks can be filled in a standing pouch.

                            </p>
                            <div className="img">
                                <Carousel autoplay dots={false}>
                                    <div>
                                        <img src="images/standingPouch/sPouch1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch2.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch5.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch7.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/standingPouch/sPouch8.jpg" alt="" />
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
