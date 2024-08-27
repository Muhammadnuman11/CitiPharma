import React from 'react'
import Layout from './Layout'
import pdfFile from '../../assets/firstQuarterlyReport.pdf'

export default function FirstQuaterly() {
    return (
        <>
            <Layout title={"Citi Pharma: Quarter One  Report (2023)"} description={"Download Citi Pharma's Q1 Report for (2023). Get insights into our first-quarter performance and financial results."} keywords={"quarterly report, Citi Pharma"}>
                <div className='pdf'>
                    <h1 className='mainHeadings mt-5'>First Quarterly Report September 30, 2023</h1>
                    <iframe src={pdfFile} title="Annual Report 2023" className='h-100 w-100' />
                </div>
            </Layout >
        </>
    )
}
