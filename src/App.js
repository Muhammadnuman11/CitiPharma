import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from '../src/pages/Frontend/Home'
import About from '../src/pages/Frontend/About'
import Contact from '../src/pages/Frontend/Contact'
import Loader from './components/Loader';
import Api from './pages/Frontend/Api';
import Products from './pages/Frontend/Products';
import Biotech from './pages/Frontend/Biotech';
import RD from './pages/Frontend/R&D';
import Natural from './pages/Frontend/Natural';
import PageNotFound from './pages/Frontend/PageNotFound';
import Pdf from './pages/Frontend/Pdf';
import Blog from './pages/Frontend/Blog';
import BlogPage from './components/BlogCard/BlogPage';
import Caregiver from './pages/FooterPages/Caregiver';
// Footer Pages

function App() {

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
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api-manufacturer" element={<Api />} />
        <Route path="/finish-products" element={<Products />} />
        <Route path="/citi-natural" element={<Natural />} />
        <Route path="/research-devlopment" element={<RD />} />
        <Route path="/biotech" element={<Biotech />} />
        <Route path="/annual-report" element={<Pdf />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        {/* Footer Pages */}
        <Route path="/caregiver" element={<Caregiver />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
