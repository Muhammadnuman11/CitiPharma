import React, { useState } from 'react'
import ProductNav from './ProductNav'
import { useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdEditSquare } from 'react-icons/md';

const initialState = {
  number: "",
  name: "",
  form: "",
  potency: "",
  composition: "",
  size: "",
  rDate: "",
  nDate: "",
}

export default function ProductSec() {
  // Get Products
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

  // Delete products
  // Delete Items
  const handleDelete = async (product) => {
    const productId = product._id;
    console.log(productId)
    const confirmation = window.confirm("Are you sure you want to delete this product?");

    if (confirmation) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${productId}`);
        // console.log('Item deleted successfully:', response.data);
        window.notify("Product deleted successfully", "success")
      } catch (error) {
        // console.error('Error deleting item:', error);
        window.notify("Error deleting Product:", "error")
      }
    }
  }

  // Update Items
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    let { number, name, form, potency, composition, size, rDate, nDate } = state

    number = number.trim()
    name = name.trim()
    form = form.trim()
    potency = potency.trim()
    composition = composition.trim()
    size = size.trim()

    if (!number) {
      return window.notify("Please enter reg. number", "error")
    }
    if (name.length < 3) {
      return window.notify("Please enter product name", "error")
    }
    if (form.length < 3) {
      return window.notify("Please enter dosage form", "error")
    }
    if (potency.length < 3) {
      return window.notify("Please enter potency", "error")
    }
    if (composition.length < 3) {
      return window.notify("Please enter composition", "error")
    }
    if (size.length < 3) {
      return window.notify("Please enter pack size", "error")
    }
    if (!rDate) {
      return window.notify("Please enter renewal date", "error")
    }
    if (!nDate) {
      return window.notify("Please enter next renewal date", "error")
    }

    let prductData = { number, name, form, potency, composition, size, rDate, nDate };
    const productId = state._id;

    try {
      await axios.put(`http://localhost:5000/api/products/${productId}`, prductData);
      // console.log('Item updated successfully:', response.data);
      window.notify("Product updated successfully:", "success")
    } catch (error) {
      // console.error('Error updating item:', error);
      window.notify("Error updating product", "error")
    }

  }

  return (
    <>
      <ProductNav />
      <div className="products">
        <h1 className='mainHeadings'>Products list</h1>
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
                <th>Actions</th>
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
                    <td>
                      <button className='text-danger border-0 fs-4 mx-2 bg-transparent p-0 m-0' onClick={() => handleDelete(product)}>
                        <MdDelete />
                      </button>
                      <button className='text-secondary border-0 fs-4 mx-2 bg-transparent p-0 m-0' data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => setState(product)}>
                        <MdEditSquare />
                      </button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateModalLabel">Update Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="my-2">
                  <label htmlFor="number">Registration Number</label>
                  <input type="text" id="number" placeholder='Enter Registration Number' className='form-control shadow-none p-2 my-1' name='number' value={state.number} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="name">Product Name</label>
                  <input type="text" id="name" placeholder='Enter Product Name' className='form-control shadow-none p-2 my-1' name='name' value={state.name} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="form">Dosage form</label>
                  <input type="text" id="form" placeholder='Enter Dosage form' className='form-control shadow-none p-2 my-1' name='form' value={state.form} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="potency">Potency</label>
                  <input type="text" id="potency" placeholder='Enter Potency' className='form-control shadow-none p-2 my-1' name='potency' value={state.potency} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="composition">Composition</label>
                  <input type="text" id="composition" placeholder='Enter Composition' className='form-control shadow-none p-2 my-1' name='composition' value={state.composition} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="size">Pack Size</label>
                  <input type="text" id="size" placeholder='Enter Pack Size' className='form-control shadow-none p-2 my-1' name='size' value={state.size} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="renewal">Renewal Date</label>
                  <input type="date" id="renewal" placeholder='Enter Renewal Date' className='form-control shadow-none p-2 my-1' name='rDate' value={state.rDate} onChange={handleChange} />
                </div>
                <div className="my-2">
                  <label htmlFor="next">Next Date of Renewal</label>
                  <input type="date" id="next" placeholder='Enter Next Renewal Date' className='form-control shadow-none p-2 my-1' name='nDate' value={state.nDate} onChange={handleChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleUpdate} className="btn btn-primary" data-bs-dismiss="modal">Update Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
