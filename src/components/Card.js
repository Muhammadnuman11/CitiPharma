import React from 'react'
import { NavLink } from 'react-router-dom'

export default function card({ title, link, href }) {
    return (
        <>
            <div className="card">
                <div className="img">
                    <img src={link} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <h1>{title}</h1>
                    {/* <a href={href} className="btn">Learn More</a> */}
                    <NavLink to={href} className="btn">Learn More</NavLink> 
                </div>
            </div>
        </>
    )
}
