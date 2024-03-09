import React from 'react'
import Layout from './Layout'

export default function Pdf() {
    return (
        <>
            <Layout title={"Annual Report 2023 - Citi Pharma"}>
                <div className="pdf">
                    <h1 className='mainHeadings pt-5'>Annual Report 2023</h1>
                    <div className="iframe">
                        <iframe src="images/annualReport.pdf" title='Annual Report 2023' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-100 w-100' />
                    </div>
                </div>
            </Layout >
        </>
    )
}
