import React from 'react'
import Layout from './Layout'
import BlogCard from '../../components/BlogCard/BlogCard'
import blogData from '../../data/blogData'
import Pages from '../../components/Pages'

export default function Blog() {
  return (
    <Layout title={"Blog - Citi Pharma"} description={'Citi Pharma stands out for its unwavering commitment to delivering products of the highest quality.'}>
      <Pages title={'Blogs'} link={"images/blog.jpg"} />
      <div className="blog">
        <div className="blogBox">
          {
            /* blogData.reverse().map((blog, i) =>
              <BlogCard key={i} title={blog.title} content={blog.shortDesc} date={blog.date} id={blog.id} linkedinLink={blog.linkedinLink} />
            ) */
            [...blogData].reverse().map((blog, i) =>
              <BlogCard
                key={i}
                title={blog.title}
                content={blog.shortDesc}
                date={blog.date}
                id={blog.id}
                linkedinLink={blog.linkedinLink}
              />
            )
          }
        </div>
      </div>
    </Layout>
  )
}
