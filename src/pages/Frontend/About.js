import React, { useState } from 'react'
import Layout from './Layout'
import Animation from '../../components/Animation';
import Pages from '../../components/Pages';

export default function About() {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Layout title={"About - Citi Pharma"} description={"Citi Pharma mission is to dedicate itself top adding exceptional value through creation of innovative and cost effective Pharma products and develop a corporate culture that rewards initiative, enthusiasm and ethical practices."}>
      <div className="about">
        <Pages title={"About Us"} link={"images/citiPharma.jpg"} />

        <div className="aboutBox mt-5">
          {/* Intro */}
          <Animation name={"animate__fadeInUp"}>
            <div className="aboutDetails">
              <div className='w-50 px-3'>
                <h1 className='mainHeadings'>Welcome to Citi Pharma!</h1>
                <p>The factory is located at 3km Head Balloki road, Kasur. It has a land of 47 acres and have more than 800,000 Sq. Feet covered area. Citi Pharma got its first project in 1990 by AWT. Then the major plant erection period started in 1993 and ended somewhere in 1996. Production commenced in 1996 and formulation established in 2003.</p>
                <p>Citi Pharma mission is to dedicate itself top adding exceptional value through creation of innovative and cost effective Pharma products and develop a corporate culture that rewards initiative, enthusiasm and ethical practices.</p>
              </div>
              <div className="img">
                <video src="images/company.mp4" autoPlay controls className='w-100 h-100'></video>
              </div>
            </div>
          </Animation>

          {/* Mission and Vision */}
          <Animation name={"animate__fadeInUp"}>
            <div className="aboutDetails">
              <div className="img">
                <img src="images/home.jpg" alt="Citi pharma img" />
              </div>
              <div className='w-50 px-3'>
                <h1 className='mainHeadings'>Our Mission</h1>
                <p>Citi Pharma's mission is to
                  dedicate itself exceptional value
                  through creation of innovative &
                  cost-effective pharma products
                  and develop a corporate
                  culture that rewards initiative,
                  enthusiasm and ethical practices.</p>
                <h1 className='mainHeadings'>Our Vision</h1>
                <p>We aim to be among the top
                  pharmaceutical companies in
                  Pakistan by constantly evolving
                  and bringing home innovative
                  products in healthcare segment.</p>
              </div>
            </div>
          </Animation>

          {/* CEO Message */}
          <Animation name={"animate__fadeInUp"}>
            <div className="aboutDetails">
              <div className='w-50 px-3'>
                <h1 className='mainHeadings'>CEO message</h1>
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
                </div>
                <span className='learnBtn' onClick={toggleExpansion}>
                  {isExpanded ? 'Read less' : 'Read more'}
                </span>
                <p className='p-1 m-0'>Rizwan Ahmad</p>
                <p className='p-1 m-0'>C.E.O</p>
              </div>
              <div className="img">
                <img src="images/members/rizwan.jpg" className='px-1 md:px-5' alt="CEOImage" />
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </Layout >
  )
}
