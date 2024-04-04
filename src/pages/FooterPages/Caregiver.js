import React from 'react'
import Layout from '../Frontend/Layout'

export default function Caregiver() {
    return (
        <Layout title={"Patients and caregivers - Citi Pharma"} description={"The Care You Want - With Best Quality Pharmaceutical Products"}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='fs-2 text-primary text-center fw-light mt-5'>Our Mission Is Provide You</h1>
                        <p className='fs-4 text-dark text-center fw-light'>The Care You Want - With Best Quality Pharmaceutical Products</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8 text-center">
                        <img src="images/caregiver.jpg" alt="caregiver" className='w-75 py-3' />
                    </div>
                    <div className="col-12 col-md-4">
                        <p className='fs-5 text-dark py-3 fw-light' style={{ textAlign: 'justify', }}>
                            As caregivers, our mission is to provide you with the highest quality pharmaceutical products while ensuring that you receive the care you desire. We are dedicated to delivering excellence in every aspect of your treatment, from medication management to personalized support. Your well-being is our priority, and we are committed to ensuring that you have access to the best possible care and resources to support your health journey.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
