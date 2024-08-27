import React from 'react'
import Layout from './Layout'
import pdfFile from '../../assets/annualReport.pdf'

export default function AnnualReport() {
    return (
        <>
            <Layout title={"Citi Pharma: Annual Report (2023)"} description={"Access Citi Pharma's Annual Report for (2023). Explore our financial performance, achievements, and future goals."} keywords={"annual report, Citi Pharma"}>

                <div className='pdf'>
                    <h1 className='mainHeadings mt-5'>Annual Report 2023</h1>
                    <iframe src={pdfFile} title="Annual Report 2023" className='h-100 w-100' />
                </div>

            </Layout >
        </>
    )
}
