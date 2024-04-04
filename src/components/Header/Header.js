import React from 'react'
import { Link, NavLink } from "react-router-dom";
import scrollToTop from '../scrollToTop';

export default function Navbar() {

    return (
        <>
            <header>
                <nav className="navbar fixed-top custom_nav-container p-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand fs-2 fw-bold text-white" onClick={scrollToTop}>
                            <img src="../images/logo.png" alt="Citi pharma logo" />
                        </Link>
                        <button className="navbar-toggler shadow-none border-0 navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex w-100">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <NavLink to="/" className="nav-link text-white" onClick={scrollToTop}>Home</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/about" className="nav-link text-white" onClick={scrollToTop}>
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/contact" className="nav-link text-white" onClick={scrollToTop}>Contact</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/api-manufacturer" className="nav-link text-white" onClick={scrollToTop}>API Manufacturer</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/finish-products" className="nav-link text-white " onClick={scrollToTop}>Finish Products
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/citi-natural" className="nav-link text-white " onClick={scrollToTop}>Citi Natural</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/biotech" className="nav-link text-white" onClick={scrollToTop}>Biotech</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/research-development" className="nav-link text-white" onClick={scrollToTop}>Research & Development</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/blogs" className="nav-link text-white" onClick={scrollToTop}>Blogs</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/annual-report" className="nav-link text-white" onClick={scrollToTop}>Annual Report 2023</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
