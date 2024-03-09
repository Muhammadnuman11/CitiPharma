import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from '../src/pages/Frontend/Home'
import About from '../src/pages/Frontend/About'
import Contact from '../src/pages/Frontend/Contact'
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Api from './pages/Frontend/Api';
import Products from './pages/Frontend/Products';
import PageNotFound from './pages/Frontend/PageNotFound';
import Pdf from './pages/Frontend/Pdf';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';

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
        <Route path="/finishproducts" element={<Products />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path='/login' element={!auth ? <Login /> : navigate('/dashboard')} /> */}
        <Route path='/dashboard' element={auth ? <Dashboard /> : <Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
