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
            <div className="mt-5">
                {blog ?
                    <>
                        {
                            blog.imgLink ?
                                <div className="w-100 d-flex justify-content-center pt-4 md:pt-2">
                                    <div className="container position-relative p-0"
                                    >
                                        <img
                                            src={blog.imgLink} alt="News Banner" className='w-100'
                                        />
                                        {/* <h3 className='position-absolute bottom-0 w-100 text-white fs-3 text-center mb-2 px-5'>The transformative Joint Venture between Citi Pharma and Hengzou NewSea Technology Co., Ltd. We're excited about the postive impact this will have!💫</h3> */}
                                    </div>
                                </div>
                                : ""
                        }
                        <div className='blogPage py-3 md:py-5'>
                            <h1 className='mainHeadings'>{blog.title}</h1>
                            {/* <p className='text-secondary fs-6 fw-medium'>Posted Date: {blog.date}</p> */}
                            <p className='text-secondary fs-6 fw-medium d-flex align-items-center'>Posted Date: {blog.date}
                                {blog.linkedinLink ? <Link to={blog.linkedinLink} className='fs-3 ms-5' target='_blank'><FaLinkedin /></Link> : ""}
                            </p>
                            <p style={{ whiteSpace: 'pre-wrap', }} dangerouslySetInnerHTML={{ __html: blog.desc }} />
                        </div>


                    </>
                    :
                    <p>Loading...</p>
                }
            </div>
        </Layout>
    )
}
