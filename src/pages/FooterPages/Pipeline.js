import React from 'react'
import Layout from '../Frontend/Layout'

export default function Pipeline() {
    return (
        <Layout title={"Pipeline - Citi Pharma"} description={"Road map of citi pharma"}>
            <section className="pipeline">
                <div className="pipeline-box">
                    <div className="text-center">
                        <h2>Our route to success & vision</h2>
                    </div>
                    <ul className="pipeline-list">
                        <li>
                            <span></span>
                            <div className="circle">01</div>
                            <div className="pipeline-text">
                                <p>2012 - 2023</p>
                                <p>Paracetamol</p>
                                <p>2MT - 450MT</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">
                                02
                            </div>
                            <div className="pipeline-text">
                                <p>2016 - 2023</p>
                                <p>Amoxicillin</p>
                                <p>1MT - 60MT</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">03</div>
                            <div className="pipeline-text">
                                <p>2017 - 2023</p>
                                <p>Ciprofloxacin</p>
                                <p>2MT - 16MT</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">04</div>
                            <div className="pipeline-text">
                                <p>2018 - 2023</p>
                                <p>Cefixime</p>
                                <p>2MT - 12MT</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">05</div>
                            <div className="pipeline-text">
                                <p>2012 - 2023</p>
                                <p>General Formulation</p>
                                <p>2Products - 56Products</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">06</div>
                            <div className="pipeline-text">
                                <p>2020</p>
                                <p>Psychotropic Formulation</p>
                                <p>12Products - Quota Approved</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">07</div>
                            <div className="pipeline-text">
                                <p>2020 - 2023</p>
                                <p>Ceph. Formulation</p>
                                <p>26Products</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">08</div>
                            <div className="pipeline-text">
                                <p>2022 - 2024</p>
                                <p>Extraction Unit</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">09</div>
                            <div className="pipeline-text">
                                <p>2022 - 2024</p>
                                <p>Nutraceuticals</p>
                                <p>60Products</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">10</div>
                            <div className="pipeline-text">
                                <p>2024</p>
                                <p>Carbapenem Unit</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">11</div>
                            <div className="pipeline-text">
                                <p>2024</p>
                                <p>Bio-Technology</p>
                                <p>Oral Biotech</p>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="circle">12</div>
                            <div className="pipeline-text">
                                <p>2024</p>
                                <p>Hormonal</p>
                                <p>Oncology Oral</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}