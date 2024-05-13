import React from 'react'
import Layout from './Layout'
import pdfFile from '../../assets/firstQuarterlyReport.pdf'

export default function FirstQuaterly() {
    return (
        <>
            <Layout title={"First Quarterly Report 2023 - Citi Pharma"} description="Citi Pharma: First Quarterly Report September 30, 2023 pdf">
                <div className='pdf'>
                    <h1 className='mainHeadings mt-5'>First Quarterly Report September 30, 2023</h1>
                    <iframe src={pdfFile} title="Annual Report 2023" className='h-100 w-100' />
                </div>
            </Layout >
        </>
    )
}
