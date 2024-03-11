import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'

export default function Blog() {
  return (
    <Layout title={"Blog - Citi Pharma"}>
      <div className="blog">
        <Pages title={"Our Blog"} />
      </div>
    </Layout>
  )
}
