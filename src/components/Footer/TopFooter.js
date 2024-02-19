import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function TopFooter() {
    return (
        <>
            <div className='topFooter'>
                <div className="topFooterLogo">
                    <div className="img">
                        <img src="https://citipharma.com.pk/images/logo-img.png" alt="" />
                    </div>
                </div>
                <div className="topFooterRow">
                    <div className="topFooterCol">
                        <h1>Working together</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link">Patients and caregivers</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Healthcare professionals</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Researchers</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Job seekers</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Journalists</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Investors</NavLink></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Topics</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link">Full year/Q4 2023</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Our next era</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Access</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Diversity</NavLink></li>
                            <li><NavLink to="/" className="nav-link">ESG</NavLink></li>
                            <li><NavLink to="/" className="nav-link">SpeakUp</NavLink></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Explore</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link">Pipeline</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Products</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Clinical trials</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Partnering</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Stories</NavLink></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Therapeutic areas</h1>
                        <ul>
                            <li><NavLink to="/" className="nav-link">Cardiovascular, renal and metabolic</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Immunology</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Neuroscience</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Oncology</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="topFooterIcons">
                    <FaLinkedin className='icons'/>
                    <FaFacebook className='icons'/>
                    <FaTwitter className='icons'/>
                    <FaInstagram className='icons'/>
                    <FaYoutube className='icons'/>
                </div>
            </div>
        </>
    )
}
