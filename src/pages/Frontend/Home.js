import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Layout from './Layout';
import DataBoxs from '../../components/HomeComponents/DataBoxs';
import { FaQuoteLeft } from "react-icons/fa";
import BlogCardContainer from '../../components/BlogCard/BlogCardContainer';
import { NavLink } from 'react-router-dom';
import OurValues from '../../components/HomeComponents/OurValues';
import Animation from '../../components/Animation';
import axios from 'axios';

export default function Home() {

  // const cardsData = [
  //   { id: 1, title: "Future Fusion: CITI Pharma's Visionary Path to Health", content: 'CITI Pharma stands at the forefront of innovation and progress in the pharmaceutical industry. Our vision extends far beyond the boundaries of Pakistan, reaching towards a future where CITI Pharma is a global leader in healthcare solutions'},
  //   { id: 2, title: 'Citi Pharma Group', content: 'Découvrez les dernières nouveautés de Klorane France, expert en soins depuis 50 ans : la crème nettoyante démaquillante et l’eau micellaire au Bleuet BIO.' },
  //   { id: 3, title: 'Citi Pharma Group', content: 'Découvrez les dernières nouveautés de Klorane France, expert en soins depuis 50 ans : la crème nettoyante démaquillante et l’eau micellaire au Bleuet BIO.' },
  // ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        const blogData = response.data;
        // Sort blogs by createdAt date in descending order
        blogData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Take the first 3 blogs
        const newestBlogs = blogData.slice(0, 3);
        setBlogs(newestBlogs);
      } catch (error) {
        console.error('Error fetching data:', error);
        window.notify("Error fetching blogs:", "error");
      }
    };

    fetchData();
  }, []);


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
              <NavLink to="/orthotics-biotech">
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
                        Orthotics & Biotech
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
            <DataBoxs icon={"images/revenue.png"} title={"Revenue in 2023"} number={"44."} countNumber={"27"} suffix={"M $"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Investissement%20Pierre%20Fabre.svg"} title={"Invested in R&D"} number={"2."} countNumber={"5"} suffix={"M $"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20collaborateurs%20Pierre%20Fabre.svg"} title={"Employees"} number={"+"} countNumber={"800"} />
          </div>
        </div>

        {/* Quote */}
        <div className="quote">
          <div className="img">
            <img src="https://static.pierre-fabre.com/corpo/sites/pierre-fabre.com/files/2023-03/Pierre%20Fabre%20HP%20V2%20Quote.png" alt="" />
          </div>
          <div className="quoteText">
            <Animation name={"animate__fadeInDown"}>
              <h1>
                <span className="quote-box">
                  <FaQuoteLeft className='quote-icon' />
                </span>
              </h1>
              <p>It is our mission to develop, license and manufacture safe, effective, reliable and affordable pharmaceutical products.</p>
              {/* <p>M. Pierre Fabre, founder of the Group</p> */}
            </Animation>
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
            {/* <Animation name={"animate__fadeInRight"}>
              <div className='images'>
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1556229165-8aa0ceaa93a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFrZSUyMGNhcmUlMjBoZXIlMjBoYWlyfGVufDB8fDB8fHww" alt="" />
                  <h1>Take care of your skin, hair and oral health.</h1>
                </div>
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1630959305790-4c956ce6c0b6?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <h1>Treating cancer</h1>
                </div>
                <div className="img">
                  <img src="https://images.unsplash.com/photo-1683208529938-8a7fb89c855f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <h1>Treating chronic diseases</h1>
                </div>
                <div className="img">
                  <img src="https://media.istockphoto.com/id/1344413214/photo/doctor-listening-to-little-boys-heart.jpg?s=1024x1024&w=is&k=20&c=ppxfnKq-Myx8xuds8ZvtnreoWRoV0bd35PrU-JhhJyc=" alt="" />
                  <h1>Treating everyday ailments</h1>
                </div>
              </div>
            </Animation> */}
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
              <BlogCardContainer cards={blogs} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
