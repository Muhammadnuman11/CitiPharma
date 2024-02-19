import React from 'react'
import TopFooter from './TopFooter'
// import { FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {

    const year = new Date().getFullYear()

    // const openMessenger = () => {
    //     window.open('https://m.me/lahoreplasitc', '_blank');
    // }

    // const portfolio = () => {
    //     window.open('https://nomi-portfolio69.surge.sh/', '_blank');
    // }

    const webLink = () => {
        window.open('https:www.markoverment.com/', '_blank');
    }

    return (
        <>
            {/* <div className="messenger" onClick={openMessenger}>
                <FaFacebookMessenger className='mIcon' />
            </div> */}
            <footer className='footer'>
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
