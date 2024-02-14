import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa";

export default function Footer() {

    const year = new Date().getFullYear()

    const openMessenger = () => {
        window.open('https://m.me/lahoreplasitc', '_blank');
    }

    const portfolio = () => {
        window.open('https://nomi-portfolio69.surge.sh/', '_blank');
    }

    return (
        <>
            <div className="messenger" onClick={openMessenger}>
                <FaFacebookMessenger className='mIcon' />
            </div>
            <footer className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>&copy; {year} Lahore Plastic Company | All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Design & Develop By <span onClick={portfolio}>Numan Irshad</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
