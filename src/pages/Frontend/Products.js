import React, { useState } from 'react'
import Layout from './Layout'
import Animation from '../../components/Animation'
import productsData from '../../data/productsData'

export default function Products() {
    // Sorting
    const sortedData = [...productsData].sort((a, b) => a.number - b.number);

    // Search 
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = sortedData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <Layout title={'Finish Products - Citi Pharma'}>
            <Animation name={"animate__fadeInUp"}>
                <div className="products">
                    <h1 className='mainHeadings'>Registered Product List</h1>
                    <input
                        type="text"
                        placeholder="Search Name Here"
                        value={searchTerm}
                        onChange={handleSearch}
                        className='form-control my-3 shadow-none border rounded-0 m-auto p-2 comp'
                    />
                    <div className="productTable table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr className='text-center align-middle m-auto'>
                                    <th>Sr. No.</th>
                                    <th>Registration Number</th>
                                    <th>Product Name</th>
                                    <th>Dosage Form</th>
                                    <th>Potency</th>
                                    <th>Composition</th>
                                    <th>Pack Size</th>
                                    <th>Registration / Renewal Date</th>
                                    <th>Next Date Of Renewal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((product, i) =>
                                        <tr key={i} className='text-center align-middle m-auto'>
                                            <td>{i + 1}</td>
                                            <td>{product.number}</td>
                                            <td className='text-uppercase'>{product.name}</td>
                                            <td>{product.form}</td>
                                            <td>{product.potency}</td>
                                            <td className='comp'>{product.composition}</td>
                                            <td>{product.size}</td>
                                            <td>{product.rDate}</td>
                                            <td>{product.nDate}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Animation>
        </Layout>
    )
}
