import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'
import DataBoxs from '../../components/HomeComponents/DataBoxs'

export default function About() {
  return (
    <Layout title={"About - Citi Pharma"}>
      <div className="about">
        <Pages title={"About Citi Pharma"} link={"images/apiBanner.jpg"} />

        <div className="aboutBox">

          {/* Intro */}
          <div className="aboutDetails">
            <div className='w-50'>
              <h1>Welcome to Citi Pharma!</h1>
              <p>The factory is located at 3km Head Balloki road, Kasur. It has a land of 47 acres and have more than 800,000 Sq. Feet covered area. Citi Pharma got its first project in 1990 by AWT. Then the major plant erection period started in 1993 and ended somewhere in 1996. Production commenced in 1996 and formulation established in 2003.</p>
              <p>Citi Pharma mission is to dedicate itself top adding exceptional value through creation of innovative and cost effective Pharma products and develop a corporate culture that rewards initiative, enthusiasm and ethical practices.</p>
            </div>
            <div className="img">
              <img src="https://images.unsplash.com/photo-1605692024639-04377ef2fd90?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="aboutDetails">
            <div className='w-50'>
              <h1>Our Mission</h1>
              <p>It is our mission to develop, license and manufacture safe, effective, reliable and affordable pharmaceutical products.</p>
              <h1>Our Vision</h1>
              <p>Recognized as a provider of specialty patient-care pharmaceuticals and hospitals products, we offer global solutions to improve the quality of life.</p>
            </div>
            <div className="img">
              <img src="https://www.metropharmaceuticals.com.pk/wp-content/uploads/sites/9/2016/10/inner_large_2a.png" alt="" />
            </div>
          </div>

          {/* Data Boxses */}
          <div className="d-flex align-items-center justify-content-between w-100 flex-wrap">
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Revenus%20Pierre%20Fabre.svg"} title={"Revenue in 2022"} number={"2,"} countNumber={"7"} suffix={"BN€"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Investissement%20Pierre%20Fabre.svg"} title={"Invested in R&D"} countNumber={"171"} suffix={"M€"} />
            <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20collaborateurs%20Pierre%20Fabre.svg"} title={"Employees"} number={"+"} countNumber={"9600"} />
            {/* <DataBoxs icon={"https://www.pierre-fabre.com/sites/pierre-fabre.com/files/2023-03/HP%20V2%20Picto%20Implantations%20Pierre%20Fabre.svg"} title={"Locations"} countNumber={"43"} /> */}
          </div>

          {/* CEO Message */}
          <div className="aboutDetails">
            <div className='w-50'>
              <h1>CEO message</h1>
              <p>Citi Pharma is a future oriented & progressive pharmaceutical company. Citi Pharma vision is based on quality and professionalism. Our people and resources are dedicated to provide quality products and ethical services to meet the needs of customers in a responsible manner.</p>
              <p>There is an emphasis on employee pride, meticulous quality control and optimum resources utilization to achieve and maintain a leadership position in the healthcare industry, to grow thorough aggressive but ethical marketing, and to maintain synergy in our business. We are also conscious of our social responsibility to improve the quality of life of our customers, our staff and the society we inhabit; and every step taken at Citi Pharma is geared towards a better & healthier life for all, as we practice.</p>
              <div className='signImg'>
                <img src="https://s3-alpha.figma.com/hub/file/1648758856/530543c0-644d-4369-9314-97c5eb197d37-cover.png" alt="Sign" />
              </div>
              <p className='p-1 m-0'>Person Name</p>
              <p className='p-1 m-0'>C.E.O</p>
            </div>
            <div className="img">
              <img src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png" className='px-5' alt="CEOImage" />
            </div>
          </div>
        </div>


      </div>
    </Layout>
  )
}
