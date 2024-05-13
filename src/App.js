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
import Blog from './pages/Frontend/Blog';
import BlogPage from './components/BlogCard/BlogPage';
// Footer Pages
import Caregiver from './pages/FooterPages/Caregiver';
import Pipeline from './pages/FooterPages/Pipeline';
import Internship from './pages/FooterPages/Internship';
// Reports
import AnnualReport from './pages/Frontend/AnnualReport';
import FirstQuaterly from './pages/Frontend/FirstQuaterly';
import ThirdQuaterly from './pages/Frontend/ThirdQuaterly';

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
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
        <Route path="/research-development" element={<RD />} />
        <Route path="/biotech" element={<Biotech />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/first-quaterly-report" element={<FirstQuaterly />} />
        <Route path="/third-quaterly-report" element={<ThirdQuaterly />} />
        {/* Footer Pages */}
        <Route path="/caregiver" element={<Caregiver />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/internship" element={<Internship />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
