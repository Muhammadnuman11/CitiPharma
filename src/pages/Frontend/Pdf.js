import React from 'react'
import Layout from './Layout'
import pdfFile from '../../assets/annualReport.pdf'

export default function Pdf() {
    return (
        <>
            <Layout title={"Annual Report 2023 - Citi Pharma"} description="Citi Pharma: Annual Report 2023 pdf">

                <div className='pdf'>
                    <h1 className='mainHeadings mt-5'>Annual Report 2023</h1>
                    <iframe src={pdfFile} title="Annual Report 2023" className='h-100 w-100' />
                </div>

            </Layout >
        </>
    )
}
