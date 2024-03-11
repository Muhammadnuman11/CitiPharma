import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <header>
                <nav className="navbar  navbar-expand-lg navbar-info p-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand fs-2 fw-bold text-white">
                            <img src="images/logo.png" alt="" />
                        </Link>
                        <div className="p-0 top-0 bg-transparent rounded-0 w-100 h-100">
                            <div className="d-flex text-start w-100">
                                <ul className="navbar-nav d-flex w-100 me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <NavLink to="/dashboard/product" className="nav-link text-white">Products Management</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/dashboard/blog" className="nav-link text-white">Blog Management</NavLink>
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