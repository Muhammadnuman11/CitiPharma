import React, { useEffect, useState } from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import scrollToTop from '../scrollToTop';

export default function TopFooter() {

    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <>
            <div className='topFooter'>
                <div className="topFooterRow">
                    <div className="topFooterCol">
                        <h1>Working together</h1>
                        <ul>
                            <li><Link to="/caregiver" className="nav-link" onClick={scrollToTop}>Patients and caregivers</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Healthcare professionals</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Researchers</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Job seekers</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Journalists</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Investors</Link></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Topics</h1>
                        <ul>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Full year/Q4 2023</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Our next era</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Access</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Diversity</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>ESG</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>SpeakUp</Link></li>
                        </ul>
                    </div>
                    <div className="topFooterCol">
                        <h1>Explore</h1>
                        <ul>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Pipeline</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Products</Link></li>
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Clinical trials</Link></li>
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
                            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Oncology</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="topFooterIcons" style={{ display: isVisible ? 'flex' : 'none' }}>
                    <FaLinkedin className='icons' onClick={() => window.open("https://www.linkedin.com/company/citipharmalimited/", "_blank")} />
                    <FaFacebook className='icons' onClick={() => window.open("https://www.facebook.com/citipharmaltd?mibextid=ZbWKwL", "_blank")} />
                </div>
            </div>
        </>
    )
}
