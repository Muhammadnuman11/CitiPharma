import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from '../src/pages/Frontend/Home'
import About from '../src/pages/Frontend/About'
import Contact from '../src/pages/Frontend/Contact'
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Api from './pages/Frontend/Api';
import Products from './pages/Frontend/Products';
import Biotech from './pages/Frontend/Biotech';
import RD from './pages/Frontend/R&D';
import Natural from './pages/Frontend/Natural';
import PageNotFound from './pages/Frontend/PageNotFound';
import Pdf from './pages/Frontend/Pdf';
import Login from './pages/Auth/Login';
// Dashboard
import Dashboard from './pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import ProductSec from './pages/Dashboard/productsManagement/ProductSec';
import BlogSec from './pages/Dashboard/blog/BlogSec';

function App() {
  const auth = localStorage.getItem("auth")

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  if (loading) {
    return <Loader />
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<Api />} />
        <Route path="/finish-products" element={<Products />} />
        <Route path="/citi-natural" element={<Natural />} />
        <Route path="/research-devlopment" element={<RD />} />
        <Route path="/orthotics-biotech" element={<Biotech />} />
        <Route path="/annual-report" element={<Pdf />} />
        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path='/login' element={!auth ? <Login /> : navigate('/dashboard')} /> */}
        <Route path='/dashboard' element={auth ? <Dashboard /> : <Login />} />
        <Route path='/dashboard/product' element={auth ? <ProductSec /> : <Login />} />
        <Route path='/dashboard/blog' element={auth ? <BlogSec /> : <Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
