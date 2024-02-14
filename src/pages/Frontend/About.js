import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'

export default function About() {
  return (
    <Layout title={"About - Lahore Plastic"}>
      <div className="about">
        <Pages title={"About LPC"} />

        <div className="about-box">
          <h1>Introduction</h1>
          <p>We “LPC MILLS (PVT.) LIMITED” LIMITED” a leading leading manufacturer manufacturer of quality quality plastic plastic packaging packaging material material in Pakistan. akistan.
            We deal in plastic plastic packaging packaging since last 50 years with excellence. excellence. Our specialty specialty is in “PVC Shrink Films
            Shrink Labels, PE Shrink Films, Neck Seal printed, OPP Bags, Zip Lock Bags, Stretch Films, Poly Tape, Adhesive
            Tape for Carton Packing, acking, HD, LLD, PE and PP Bags (Printed/ (Printed/ Unprinted)” Unprinted)” , up to eight colors gravure gravure printing. printing.
            The product which we have mentioned, our company is manufacturing under one roof.
            We are doing business business with more than 400 companies, companies, which includes includes national national as well as multinational.</p>
        </div>
        <div className="about-box1">
          <h1>Certificate</h1>
          <img src="images/logo.jpg" alt="" />
        </div>
      </div>
    </Layout>
  )
}
