import React, { useState } from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'
import CardContainer from '../../components/Card/CardContainer';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const cardsData = [
    { id: 1, title: 'Mr. Nadeem Amjad', job: "Chairman", content: 'Mr. Amjad is also an early age entrepreneur with over 3 decades of profession business experience. He expanded the family business into the Hong Kong Real Estate business as well as hospitality.He holds an MBA from University of London.', imgUrl: 'images/members/nadeem.jpg' },
    { id: 2, title: 'Mr. Rizwan Ahmad', job: 'CEO', content: 'Mr. Rizwan Sheikh is the Chief Executive Officer of the Company. He is widely recognized as one of the leading thought leaders, entrepreneurs and Chief Executives in Pakistan’s pharma sector. Mr. Sheikh entered into the world of business at an early age, when he joined the family telecommunications business under the name of Citi Phones (Pvt.) ', imgUrl: 'images/members/rizwan.jpg' },
    { id: 3, title: 'Mr. Abdul Jaleel Sheikh', job: "Independent Director", content: 'Mr. Jaleel is serving as Chief Risk Officer of Pak Brunei Investment Company and also holds nominee directorship in Nimir Industrial Chemicals Liamited, Awwal Modaraba Management Limited, Primus Leasing Limited and Awwal Corporate Restructuring Company Limited. ', imgUrl: 'images/members/jaleel.jpg' },
    { id: 4, title: 'Ms. Farzin Khan', job: "Independent Director", content: 'Farzin Khan is presently serving as National Consultant – Programme Management and Stakeholder Coordination Expert at United Nations Office on Drugs & Crime (UNODC) Pakistan. Previously, she has served as National Programme Manager - AML and FATF Support for Pakistan with UNODC from 2019 till 2021.', imgUrl: 'images/members/farzin.jpg' },
    { id: 5, title: 'Mrs. Saira Aslam', job: "Non-Executive Director", content: 'Mrs. Saira Aslam is an Bsc from Lahore Garrison College and is associated with CPHL as a Director. She actively participates in the philanthropy in the city of Lahore and is considered to be one of the active philanthropists city.', imgUrl: 'images/members/saira.jpg' },
    { id: 6, title: 'Dr. Zameer Ul Hassan', job: "Director", content: 'Dr. Shah is an experienced pharmaceutical sector professional with over 2 decades of experience in leading local and MNC companies. He is currently working as Director Operations of CPHL and is in charge of all production related matters. Prior to joining CPHL in 2002, Dr. Shah was involved with leading pharma sector players such as Global Pharmaceuticals (Pvt.)', imgUrl: 'images/members/zameer.jpg' },
    { id: 7, title: 'Mr. Muhammad Naeem', job: "Non-Executive Director", content: 'He has more than 25 years of experience in retail sector, covering mostly electronic items and mobile phones. He serves as the Director of Citi Pharma Limited.', imgUrl: 'images/members/naeem.jpg' },
    { id: 8, title: 'Mr. Asif Iqbal', job: "Chief Financial Officer", content: 'Mr. Asif Iqbal has been serving as the Chief Financial Officer at CPHL for the past four years. He has more than 13 years experience which spans various financial matters including raising debt and equity financing, financial reporting, corporate and taxation laws.', imgUrl: 'images/members/asif.jpg' },
    { id: 9, title: 'Mr. Muhammad Riaz', job: "Company Secretary & Head of Legal", content: 'Mr. Muhammad Riaz is working at Citi Pharma Limited since 2020 and successfully completed the conversion process of Citi pharma (Pvt.) Limited to Public unlisted and subsequently accomplish the process of listing and met with all the pre & post listing requirements with SECP, CDC and PSX. ', imgUrl: 'images/members/riaz.jpg' },
    // More card data...
  ];
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
              <img src="images/citiPharma.jpg" alt="" />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="aboutDetails">
            <div className='w-50'>
              <h1>Our Mission</h1>
              <p>Citi Pharma's mission is to
                dedicate itself exceptional value
                through creation of innovative &
                cost-effective pharma products
                and develop a corporate
                culture that rewards initiative,
                enthusiasm and ethical practices.</p>
              <h1>Our Vision</h1>
              <p>We aim to be among the top
                pharmaceutical companies in
                Pakistan by constantly evolving
                and bringing home innovative
                products in healthcare segment.</p>
            </div>
            <div className="img">
              <img src="images/home.jpg" alt="" />
            </div>
          </div>

          {/* CEO Message */}
          <div className="aboutDetails">
            <div className='w-50'>
              <h1>CEO message</h1>
              <p>I am delighted to address you all as we reflect
                on another year of significant achievements
                at Citi Pharma Limited. During the year under
                review the world and Pakistan in particular faced
                challenges as a result of significant geopolitical
                and macroeconomic uncertainty.</p>
              <p>Despite the tumultuous landscape marked
                by political uncertainty and economic crises,
                our various business segments have not only
                weathered the storms but have also delivered
                exceptional results. This past year has indeed been
                fraught with challenges, yet we remain resolute in
                upholding our promises and commitments to all
                our valued stakeholders.</p>
              <div className={isExpanded ? 'd-block p-0 m-0' : 'd-none'}>
                <p>Looking ahead to the coming year, it is expected
                  to remain a challenging one for the country and
                  it strives to achieve fiscal stabilization and regain
                  macroeconomic stability. Needless to say, we have
                  ambitious plans to embark on the establishment
                  of a cutting-edge facility encompassing both
                  forward and backward integration. Additionally,
                  we are in the process of obtaining approval for a
                  state-of-the-art healthcare facility, featuring a
                  200-bed hospital, alongside a research-based
                  medical science teaching university equipped with
                  practical training facilities.</p>
                <p>We recognize that our investors, partners, and
                  dedicated employees rely on us to safeguard their
                  investments and generate the returns necessary
                  to meet their financial obligations. Through a
                  culture that prioritizes risk management, we strive
                  to protect capital and enhance shareholder value.
                  Our management team is deeply committed
                  to upholding the highest standards of integrity,
                  emphasizing the importance of doing the right
                  things and doing them right. We take great pride in
                  the recognition we've received from our peers and
                  competitors, both locally and on the global stage,
                  as we continue to build a remarkable company.</p>
                <p>Our investments in upgrading our manufacturing
                  facilities, including the addition of a state-of-the-art sterile area, exemplify our steadfast
                  commitment to our long-term strategy. In the
                  face of political and economic uncertainties, we
                  have steadfastly supported a skilled workforce,
                  a team of highly trained professionals, and an
                  exceptional management team. Together, we've
                  achieved operational synergies and expanded our
                  regional presence, all while maintaining a forward-thinking approach to strengthen our investments
                  and increase our equity value.</p>
                <p>At Citi Pharma Limited, we always have our eyes
                  on the future, anticipating shifts in customer
                  needs and shaping our business strategy to lead
                  the industry towards new possibilities.</p>
                <p>In closing, I want to extend my heartfelt
                  appreciation to our Citi family for their invaluable
                  contributions to our organization. I also extend
                  my gratitude to all our stakeholders, including
                  shareholders and customers, for their unwavering
                  trust and support during these challenging times.
                  Together, let us embrace the opportunities of
                  the year ahead and work towards yet another
                  successful chapter in our journey.</p>
                {/* <div className='signImg'>
                  <img src="images/sign.jpg" alt="Sign" />
                </div> */}
              </div>
              <span className='learnBtn' onClick={toggleExpansion}>
                {isExpanded ? 'Read less' : 'Read more'}
              </span>
              <p className='p-1 m-0'>Rizwan Ahmad</p>
              <p className='p-1 m-0'>C.E.O</p>
            </div>
            <div className="img">
              <img src="images/members/rizwan.jpg" className='px-5' alt="CEOImage" />
            </div>
          </div>

          {/* DIRECTOR’S REPORT */}
          <div className="aboutCards">
            <h1>Board of Directors</h1>
            <div className="cardData">
              <div className="cards">
                <div className="w-100">
                  <CardContainer cards={cardsData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
