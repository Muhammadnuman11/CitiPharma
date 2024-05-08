import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Layout from '../../pages/Frontend/Layout'
import blogData from '../../data/blogData'
import { FaLinkedin } from 'react-icons/fa';

export default function BlogPage() {

    const { id } = useParams();

    const blog = blogData[id]

    return (
        <Layout title={`Blog | ${blog.title}`} description={blog.shortDesc}>
            <div className="blogPage">
                {blog ? (
                    <div>
                        <h1 className='mainHeadings'>{blog.title}</h1>
                        {/* <p className='text-secondary fs-6 fw-medium'>Posted Date: {blog.date}</p> */}
                        <p className='text-secondary fs-6 fw-medium d-flex align-items-center'>Posted Date: {blog.date}
                            {blog.linkedinLink ? <Link to={blog.linkedinLink} className='fs-3 ms-5' target='_blank'><FaLinkedin /></Link> : ""}
                        </p>
                        <p style={{ whiteSpace: 'pre-wrap', }} dangerouslySetInnerHTML={{ __html: blog.desc }} />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </Layout>
    )
}
