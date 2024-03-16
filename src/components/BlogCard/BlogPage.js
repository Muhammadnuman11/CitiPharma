import React from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../../pages/Frontend/Layout'
import blogData from '../../data/blogData'

export default function BlogPage() {

    const { id } = useParams();

    const blog = blogData[id]

    return (
        <Layout title={`Blog | ${blog.title}`} description={blog.shortDesc}>
            <div className="blogPage">
                {blog ? (
                    <div>
                        <h1 className='mainHeadings'>{blog.title}</h1>
                        <p className='text-secondary fs-6 fw-medium'>Posted Date: {blog.date}</p>
                        <p style={{ whiteSpace: 'pre-wrap', }} dangerouslySetInnerHTML={{ __html: blog.desc }} />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </Layout>
    )
}
