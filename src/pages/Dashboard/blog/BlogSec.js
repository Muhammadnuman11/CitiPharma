import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../../../components/BlogCard/BlogCard';
import { MdDelete } from 'react-icons/md';

export default function BlogSec() {
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

  // Delete products
  // Delete Items
  const handleDelete = async (blog) => {
    const blogId = blog._id;
    console.log(blogId)
    const confirmation = window.confirm("Are you sure you want to delete this blog?");

    if (confirmation) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${blogId}`);
        // console.log('Item deleted successfully:', response.data);
        window.notify("Blog deleted successfully", "success")
      } catch (error) {
        // console.error('Error deleting item:', error);
        window.notify("Error deleting Blog:", "error")
      }
    }
  }

  return (
    <div className="blog">
      <div className="blogBox">
        {
          blogs.map((blog, i) =>
            <div key={i} className='blogData'>
              <BlogCard title={blog.title} content={blog.shortDesc} date={new Date(blog.createdAt).toLocaleString()} id={blog._id} />
              <button className='text-danger border-0 fs-4 mx-2 bg-transparent p-0 m-0 delBtn' onClick={() => handleDelete(blog)}>
                <MdDelete />
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}
