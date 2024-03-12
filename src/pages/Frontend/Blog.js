import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import BlogCard from '../../components/BlogCard/BlogCard'
import axios from 'axios';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        const blogData = response.data
        setBlogs(blogData);
        // console.log(blogData)
      } catch (error) {
        // console.error('Error fetching data:', error);
        window.notify("Error fetching blogs:", "error")
      }
    };

    fetchData();
  }, []);
  return (
    <Layout title={"Blog - Citi Pharma"}>
      <div className="blog">
        <h1 className='mainHeadings'>Blogs</h1>
        <div className="blogBox">
          {
            blogs.map((blog, i) =>
              <BlogCard key={i} title={blog.title} content={blog.shortDesc} date={new Date(blog.createdAt).toLocaleString()} id={blog._id}/>
            )
          }
        </div>
      </div>
    </Layout>
  )
}
