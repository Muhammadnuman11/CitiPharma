import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'

export default function RD() {
    return (
        <Layout title={'Research & Devlopment - Citi Pharma'}>
            <div>
                <Pages title={"Research & Devlopment"} link={"images/apiBanner.jpg"} />
            </div>
        </Layout>
    )
}
