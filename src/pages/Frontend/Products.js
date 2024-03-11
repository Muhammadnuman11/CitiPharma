import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Pages from '../../components/Pages'
import Animation from '../../components/Animation'
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                const prod = response.data
                setProducts(prod);
                // console.log(prod)
            } catch (error) {
                // console.error('Error fetching data:', error);
                window.notify("Error fetching products:", "error")
            }
        };

        fetchData();
    }, []);

    // Search 
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <Layout title={'Finish Products - Citi Pharma'}>
            <Pages title={"Finish Products"} link={"images/apiBanner.jpg"} />
            <Animation name={"animate__fadeInUp"}>
                <div className="products">
                    <h1 className='mainHeadings'>Registered Product List</h1>
                    <input
                        type="text"
                        placeholder="Search Name Here"
                        value={searchTerm}
                        onChange={handleSearch}
                        className='form-control my-3 shadow-none border-2 border-primary rounded-0 m-auto p-2 comp'
                    />
                    <div className="productTable table-responsive">
                        <table className="table table-bordered border-primary shadow">
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
