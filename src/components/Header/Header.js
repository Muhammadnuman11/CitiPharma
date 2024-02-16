import React from 'react'
// import { FaFacebook, FaPhone } from 'react-icons/fa';
// import { IoMail } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Space } from 'antd';

const items = [
    {
        key: '1',
        label: (
            <NavLink to="/api" className="nav-link text-dark">API's</NavLink>
        ),
    },
    // {
    //     key: '2',
    //     label: (
    //         <NavLink to="/boppbags" className="nav-link text-dark">BOPP Bags</NavLink>
    //     ),
    // },
    // {
    //     key: '3',
    //     label: (
    //         <NavLink to="/ldpefilms" className="nav-link text-dark">LDPE Stretch Films</NavLink>
    //     ),
    // },
    // {
    //     key: '4',
    //     label: (
    //         <NavLink to="/pvcshrinksl" className="nav-link text-dark">PVC Shrink Sleeves and Labels</NavLink>
    //     ),
    // },
    // {
    //     key: '5',
    //     label: (
    //         <NavLink to="/standingpouch" className="nav-link text-dark">Standing Pouch</NavLink>
    //     ),
    // },
    // {
    //     key: '6',
    //     label: (
    //         <NavLink to="/ziplock" className="nav-link text-dark">Zip lock Bags</NavLink>
    //     ),
    // },
    // {
    //     key: '7',
    //     label: (
    //         <NavLink to="/pofshrinkfilms" className="nav-link text-dark">P.O.F Shrink Films</NavLink>
    //     ),
    // },
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
                                        <Dropdown menu={{ items }}>
                                            <span onClick={(e) => e.preventDefault()} className='nav-link'>
                                                <Space>
                                                    Api
                                                </Space>
                                            </span>
                                        </Dropdown>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/finishproduct" className="nav-link text-white ">Finish Products
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
