import React from 'react'
import Layout from '../Frontend/Layout'
import { Link } from 'react-router-dom'

export default function Internship() {
    const handleApply = () => {
        window.open("https://docs.google.com/forms/d/1FWA-70sRve8TJVYY7TTLPVRVMMc2TzlhAlDR0rH2khY/edit", "_blank")
    }
    return (
        <Layout title={"Paid Internships Open Now! Launch Your Career at Citi Pharma"} description={"Join Citi Pharma's paid internship program and gain hands-on experience. Choose from exciting projects, create a 4-slide presentation, and submit your CV. Apply now to kickstart your career!"} keywords={"paid internship, internship program"} image={"images/intern.jpg"}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center mt-5' style={{ color: '#004b96', }}>Paid Internships Open Now!</h1>
                        <p className='fs-4 text-dark text-center fw-light'>Leading towards job!</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                        <p className='fs-5 text-dark py-2 fw-light' style={{ textAlign: 'justify', }}>
                            We believe in the transformative power of education. Our scholarship is designed to nurture bright minds dedicated to creating positive change through hands-on learning. Choose from our list of projects uploaded on 
                            <Link to='https://www.linkedin.com/posts/citipharmalimited_project-list-for-internship-leading-towards-activity-7181545554483572736-l84Y?utm_source=share&utm_medium=member_desktops' className='text-decoration-none' target='_blank'> LinkedIn </Link> 
                            and create a 4-slide presentation on your selected project. To apply, submit your CV along with your presentation. Join us in shaping the future!
                        </p>
                        <button className='btn btn-primary fs-6 text-uppercase border-0 rounded-0 py-2 px-4' onClick={handleApply}>Apply Now</button>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img src="images/intern.jpg" alt="Internship Program" className='w-75 py-4' />
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                        <div className="p-5 shadow-md rounded my-3" style={{ background: '#004b96', width: '300px', }}>
                            <div className='text-center'>
                                <img src="images/lunch.png" alt="lunch" className='py-3' style={{ filter: 'invert(100%)', }} />
                                <h3 className="text-uppercase fs-5 text-white fw-light my-2">Lunch</h3>
                            </div>
                        </div>
                        <div className="p-5 shadow-md rounded my-3" style={{ background: '#004b96', width: '300px', }}>
                            <div className='text-center'>
                                <img src="images/stipend.png" alt="stipend" className='py-3' style={{ filter: 'invert(100%)', }} />
                                <h3 className="text-uppercase fs-5 text-white fw-light my-2">30k Stipend</h3>
                            </div>
                        </div>
                        <div className="p-5 shadow-md rounded my-3" style={{ background: '#004b96', width: '300px', }}>
                            <div className='text-center'>
                                <img src="images/transportation.png" alt="transportation" className='py-3' style={{ filter: 'invert(100%)', }} />
                                <h3 className="text-uppercase fs-5 text-white fw-light my-2">Transportation</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
