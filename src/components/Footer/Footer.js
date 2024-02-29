import React, { useEffect, useState } from 'react'
import TopFooter from './TopFooter'
import { TiArrowSortedUp } from "react-icons/ti";

export default function Footer() {

    const year = new Date().getFullYear()

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // Show the button when user scrolls down beyond certain threshold
            if (window.scrollY > 500) {
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

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const webLink = () => {
        window.open('https:www.markoverment.com/', '_blank');
    }

    return (
        <>
            <footer className='footer'>
                <div className="arrow" onClick={scrollTop} style={{ display: isVisible ? 'flex' : 'none' }}>
                    {/* <lord-icon
                        src="https://cdn.lordicon.com/vvflvbfj.json"
                        trigger="loop"
                        stroke="bold"
                        state="loop-slide"
                        colors="primary:#4be1ec,secondary:#104891"
                        style={{ width: "70px", height: "70px", }}>
                    </lord-icon> */}
                    <TiArrowSortedUp />
                </div>
                <TopFooter />
                <div className="footerPara">
                    <p>&copy; {year} Citi Pharma</p>
                    <p>Powered By <span onClick={webLink}>Markoverment</span></p>
                    {/* <p>Design & Develop By <span>Numan Irshad</span></p> */}
                </div>
            </footer>
        </>
    )
}
