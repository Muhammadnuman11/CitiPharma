import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../../pages/Frontend/Layout'

export default function BlogPage() {

    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    console.log(id)
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(response.data);
                console.log(response.data);
            } catch (error) {
                // console.error('Error fetching blog post:', error);
                window.notify("Error fetching blog post:", "error");
            }
        };

        fetchBlog();
    }, [id]);


    return (
        <Layout title={`Blog | ${blog.title}`} description={blog.shortDesc}>
            <div className="blogPage">
                {blog ? (
                    <div>
                        <h1 className='mainHeadings'>{blog.title}</h1>
                        <p className='text-secondary fw-bold'>Posted Date: {new Date(blog.createdAt).toLocaleString()}</p>
                        <p>{blog.desc}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </Layout>
    )
}
