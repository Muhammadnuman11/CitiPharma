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
    title: 'Citi Pharma',
    description: 'Welcome to Citi Pharma, a beacon of excellence in the realm of pharmaceuticals. Situated in Pakistan, we proudly stand as one of the largest API manufacturers in the country, boasting a state-of-the-art facility adorned with cutting-edge technology.',
    keywords: 'citi pharma, api, pharmaceutical, citi natural, biotech, research & devlopment, Antibiotic, Penicillin, usp & bp, vitamin. citi naturals, nutraceuticals, biotecnology, molecules, annual reports',
    author: 'Numan Irshad - Markoverment',
}
