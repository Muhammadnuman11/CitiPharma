import React from 'react'
import Layout from './Layout'
import BlogCard from '../../components/BlogCard/BlogCard'
import blogData from '../../data/blogData'
import Pages from '../../components/Pages'

export default function Blog() {
  return (
    <Layout title={"Citi Pharma Blog: Industry Insights and Updates"} description={'Stay informed with the latest news, trends, and insights from Citi Pharma. Our blog covers topics like pharmaceuticals, healthcare, biotechnology, and industry updates.'} keywords={"blog, Citi Pharma"} image={"images/citi-blog.jpg"}>
      <Pages title={'Blogs'} alt={"Citi Pharma Blogs"} link={"images/citi-blog.jpg"} />
      <div className="blog mt-5">
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
                URL = {blog.URL}
                keywords = {blog.keywords}
                metaTitle = {blog.metaTitle}
              />
            )
          }
        </div>
      </div>
    </Layout>
  )
}
