import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Helmet } from "react-helmet";


export default function Layout({ children, title, description, keywords, author, image, }) {

    // const location = useLocation();
    // const pageURL ="https://citipharma.com.pk" + location.pathname;
    const canonicalUrl = window.location.href;
    // console.log(canonicalUrl)
    return (
        <>
            <Header />

            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <meta property="og:image" content={image} />
                <link rel="canonical" href={canonicalUrl} />
                <title>{title}</title>
            </Helmet>

            <main>
                {children}
            </main>
            <Footer />
        </>
    )
};

Layout.defaultProps = {
    title: 'Citi Pharma: Quality APIs & Pharma Solutions',
    description: 'Citi Pharma: Your trusted partner for high-quality APIs and pharmaceutical solutions. Leading API manufacturer in Pakistan, committed to excellence and innovation',
    keywords: 'api manufacturer, pharmaceutical, biotecnology',
    author: 'Citi Pharma',
    image: 'images/citi-logo.png',
}
