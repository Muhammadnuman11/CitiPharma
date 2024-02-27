import React from 'react'
import Layout from './Layout'
import Pages from '../../components/Pages'
import productsData from '../../data/productsData'

export default function Products() {

    return (
        <Layout title={'Finish Products - Citi Pharma'}>
            <Pages title={"Finish Products"} link={"images/apiBanner.jpg"} />
            <div className="products">
                <h1 className='mainHeadings'>Key Products</h1>
                <div className="productTable table-responsive">
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsData.map((product, i) =>
                                    <tr key={i}>
                                        <td className='fw-bold align-middle text-uppercase'>{product.name}</td>
                                        <td>{product.description}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
