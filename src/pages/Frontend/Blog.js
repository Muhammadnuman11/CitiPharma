import React from 'react'
import Layout from './Layout'
import BlogCard from '../../components/BlogCard/BlogCard'
import blogData from '../../data/blogData'

export default function Blog() {
  return (
    <Layout title={"Blog - Citi Pharma"}>
      <div className="blog">
        <h1 className='mainHeadings'>Blogs</h1>
        <div className="blogBox">
          {
            blogData.map((blog, i) =>
              <BlogCard key={i} title={blog.title} content={blog.shortDesc} date={blog.date} id={blog.id}/>
            )
          }
        </div>
      </div>
    </Layout>
  )
}
