import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Card from '../../components/Card';
// import ClientCard from '../../components/ClientCard';
import Layout from './Layout';
import DataBoxs from '../../components/HomeComponents/DataBoxs';
// import Card from '../../components/Card';
import { FaQuoteLeft } from "react-icons/fa";
import CardContainer from '../../components/Card/CardContainer';
import { NavLink } from 'react-router-dom';

export default function Home() {

  const cardsData = [
    { id: 1, title: 'Citi Pharma Group', content: 'Découvrez les dernières nouveautés de Klorane France, expert en soins depuis 50 ans : la crème nettoyante démaquillante et l’eau micellaire au Bleuet BIO. 🌿✨', imgUrl: 'https://unsplash.it/200/203' },
    { id: 2, title: 'Citi Pharma Group', content: 'Découvrez les dernières nouveautés de Klorane France, expert en soins depuis 50 ans : la crème nettoyante démaquillante et l’eau micellaire au Bleuet BIO. 🌿✨', imgUrl: 'https://unsplash.it/200/202' },
    { id: 3, title: 'Citi Pharma Group', content: 'Découvrez les dernières nouveautés de Klorane France, expert en soins depuis 50 ans : la crème nettoyante démaquillante et l’eau micellaire au Bleuet BIO. 🌿✨', imgUrl: 'https://unsplash.it/200/201' },
    // More card data...
  ];

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
                    src="images/apiBanner.jpg"
                    alt=""
                  />
                </div>
            </NavLink>
              </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlvdGVjaCUyMGZvciUyMHBoYXJtYXxlbnwwfHwwfHx8MA%3D%3D'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Finish Products
                    </h1>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmlvdGVjaCUyMGZvciUyMHBoYXJtYXxlbnwwfHwwfHx8MA%3D%3D'
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
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpbmlzaCUyMHByb2R1Y3QlMjBmb3IlMjBwaGFybWF8ZW58MHx8MHx8fDA%3D'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      R & D
                    </h1>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='https://media.istockphoto.com/id/1460294048/photo/scientists-working-in-the-laboratory.webp?b=1&s=170667a&w=0&k=20&c=sf3AXP8jC-deNaZUrqNWCehpBZwEXzY3d3zC4RByIFI='
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Biotech
                    </h1>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Data Boxses */}
        <div className="d-flex align-items-center justify-content-center">
          <div className="dataBoxs">
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Revenus%20Pierre%20Fabre.svg"} title={"Revenue in 2022"} number={"2,"} countNumber={"7"} suffix={"BN€"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Investissement%20Pierre%20Fabre.svg"} title={"Invested in R&D"} countNumber={"171"} suffix={"M€"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20collaborateurs%20Pierre%20Fabre.svg"} title={"Employees"} number={"+"} countNumber={"9600"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Implantations%20Pierre%20Fabre.svg"} title={"Locations"} countNumber={"43"} />
          </div>
        </div>

        {/* Quote */}
        <div className="quote">
          <div className="img">
            <img src="https://static.pierre-fabre.com/corpo/sites/pierre-fabre.com/files/2023-03/Pierre%20Fabre%20HP%20V2%20Quote.png" alt="" />
          </div>
          <div className="quoteText">
            <h1>
              <FaQuoteLeft className='quote-icon' />
            </h1>
            <p>It is our mission to develop, license and manufacture safe, effective, reliable and affordable pharmaceutical products.</p>
            {/* <p>M. Pierre Fabre, founder of the Group</p> */}
          </div>
        </div>

        {/* Brands and Clients */}
        <div className="brands">
          <div className="brandsDetail">
            <div className="brandContent">
              <h3>Discover</h3>
              <h1>Our Brands</h1>
              <p>Our dual expertise - pharmaceutical and dermo-cosmetics - helps us offer a holistic approach to care: prevent, treat and support.</p>
              <button className="btn">Learn more about our brands </button>
            </div>
            <div className="images">
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
            <div className="clients">
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Av%C3%A8ne.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Ducray.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Klorane.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Aderma.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Furterer.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Oral%20care.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Darrow.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Glytone.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Pharmaceutical%20care.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Innovative%20Oncology.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Medical%20dermatology.svg" alt="" />
              </div>
              <div className="img">
                <img src="https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-04/Naturactive.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Commitments */}
        <div className="commitments">
          <div className="commitmentsContent">
            <h3>Focus on</h3>
            <h1>Our Commitments</h1>
            <p>Green Mission Citi Pharma is the eco-socio-responsible commitment from the Citi Pharma Group, awarded the Committed to CSR by AFNOR Certification at the Exemplary level. Thanks to our conviction and drive, we use sustainable innovation to benefit Nature and People, focusing on 5 pillars</p>
            <button className="btn">Discover all our commitments</button>
          </div>
        </div>

        {/* job section */}
        <div className="jobs">
          <div className="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RyweJ8F83Os?si=O9XMJbcimyDmqIKf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="jobDetail">
            <div className="jobContent">
              <h3>Looking for a company</h3>
              <h1>that is in line with your values?</h1>
              <p>Joining the Citi Pharma Group means entering a company with a history overflowing with values, innovation and expertise for patients and consumers. Don't wait! Look at our offers, apply and embark on a human adventure !</p>
              <button className="btn">Discover our job offer</button>
            </div>
          </div>
        </div>

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
              <CardContainer cards={cardsData} />
            </div>
          </div>
        </div>




        {/* <div className="products-client-list">
          <h1>Services</h1>
          <div className="prodects-client-box">
            <Card title={"PVC Shrink Films"} link={"images/shrinkFilm.jpg"} href={"/pvcshrink"} />
            <Card title={"B.O.P.P Bags"} link={"images/sheet5.jpg"} href={"/boppbags"} />
            <Card title={"Courier Printing Bags"} link={"images/courier.png"} href={"/pofshrinkfilms"} />
            <Card title={"HD PE & PP Printing Bags"} link={"images/standingPouch/sPouch1.jpg"} href={"/ziplock"} />
            <Card title={"Neck Seals"} link={"images/neckSeal.jpg"} href={"/pofshrinkfilms"} />
            <Card title={"Wrapping Stretch Film"} link={"images/wrapping.jpg"} href={"/ldpefilms"} />
            <Card title={"PVC Shrink Labels"} link={"images/sheet6.jpg"} href={"/pvcshrinksl"} />
            <Card title={"PVC Shrink Sleeves"} link={"images/sheet4.jpg"} href={"/pvcshrinksl"} />
            <Card title={"Laminated Standing Pouch"} link={"images/standingPouch/sPouch.jpg"} href={"/standingpouch"} />
            <Card title={"Zip lock Bags"} link={"images/zip.jpg"} href={"/ziplock"} />
          </div>
        </div> */}

        {/* <div className="products-client-list">
          <h1>Our Clients</h1>
          <div className="prodects-client-box">
            <ClientCard link={"images/client/nippon.png"} />
            <ClientCard link={"images/client/diamond.jpg"} />
            <ClientCard link={"images/client/gobis.png"} />
            <ClientCard link={"images/client/brighto.png"} />
            <ClientCard link={"images/client/ecs.png"} />
            <ClientCard link={"images/client/servis.png"} />
            <ClientCard link={"images/client/bata.png"} />
            <ClientCard link={"images/client/hush.png"} />
            <ClientCard link={"images/client/kayseria.jpg"} />
            <ClientCard link={"images/client/kausar.png"} />
            <ClientCard link={"images/client/olio.jpg"} />
            <ClientCard link={"images/client/mitchells.jpg"} />
            <ClientCard link={"images/client/firdous.png"} />
            <ClientCard link={"images/client/bandu.png"} />
            <ClientCard link={"images/client/marhaba.png"} />
            <ClientCard link={"images/client/ajmal.png"} />
            <ClientCard link={"images/client/hameed.png"} />
          </div>
        </div> */}


      </div>
    </Layout>
  )
}
