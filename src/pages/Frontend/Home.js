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
              <NavLink to="/api">
                <div className="img">
                  <img
                    src="images/api.png"
                    alt=""
                  />
                </div>
              </NavLink>
            </Carousel.Item>

            <Carousel.Item>
              <NavLink to="/citi-natural">
                <div className="img">
                  <img
                    src="images/natural.jpg"
                    alt=""
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
              <NavLink to="/research-devlopment">
                <div className="img">
                  <img
                    src="images/r&d.png"
                    alt=""
                  />
                </div>
                <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <h1>
                        Research & Devlopment
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
                    alt=""
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
            <Link to="/blog/0" onClick={scrollToTop} className="text-decoration-none">
              <DataBoxs icon={"images/quality.png"} title={"Quality"} />
            </Link>
            <Link to="/blog/1" onClick={scrollToTop} className="text-decoration-none">
              <DataBoxs icon={"images/relief.png"} title={"Relief"} />
            </Link>
            <Link to="/blog/2" onClick={scrollToTop} className="text-decoration-none">
              <DataBoxs icon={"images/advance.png"} title={"Advancement"} />
            </Link>
          </div>
        </div>

        {/* Quote */}
        {/* <div className="quote">
          <div className="img">
            <img src="https://static.pierre-fabre.com/corpo/sites/pierre-fabre.com/files/2023-03/Pierre%20Fabre%20HP%20V2%20Quote.png" alt="" /> 
            <img src="images/pharm.jpg" alt="" />
          </div>
          <div className="quoteText">
            <Animation name={"animate__fadeInDown"}>
              <h1>
                <span className="quote-box">
                  <FaQuoteLeft className='quote-icon' />
                </span>
              </h1>
              <p>It is our mission to develop, license and manufacture safe, effective, reliable and affordable pharmaceutical products.</p>
            </Animation>
          </div>
        </div> */}

        {/* Exports */}
        <div className="exports">
          <div className="exportText">
            <h1>
              INTERNATIONAL EXPORTS
            </h1>
            <p>we are successfully exporting our nutraceutical products to these countries</p>
          </div>
          <div className="flagImgs">
            <img src="images/uzbekistan.png" alt="" />
            <img src="images/dubai.png" alt="" />
            <img src="images/usa.webp" alt="" />
          </div>
        </div>

        {/* collaborations and Clients */}
        <div className="collaborations overflow-hidden">
          <div className="collaborationsDetail">
            <Animation name={"animate__fadeInDown"}>
              <div className="collaborationsContent">
                <h3>Discover</h3>
                <h1>Our Collaborations</h1>
                <p>Our dual expertise - pharmaceutical and dermo-cosmetics - helps us offer a holistic approach to care: prevent, treat and support.</p>
                <button className="btn">Learn more about our collaborations </button>
              </div>
            </Animation>
            <Animation name={"animate__fadeInUp"}>
              <div className="clients">
                <div className="img">
                  <img src="images/clients/abbott.png" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/martinDow.svg" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/lci.png" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/tabros.png" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/ferozsons.png" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/searle.png" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/haleon.svg" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/bayer.svg" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/ccl.png" alt="" />
                </div>
                <div className="img">
                  <img src="images/clients/gsk.png" alt="" />
                </div>
              </div>
            </Animation>
          </div>
        </div>

        {/* Commitments */}
        <div className="commitments">
          <Animation name={"animate__fadeInUp"}>
            <div className="commitmentsContent">
              <h3>Focus on</h3>
              <h1>Our Commitments</h1>
              <p>Green Mission Citi Pharma is the eco-socio-responsible commitment from the Citi Pharma Group, awarded the Committed to CSR by AFNOR Certification at the Exemplary level. Thanks to our conviction and drive, we use sustainable innovation to benefit Nature and People, focusing on 5 pillars</p>
              <button className="btn">Discover all our commitments</button>
            </div>
          </Animation>
        </div>

        {/* job section */}
        <OurValues />

        {/* News section */}
        <div className="news">
          <div className="newsDetail">
            <div className="newsContent">
              <h3>Our latest</h3>
              <h1>News</h1>
              <p>Curious to learn more about our news? Get the latest on our brand innovations, our flagship commitments and the highlights of the life of the Group</p>
              <button className="btn">All our news</button>
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
