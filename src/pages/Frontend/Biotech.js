import React from 'react'
import Layout from './Layout'
import Pages from '../../components/Pages'

export default function Biotech() {
  return (
    <Layout title={'Biotechnology - Citi Pharma'} description={"Citi Pharma's Biotechnology Initiative: A Step Towards Self-Reliance"}>
      <Pages title={'Biotechnology'} link='images/bio.jpeg' />
      <div className='dev'>
        <div className="devItem">
          <h1>Citi Pharma's Biotechnology Initiative: A Step Towards Self-Reliance</h1>
          <p>In the wake of the COVID-19 pandemic, the global healthcare landscape has undergone a profound transformation. The challenges highlighted by the pandemic have underscored the critical importance of self-reliance in healthcare, particularly in the production of vaccines and biologics. At Citi Pharma, we are proud to announce our ambitious biotechnology initiative aimed at addressing these challenges and contributing to the health and well-being of our communities.</p>
        </div>
        <div className="devPara">
          <div className="devParaBox">
            <div className='para'>
              <h1>Phase 1: Bridging the Gap</h1>
              <p>Pakistan, like many countries, faced significant challenges in accessing vaccines during the pandemic, relying heavily on imports from international companies. Recognizing the need for a more sustainable and self-reliant approach, Citi Pharma aims to launch a biotechnology plant in Pakistan. In Phase 1 of our initiative, we plan to source vaccines and biologics from reputable international companies and make them available to the people of Pakistan and the international market.</p>
              <h1>Phase 2: Towards Self-Reliance</h1>
              <p>Building on the success of Phase 1, our long-term vision involves establishing a WHO-certified manufacturing facility for biologics and vaccines in Pakistan. In Phase 2, we will leverage our expertise and resources to launch local manufacturing of essential vaccines and biologics. By obtaining WHO certification, we aim to meet international quality standards and contribute to global efforts to combat infectious diseases.</p>
            </div>
            <img src="images/bioPage.jpg" alt="" className='bio' />
          </div>
        </div>
        <div className="devItem">
          <h1>Our Commitment to Innovation and Excellence</h1>
          <p>At Citi Pharma, innovation and excellence are at the heart of everything we do. Our biotechnology initiative represents a significant milestone in our journey towards becoming a leader in the healthcare industry. Through strategic partnerships, cutting-edge technology, and a commitment to quality and safety, we are dedicated to delivering life-saving vaccines and biologics to those who need them most.</p>
        </div>
        <div className="devItem">
          <h1>Join Us in Shaping the Future of Healthcare</h1>
          <p>We invite you to join us on this transformative journey towards self-reliance in healthcare. Together, we can make a meaningful difference in the lives of millions of people, ensuring access to essential vaccines and biologics and safeguarding public health for generations to come.
            Stay tuned for more updates on our biotechnology initiative as we work tirelessly to bring this vision to life.
          </p>
        </div>
      </div>
    </Layout>
  )
}
