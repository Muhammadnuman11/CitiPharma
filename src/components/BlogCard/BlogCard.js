import React from 'react'
import { useNavigate } from 'react-router-dom';
import scrollToTop from '../scrollToTop';



export default function BlogCard({ title, content, date, id }) {
    const navigate = useNavigate()
    const handleBlog = (id) => {
        scrollToTop()
        navigate(`/blog/${id}`)
    }
    return (
        <div className="cardBox">
            <div className="card-content">
                <img src="images/logo.png" alt="Citi Pharma" />
                <p className='text-secondary'>{date}</p>
                <h2>{title}</h2>
                <p>{content}</p>
                <button className='btn' onClick={() => handleBlog(id)}>Learn more</button>
            </div>
        </div>
    )
}




