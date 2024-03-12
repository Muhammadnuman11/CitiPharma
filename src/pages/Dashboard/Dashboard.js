import React from 'react'
import Nav from './components/Nav'
import BlogSec from './blog/BlogSec'

export default function Dashboard() {

  return (
    <div style={{background: "whitesmoke",}}>
      <Nav />
      <h1 className='mainHeadings px-5'>Dashboard</h1>
      <BlogSec />
    </div>
  )
}
