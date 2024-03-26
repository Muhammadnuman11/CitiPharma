import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import scrollToTop from '../scrollToTop';

export default function TopFooter() {
    return (
        <>
            <div className='topFooter'>
                <div className="topFooterLogo">
                    <div className="img">
                        <img src="../images/logo.png" alt="" />
                    </div>
                </div>
                <div className="topFooterRow">
                    <div className="topFooterCol">
                        <h1>Working together</h1>
                        <ul>
                            <li><NavLink to="/caregiver" className="nav-link" onClick={scrollToTop}>Patients and caregivers</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Healthcare professionals</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Researchers</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Job seekers</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Journalists</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Investors</NavLink></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Topics</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Full year/Q4 2023</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Our next era</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Access</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Diversity</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>ESG</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>SpeakUp</NavLink></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Explore</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Pipeline</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Products</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Clinical trials</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Partnering</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Stories</NavLink></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Therapeutic areas</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Cardiovascular, renal and metabolic</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Immunology</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Neuroscience</NavLink></li>
                            <li><NavLink to="/" className="nav-link" onClick={scrollToTop}>Oncology</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="topFooterIcons">
                    <div className='footerIcons'>
                        <FaLinkedin className='icons' onClick={()=>window.open("https://www.linkedin.com/company/citipharmalimited/", "_blank")}/>
                        <FaFacebook className='icons' onClick={()=>window.open("https://www.facebook.com/citipharmaltd?mibextid=ZbWKwL", "_blank")}/>
                    </div>
                    <div className="contactBtn">
                        <Link to="/contact" onClick={scrollToTop} className='btn'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
