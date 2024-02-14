import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from '../src/pages/Frontend/Home'
import About from '../src/pages/Frontend/About'
import Contact from '../src/pages/Frontend/Contact'
import Blog from '../src/pages/Frontend/Blog'
// Services
// import Services from './Services/Services'
import PVCShrink from '../src/pages/Frontend/Services/PVCShrink'
import BOPPBags from '../src/pages/Frontend/Services/BOPPBags'
import LDPEFilms from '../src/pages/Frontend/Services/LDPEFilms'
import PVCShrinkSL from '../src/pages/Frontend/Services/PVCShrinkSL'
import StandingPouch from '../src/pages/Frontend/Services/StandingPouch'
import ZipLock from '../src/pages/Frontend/Services/ZipLock'
import POFShrinkFilms from '../src/pages/Frontend/Services/POFShrinkFilms'
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path='/*' element={<Page404 />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/pvcshrink" element={<PVCShrink />} />
        <Route path="/boppbags" element={<BOPPBags />} />
        <Route path="/ldpefilms" element={<LDPEFilms />} />
        <Route path="/pvcshrinksl" element={<PVCShrinkSL />} />
        <Route path="/standingpouch" element={<StandingPouch />} />
        <Route path="/ziplock" element={<ZipLock />} />
        <Route path="/pofshrinkfilms" element={<POFShrinkFilms />} />
      </Routes>
    </>
  );
}

export default App;
