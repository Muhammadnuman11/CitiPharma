import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Layout from './Layout';
import DataBoxs from '../../components/HomeComponents/DataBoxs';
import BlogCardContainer from '../../components/BlogCard/BlogCardContainer';
import { Link, NavLink } from 'react-router-dom';
import OurValues from '../../components/HomeComponents/OurValues';
import Animation from '../../components/Animation';
import blogData from '../../data/blogData'
import scrollToTop from '../../components/scrollToTop';

export default function Home() {
  const blogObj = blogData.slice(3);
  return (
    <Layout title={'Citi Pharma'}>
      <div className='home'>
        {/* Carousel */}
        <div className='carousel'>
          <Carousel fade interval={2000}>
            <Carousel.Item>
              <NavLink to="/api-manufacturer">
                <div className="img">
                  <img
                    src="images/api.png"
                    alt="Api Banner"
                  />
                </div>
                <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <h1>
                      API Manufacturer
                      </h1>
                    </div></section>
                </Carousel.Caption>
              </NavLink>
            </Carousel.Item>

            <Carousel.Item>
              <NavLink to="/citi-natural">
                <div className="img">
                  <img
                    src="images/natural.jpg"
                    alt="Citi Natural"
                  />
                </div>
                <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <h1>
                        Citi Natural
                      </h1>
                    </div></section>
                </Carousel.Caption>
              </NavLink>
            </Carousel.Item>

            <Carousel.Item>
              <NavLink to="/research-development">
                <div className="img">
                  <img
                    src="images/r&d.png"
                    alt="research-development"
                  />
                </div>
                <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <h1>
                        Research & Development
                      </h1>
                    </div></section>
                </Carousel.Caption>
              </NavLink>
            </Carousel.Item>

            <Carousel.Item>
              <NavLink to="/biotech">
                <div className="img">
                  <img
                    src="images/biotech.jpg"
                    alt="biotech"
                  />
                </div>
                <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <h1>
                        Biotechnology
                      </h1>
                    </div></section>
                </Carousel.Caption>
              </NavLink>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Data Boxses */}
        <div className="d-flex align-items-center justify-content-center overflow-hidden">
          <div className="dataBoxs">
            {/* <DataBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} /> */}
            <Link to="/blogs/0" onClick={scrollToTop} className="text-decoration-none">
              <DataBoxs icon={"images/quality-icon.png"} title={"Quality"} />
            </Link>
            <Link to="/blogs/1" onClick={scrollToTop} className="text-decoration-none">
              <DataBoxs icon={"images/relief-icon.png"} title={"Relief"} />
            </Link>
            <Link to="/blogs/2" onClick={scrollToTop} className="text-decoration-none">
              <DataBoxs icon={"images/advance-icon.png"} title={"Advancement"} />
            </Link>
          </div>
        </div>

        {/* Exports */}
        <div className="exports">
          <div className="exportText">
            <h1>
              INTERNATIONAL EXPORTS
            </h1>
            <p>we are successfully exporting our nutraceutical products to these countries</p>
          </div>
          <div className="flagImgs">
            <div className='img-box'>
              <img src="images/uzbekistan.png" alt="Uzbekistan flag" />
              <p>Uzbekistan</p>
            </div>
            <div className='img-box'>
              <img src="images/dubai.png" alt="Uae flag" />
              <p>Dubai</p>
            </div>
            <div className='img-box'>
              <img src="images/usa.webp" alt="Usa flag" />
              <p>Usa</p>
            </div>
          </div>
        </div>

        {/* collaborations and Clients */}
        <div className="collaborations overflow-hidden">
          <div className="collaborationsDetail">
            <Animation name={"animate__fadeInDown"}>
              <div className="collaborationsContent">
                <h3>Discover</h3>
                <h1>Our Collaborations</h1>
                <p>We are collaborating with national and multi-national companies.</p>
                {/* <button className="btn">Learn more about our collaborations </button> */}
              </div>
            </Animation>
            <Animation name={"animate__fadeInUp"}>
              <div className="clients">
                <div className="img">
                  <img src="images/clients/abbott-icon.png" alt="abbott-icon" />
                </div>
                <div className="img">
                  <img src="images/clients/martinDow-icon.svg" alt="martinDow-icon" />
                </div>
                <div className="img">
                  <img src="images/clients/lci.png" alt="Lci" />
                </div>
                <div className="img">
                  <img src="images/clients/tabros.png" alt="tabros" />
                </div>
                <div className="img">
                  <img src="images/clients/ferozsons.png" alt="ferozsons" />
                </div>
                <div className="img">
                  <img src="images/clients/searle.png" alt="searle" />
                </div>
                <div className="img">
                  <img src="images/clients/haleon-icon.svg" alt="haleon" />
                </div>
                <div className="img">
                  <img src="images/clients/bayer.svg" alt="bayer" />
                </div>
                <div className="img">
                  <img src="images/clients/ccl.png" alt="Ccl" />
                </div>
                <div className="img">
                  <img src="images/clients/gsk.png" alt="Gsk" />
                </div>
              </div>
            </Animation>
          </div>
        </div>

        {/* job section */}
        <OurValues />

        {/* News section */}
        <div className="news">
          <div className="newsDetail">
            <div className="newsContent">
              <h3>Our latest</h3>
              <h1>News</h1>
              {/* <button className="btn">All our news</button>  */}
            </div>
          </div>
          <div className="cards">
            <div className="container">
              <BlogCardContainer cards={blogObj} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
