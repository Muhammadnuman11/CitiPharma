import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function TopFooter() {
    return (
        <>
            <div className='topFooter'>
                <div className="topFooterCol1">
                    <div className="img">
                        <img src="https://citipharma.com.pk/images/logo-img.png" alt="" />
                    </div>
                    <div className="links">
                        <ul>
                            <li><NavLink to="/" className="nav-link">API</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Citi Natural</NavLink></li>
                            <li><NavLink to="/" className="nav-link">R & D</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Bioteck</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Finish Products</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="topFooterCol2">
                    <div className="links">
                        <ul>
                            <li><NavLink to="/" className="nav-link">Journalists</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Applications</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Partners</NavLink></li>
                            <li><NavLink to="/" className="nav-link">Health Care Professionals</NavLink></li>
                        </ul>
                    </div>
                    <div className="usefulLinks">
                        <h1>Useful Links</h1>
                        <div className="links">
                            <ul>
                                <li><NavLink to="/" className="nav-link">Disclosure of Payments to Healthcare Professionals</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Disclosure of Payments to Patient Organisations</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Websites aimed at health care professionals</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Charters</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Group websites</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="topFooterCol3">
                    <h1>Follow Us</h1>
                    <div className="links">
                        <div>
                            <FaTwitter />
                        </div>
                        <div>
                            <FaFacebook />
                        </div>
                        <div>
                            <FaYoutube />
                        </div>
                        <div>
                            <FaLinkedin />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                    </div>
                    <button className='btn'>Contact Us</button>
                </div>
            </div>
        </>
    )
}
