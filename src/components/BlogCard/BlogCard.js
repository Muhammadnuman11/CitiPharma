import React from 'react'
import { Link } from 'react-router-dom';
import scrollToTop from '../scrollToTop';
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';



export default function BlogCard({ title, content, date, id, linkedinLink, URL }) {
    // const navigate = useNavigate()
    const handleBlog = (URL) => {
        scrollToTop()
        window.open(`/blog/${URL}`, '_blank');
    }
    return (
        <div className="cardBox">
            <div className="card-content">
                <img src="images/citi-logo.png" alt="Citi Pharma Blogs Icon" />
                <p className='text-secondary d-flex justify-content-between align-items-center'>{date}
                </p>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className='linkedinBtn'>{linkedinLink ? <Link to={linkedinLink} className='fs-3' target='_blank'><FaLinkedin /></Link> : ""}
                </div>
                <button className='btn' onClick={() => handleBlog(URL)}>Learn more <FaArrowUpRightFromSquare /> </button>
            </div>
        </div>
    )
}





