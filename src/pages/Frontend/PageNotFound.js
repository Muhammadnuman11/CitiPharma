import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import Animation from '../../components/Animation'

export default function PageNotFound() {
    return (
        <Layout title={"Page Not Found - Citi Pharma"} description={"Citi Pharma: The page you are looking for doesn't exist."}>
            <Animation name={"animate__fadeInUp"}>
                <div className="page-404">
                    <h1>404</h1>
                    <h2>Oops! Page not found</h2>
                    <p>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
                    <Link to="/" className='btn'>Go to homepage</Link>
                </div>
            </Animation>
        </Layout>
    )
}
