import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Layout from './Layout';
import BlogBoxs from '../../components/HomeComponents/BlogBoxs';
import BlogCardContainer from '../../components/BlogCard/BlogCardContainer';
import { Link, NavLink } from 'react-router-dom';
// import OurValues from '../../components/HomeComponents/OurValues';
import Animation from '../../components/Animation';
import blogData from '../../data/blogData'
import scrollToTop from '../../components/scrollToTop';
// import NumberBoxs from '../../components/HomeComponents/NumberBox';

export default function Home() {
  const blogObj = blogData.slice(3).reverse();
  return (
    <Layout>
      <div className='home'>
        {/* Carousel */}
        <div className='carousel'>
          <Carousel fade interval={2000}>
            {/* <Carousel.Item>
              <NavLink to="/blogs/6">
                <div className="img">
                  <img
                    src="images/newsBanner.jpg"
                    alt="News Banner"
                    className='opacity-100'
                  />
                </div>
                <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <p>
                      The transformative Joint Venture bewteen Citi Pharma and Hengzou NewSea Technology Co., Ltd. We're excited about the postive impact this will have!💫
                      </p>
                    </div>
                    </section>
                </Carousel.Caption>
              </NavLink>
            </Carousel.Item> */}

            <Carousel.Item>
              <NavLink to="/api-manufacturer">
                <div className="img">
                  <img
                    src="images/api.png"
                    alt="Api Manufacturer Banner"
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
                    alt="Citi Natural Banner"
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
                    alt="Research Development Banner"
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
                    alt="Biotechnology Banner"
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
        {/* <div className="d-flex align-items-center justify-content-center overflow-hidden">
          <div className="dataBoxs">
            <NumberBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} />
            <NumberBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} />
            <NumberBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} />
            <NumberBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} />
          </div>
        </div> */}

        {/* Blogs Boxses */}
        <div className="d-flex align-items-center justify-content-center overflow-hidden">
          <div className="dataBoxs">
            {/* <DataBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} /> */}
            <Link to="/blog/citi-pharmas-commitment-to-uncompromising-quality" onClick={scrollToTop} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <BlogBoxs icon={"images/quality-icon.png"} title={"Quality"} />
            </Link>
            <Link to="/blog/citi-pharma-game-changing-approach-to-affordable-medications" onClick={scrollToTop} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <BlogBoxs icon={"images/relief-icon.png"} title={"Relief"} />
            </Link>
            <Link to="/blog/citi-pharma-visionary-path-to-global-healthcare-leadership" onClick={scrollToTop} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <BlogBoxs icon={"images/advance-icon.png"} title={"Advancement"} />
            </Link>
          </div>
        </div>

        {/* Exports */}
        <div className="exports">
          <div className="exportText">
            <h1>
              {/* INTERNATIONAL EXPORTS */}
              OUR WORLDWIDE FOOTPRINT!
            </h1>
            <p>We are successfully exporting our nutraceutical products to these countries</p>
          </div>
          <div className="map-section">
            <div className="map-img">
              <img
                src="images/citiMap.png"
                alt="Citi Pharma Business Locations"
              />
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
                  <img src="images/clients/abbott-icon.png" alt="abbott icon" />
                </div>
                <div className="img">
                  <img src="images/clients/martinDow-icon.svg" alt="martinDow icon" />
                </div>
                <div className="img">
                  <img src="images/clients/lci.png" alt="Lci icon" />
                </div>
                <div className="img">
                  <img src="images/clients/tabros.png" alt="tabros icon" />
                </div>
                <div className="img">
                  <img src="images/clients/ferozsons.png" alt="ferozsons icon" />
                </div>
                <div className="img">
                  <img src="images/clients/searle.png" alt="searle icon" />
                </div>
                <div className="img">
                  <img src="images/clients/haleon-icon.svg" alt="haleon icon" />
                </div>
                <div className="img">
                  <img src="images/clients/bayer.svg" alt="bayer icon" />
                </div>
                <div className="img">
                  <img src="images/clients/ccl.png" alt="Ccl icon" />
                </div>
                <div className="img">
                  <img src="images/clients/gsk.png" alt="Gsk icon" />
                </div>
              </div>
            </Animation>
          </div>
        </div>

        {/* job section */}
        {/* <OurValues /> */}

        {/* New Banners */}
        {/* <div className='carouse pt-5'>
          <Carousel fade interval={2000}>
            <Carousel.Item>
              <NavLink to="https://www.linkedin.com/posts/zainab-baig-b83945b7_exciting-news-citipharma-is-heading-to-cphi-activity-7205114499157135361-ROGD/?utm_source=share&utm_medium=member_android" target='_blank'>
                <div className="img">
                  <img
                    src="images/citi-banner.jpg"
                    alt="New Banner"
                    className='opacity-100'
                  />
                </div> */}
        {/* <Carousel.Caption>
                  <section className="slider_section">
                    <div className="detail-box">
                      <p>
                        The transformative Joint Venture bewteen Citi Pharma and Hengzou NewSea Technology Co., Ltd. We're excited about the postive impact this will have!💫
                      </p>
                    </div>
                  </section>
                </Carousel.Caption> */}
        {/* </NavLink>
            </Carousel.Item>
          </Carousel>
        </div> */}

        {/* News section */}
        <div className="news">
          <div className="newsDetail">
            <div className="newsContent">
              <h3>Our latest</h3>
              <h1>News</h1>
            </div>
          </div>
          <div className="cards">
            <div className="container">
              <BlogCardContainer cards={blogObj} />
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}
