import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import scrollToTop from '../scrollToTop';
import { FaLinkedin } from 'react-icons/fa';



export default function BlogCard({ title, content, date, id, linkedinLink }) {
    const navigate = useNavigate()
    const handleBlog = (id) => {
        scrollToTop()
        navigate(`/blogs/${id}`)
    }
    return (
        <div className="cardBox">
            <div className="card-content">
                <img src="images/citi-logo.png" alt="Citi Pharma logo" />
                <p className='text-secondary d-flex justify-content-between align-items-center'>{date}
                    {linkedinLink ? <Link to={linkedinLink} className='fs-3' target='_blank'><FaLinkedin /></Link> : ""}
                </p>
                <h2>{title}</h2>
                <p>{content}</p>
                <button className='btn' onClick={() => handleBlog(id)}>Learn more</button>
            </div>
        </div>
    )
}





