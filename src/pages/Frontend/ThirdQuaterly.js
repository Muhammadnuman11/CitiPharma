import React from 'react'
import Layout from './Layout'
import pdfFile from '../../assets/thirdQuarterlyReport.pdf'

export default function ThirdQuaterly() {
    return (
        <>
            <Layout title={"Third Quarterly Report 2024 - Citi Pharma"} description="Citi Pharma:Third Quarterly Report March 31, 2024 pdf">
                <div className='pdf'>
                    <h1 className='mainHeadings mt-5'>Third Quarterly Report March 31, 2024</h1>
                    <iframe src={pdfFile} title="Annual Report 2023" className='h-100 w-100' />
                </div>
            </Layout >
        </>
    )
}