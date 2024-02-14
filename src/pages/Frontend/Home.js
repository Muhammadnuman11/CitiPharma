import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Card from '../../components/Card';
// import ClientCard from '../../components/ClientCard';
import Layout from './Layout';
import DataBoxs from '../../components/HomeComponents/DataBoxs';
import { FaQuoteLeft } from "react-icons/fa";

export default function Home() {

  return (
    <Layout title={'Citi Pharma'}>
      <div className='home'>
        <div className='carousel'>
          <Carousel fade interval={2000}>
            <Carousel.Item>
              <div className="img">
                <img
                  src="images/sheet.jpg"
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div>
                </section>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet1.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet2.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet3.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet4.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet5.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet6.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div className="dataBoxs">
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Revenus%20Pierre%20Fabre.svg"} title={"Revenue in 2022"} number={"2,"} countNumber={"7"} suffix={"BN€"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Investissement%20Pierre%20Fabre.svg"} title={"Invested in R&D"} countNumber={"171"} suffix={"M€"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20collaborateurs%20Pierre%20Fabre.svg"} title={"Employees"} number={"+"} countNumber={"9600"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Implantations%20Pierre%20Fabre.svg"} title={"Locations"} countNumber={"43"} />
          </div>
        </div>

        <div className="quote">
          <div className="img">
            <img src="https://static.pierre-fabre.com/corpo/sites/pierre-fabre.com/files/2023-03/Pierre%20Fabre%20HP%20V2%20Quote.png" alt="" />
          </div>
          <div className="quoteText">
            <h1>
              <FaQuoteLeft className='quote-icon' />
            </h1>
            <p>We develop tomorrow's prescription drugs and products with the inexhaustible resources of our imagination. There is no task more exciting than this!</p>
            <p>M. Pierre Fabre, founder of the Group</p>
          </div>
        </div>

        <div className="brands">
          <div className="brandContent">
            <h3>Discover</h3>
            <h1>Our Brands</h1>
            <p>Our dual expertise - pharmaceutical and dermo-cosmetics - helps us offer a holistic approach to care: prevent, treat and support.</p>
            <button className="btn btn-primary">Learn more about our brands </button>
          </div>
          <div className="images">

          </div>
          <div className="clients">

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
