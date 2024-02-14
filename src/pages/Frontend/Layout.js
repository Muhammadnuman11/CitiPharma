import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Helmet } from "react-helmet";


export default function Layout({ children, title, description, keywords, author }) {

    return (
        <>
            <Header />

            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
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
    title: 'Lahore Plastic',
    description: 'LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.',
    keywords: 'pvc, bopp, ldped, pof, ziplock',
    author: 'Numan Irshad',
}
