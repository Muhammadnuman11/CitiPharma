import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'

export default function Blog() {
  return (
    <Layout title={"Blog - Lahore Plastic"}>
      <div className="blog">
        <Pages title={"Blog"} />
      </div>
    </Layout>
  )
}
