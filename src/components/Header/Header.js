import React from 'react'
// import { FaFacebook, FaPhone } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Space } from 'antd';

const items = [
    {
        key: '1',
        label: (
            <NavLink to="/about" className="nav-link text-dark">About</NavLink>
        ),
    },
    {
        key: '2',
        label: (
            <a href="images/annualReport.pdf" download="Cit Pharma Annual Report 2023" rel="noreferrer" target='_blank' className="nav-link text-dark">Download Finanial Report 2023</a>
        ),
    },
];

export default function Navbar() {

    // const openFacebook = () => {
    //     window.open('https://www.facebook.com/lahoreplasitc/?_rdc=1&_rdr', '_blank');
    // }
    // const openMail = () => {
    //     window.open('mailto:mudassir@lahorehouse.com');
    // }
    // const openPhone = () => {
    //     window.open('tel:923028466555');
    // }

    return (
        <>
            <header>
                <nav className="navbar fixed-top custom_nav-container p-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand fs-2 fw-bold text-white">
                            <img src="https://citipharma.com.pk/images/logo-img.png" alt="" />
                        </Link>
                        <button className="navbar-toggler shadow-none border-0 navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex w-100">
                                <ul className="navbar-nav d-flex align-items-center justify-content-center me-auto w-100 mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <NavLink to="/" className="nav-link text-white">Home</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        {/* <NavLink to="/about" className="nav-link text-white">About</NavLink> */}
                                        <Dropdown menu={{ items }}>
                                            <span onClick={(e) => e.preventDefault()} className='nav-link'>
                                                <Space>
                                                    About Us
                                                </Space>
                                            </span>
                                        </Dropdown>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/api" className="nav-link text-white ">Api
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/finishproducts" className="nav-link text-white ">Finish Products
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/citinatural" className="nav-link text-white ">Citi Natural</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/biotech" className="nav-link text-white">orthotics & Biotech</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/rd" className="nav-link text-white">Research & Devlopment</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="nav-icons">
                        <div className="nav-link">
                            <FaFacebook onClick={openFacebook} />
                        </div>
                        <div className="nav-link">
                            <IoMail onClick={openMail} />
                        </div>
                        <div className="nav-link">
                            <FaPhone onClick={openPhone} />
                        </div>
                    </div> */}
                </nav>
            </header>
        </>
    )
}
