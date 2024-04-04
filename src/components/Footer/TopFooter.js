import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import scrollToTop from '../scrollToTop';

export default function TopFooter() {

    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Show the button when user scrolls down beyond certain threshold
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dropdown
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='topFooter'>
                <div className="topFooterRow">
                    <div className="topFooterCol">
                        <h1>Working together</h1>
                        <ul>
                            {/* <li><Link to="/caregiver" className="nav-link" onClick={scrollToTop}>Patients and caregivers</Link></li> */}
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Healthcare professionals</Link></li>
                            {/* <li><Link to="/" className="nav-link" onClick={scrollToTop}>Researchers</Link></li> */}
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Internship</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Media</Link></li>
                            {/* <li><Link to="/" className="nav-link" onClick={scrollToTop}>Investors</Link></li> */}
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Topics</h1>
                        <ul>
                            <li><Link to="/annual-report" className="nav-link" onClick={scrollToTop}>Annual Report</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Our next era</Link></li>
                            {/* <li><Link to="/" className="nav-link" onClick={scrollToTop}>Access</Link></li> */}
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Diversity</Link></li>
                            {/* <li><Link to="/" className="nav-link" onClick={scrollToTop}>ESG</Link></li> */}
                            {/* <li><Link to="/" className="nav-link" onClick={scrollToTop}>SpeakUp</Link></li> */}
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Explore</h1>
                        <ul>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Pipeline</Link></li>
                            <li className='nav-link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                Products
                                <span className={isOpen ? 'block' : 'hidden'}>
                                    <Link to="/api-manufacturer" className="nav-link py-1 px-2" onClick={scrollToTop}>Api Manufacturer</Link>
                                    <Link to="/citi-natural" className="nav-link py-1 px-2" onClick={scrollToTop}>Citi Natural</Link>
                                </span>
                            </li>
                            {/* <li><Link to="/" className="nav-link" onClick={scrollToTop}>Clinical trials</Link></li> */}
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Partnering</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Stories</Link></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Therapeutic areas</h1>
                        <ul>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Cardiovascular, renal and metabolic</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Immunology</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Neuroscience</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Anti inflammatory</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Antimicrobials</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="topFooterIcons" style={{ display: isVisible ? 'flex' : 'none' }}>
                    <FaInstagram className='icons' onClick={() => window.open("https://www.instagram.com/citi_pharmaa/?igsh=MXQwajB2MzNxbTI3Mw%3D%3D", "_blank")} />
                    <FaFacebook className='icons' onClick={() => window.open("https://www.facebook.com/citipharmaltd?mibextid=ZbWKwL", "_blank")} />
                    <FaLinkedin className='icons' onClick={() => window.open("https://www.linkedin.com/company/citipharmalimited/", "_blank")} />
                </div>
            </div>
        </>
    )
}
