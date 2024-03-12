import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import axios from "axios";

const initialState = {
    title: "",
    shortDesc: "",
    desc: "",
}

export default function Nav() {
    const [auth, setAuth] = useAuth()

    const [state, setState] = useState(initialState);

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleBlog = async (e) => {
        e.preventDefault()


        let { title, shortDesc, desc } = state

        title = title.trim()
        shortDesc = shortDesc.trim()
        desc = desc.trim()

        if (title.length < 3) {
            return window.notify("Please enter blog title", "error")
        }
        if (shortDesc.length < 10) {
            return window.notify("Please enter blog short desc.", "error")
        }
        if (desc.length < 10) {
            return window.notify("Please enter blog description", "error")
        }

        let blogData = { title, shortDesc, desc };
        console.log(blogData)
        try {
            await axios.post('http://localhost:5000/api/blogs', blogData);
            // console.log('Data sent successfully:', response.data);
            window.notify("Blog add successfully", "success")
            setState(initialState);
        } catch (error) {
            // console.error('Error sending data:', error);
            window.notify("Error adding blog:", "error")
        }

    }

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null
        })
        localStorage.removeItem("auth")
    }
    return (
        <>
            <header>
                <nav className="navbar  navbar-expand-lg navbar-info p-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand fs-2 fw-bold text-white">
                            <img src="images/logo.png" alt="" />
                        </Link>
                        <div className="p-0 top-0 bg-transparent rounded-0 w-100 h-100">
                            <div className="d-flex w-100">
                                <ul className="navbar-nav d-flex justify-content-between align-items-center w-100 me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <NavLink to="/dashboard/product" className="nav-link text-white">Products Management</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/" className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#dataModal">Add Blogs</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink to="/" className="nav-link text-dark bg-white fw-bold py-2 px-3 rounded-2" onClick={handleLogout}>Logout</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>


            <div className="modal fade" id="dataModal" tabIndex="-1" aria-labelledby="dataModalLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="dataModalLabel">Add Blogs</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="my-2">
                                    <label htmlFor="title">Blog title</label>
                                    <input type="text" id="title" placeholder='Enter Blog Title' className='form-control shadow-none p-2 my-1' name='title' value={state.title} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="shortDesc">Blog Short Desc.</label>
                                    <textarea type="text" id="shortDesc" placeholder='Enter Blog Short Desc.' className='form-control shadow-none p-2 my-1' name='shortDesc' value={state.shortDesc} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="desc">Blog Description</label>
                                    <textarea type="text" id="desc" placeholder='Enter Blog Description' className='form-control shadow-none p-2 my-1' name='desc' value={state.desc} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleBlog} className="btn btn-primary" data-bs-dismiss="modal">Add Blog</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}