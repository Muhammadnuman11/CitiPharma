import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

const initialState = {
    number: "",
    name: "",
    form: "",
    potency: "",
    composition: "",
    size: "",
    rDate: "",
    nDate: "",
}

export default function ProductNav() {

    const [state, setState] = useState(initialState);

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleProduct = async (e) => {
        e.preventDefault()


        let { number, name, form, potency, composition, size, rDate, nDate } = state

        number = number.trim()
        name = name.trim()
        form = form.trim()
        potency = potency.trim()
        composition = composition.trim()
        size = size.trim()

        if (!number) {
            return window.notify("Please enter reg. number", "error")
        }
        if (name.length < 3) {
            return window.notify("Please enter product name", "error")
        }
        if (form.length < 3) {
            return window.notify("Please enter dosage form", "error")
        }
        if (potency.length < 3) {
            return window.notify("Please enter potency", "error")
        }
        if (composition.length < 3) {
            return window.notify("Please enter composition", "error")
        }
        if (size.length < 3) {
            return window.notify("Please enter pack size", "error")
        }
        if (!rDate) {
            return window.notify("Please enter renewal date", "error")
        }
        if (!nDate) {
            return window.notify("Please enter next renewal date", "error")
        }

        let prductData = { number, name, form, potency, composition, size, rDate, nDate };
        // console.log(prductData)
        try {
            await axios.post('http://localhost:5000/api/products', prductData);
            // console.log('Data sent successfully:', response.data);
            window.notify("Product add successfully", "success")
            setState(initialState);
        } catch (error) {
            // console.error('Error sending data:', error);
            window.notify("Error adding product:", "error")
        }

    }

    // Logout
    const [auth, setAuth] = useAuth()

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
                <nav className="navbar navbar-expand-lg navbar-info p-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand fs-2 fw-bold text-white">
                            <img src="../images/logo.png" alt="" />
                        </Link>
                        <div className="p-0 top-0 bg-transparent rounded-0 w-100 h-100">
                            <div className="d-flex text-start w-100">
                                <ul className="navbar-nav d-flex justify-content-between align-items-center w-100 me-auto mb-2 mb-lg-0">
                                    <div className="d-flex">
                                        <li className="nav-item mx-2">
                                            <NavLink to="/dashboard" className="nav-link text-wite">Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink to="/" className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#dataModal">Add Products</NavLink>
                                        </li>
                                    </div>
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
                            <h1 className="modal-title fs-5" id="dataModalLabel">Add Products</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="my-2">
                                    <label htmlFor="number">Registration Number</label>
                                    <input type="text" id="number" placeholder='Enter Registration Number' className='form-control shadow-none p-2 my-1' name='number' value={state.number} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="name">Product Name</label>
                                    <input type="text" id="name" placeholder='Enter Product Name' className='form-control shadow-none p-2 my-1' name='name' value={state.name} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="form">Dosage form</label>
                                    <input type="text" id="form" placeholder='Enter Dosage form' className='form-control shadow-none p-2 my-1' name='form' value={state.form} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="potency">Potency</label>
                                    <input type="text" id="potency" placeholder='Enter Potency' className='form-control shadow-none p-2 my-1' name='potency' value={state.potency} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="composition">Composition</label>
                                    <input type="text" id="composition" placeholder='Enter Composition' className='form-control shadow-none p-2 my-1' name='composition' value={state.composition} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="size">Pack Size</label>
                                    <input type="text" id="size" placeholder='Enter Pack Size' className='form-control shadow-none p-2 my-1' name='size' value={state.size} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="renewal">Renewal Date</label>
                                    <input type="date" id="renewal" placeholder='Enter Renewal Date' className='form-control shadow-none p-2 my-1' name='rDate' value={state.rDate} onChange={handleChange} />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="next">Next Date of Renewal</label>
                                    <input type="date" id="next" placeholder='Enter Next Renewal Date' className='form-control shadow-none p-2 my-1' name='nDate' value={state.nDate} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleProduct} className="btn btn-primary" data-bs-dismiss="modal">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}