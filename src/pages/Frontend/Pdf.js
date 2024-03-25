import React from 'react'
import Layout from './Layout'
import pdfFile from '../../assets/annualReport.pdf'

export default function Pdf() {
    return (
        <>
            <Layout title={"Annual Report 2023 - Citi Pharma"} description="Citi Pharma: Annual Report 2023 pdf">

                <div className='pdf'>
                    <h1 className='mainHeadings mt-5'>Annual Report 2023</h1>
                    {/* <iframe src="https://firebasestorage.googleapis.com/v0/b/markoverment-crm.appspot.com/o/Cit%20Pharma%20Annual%20Report%202023.pdf?alt=media&token=97db8747-1381-4c01-ac7b-32bd64793ca1" title="Annual Report 2023" className='h-100 w-100' /> */}
                    <iframe src={pdfFile} title="Annual Report 2023" className='h-100 w-100' />
                </div>

            </Layout >
        </>
    )
}
