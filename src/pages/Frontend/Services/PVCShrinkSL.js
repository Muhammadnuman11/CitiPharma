import React from 'react'
// import Pages from '../../../components/Pages'
import { Carousel } from 'antd';
import Layout from '../Layout';

export default function PVCShrinkSL() {
    return (
        <Layout title={'Services - PVC Shrink Sleeves and Labels'}>
            <div className="services">
                {/* <Pages title={"Our Services"} /> */}
                <div className="services-detail">
                    <div className="services-box">
                        <h1>PVC Shrink Sleeves and Labels</h1>
                        <div className="content">
                            <p>
                                PVC – Polyvinyl Chloride (PVC) is a high density film that shrinks at low temperature ranges. The most commonly used shrink sleeve material, PVC, is the easiest film to control in the shrink process. It has excellent shrinkage rates, clarity, print quality, and a wide range of both shrink temperatures and shrink ratios. PVC also has high impact strength for extra weather resistance. This scuff resistant shrink sleeve material has the lowest cost.

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
