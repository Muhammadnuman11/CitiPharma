import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { TbWorld } from "react-icons/tb"
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {

  const handlePhone = () => {
    window.open('tel:924235316587');
  }
  const handleMail = () => {
    window.open('mailto:info@citipharma.com.pk');
  }
  const handleWeb = () => {
    window.open('https://citipharma.com.pk', '_blank');
  }

  return (
    <Layout title={'Contact - Citi Pharma'}>
      <div className="contact">
        <Pages title={"Contact Us"} link={"images/apiBanner.jpg"} />
        <div className="contact-details">
          <div className="map">
            <iframe title='Lahore Plastic' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7600346124627!2d73.90621807462088!3d31.199666262918488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39185de50beac6d7%3A0x905c41e507064bc!2sCITI%20Pharma%20Limited!5e0!3m2!1sen!2s!4v1708507019216!5m2!1sen!2s" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-box">
            <div className="address">
              <h1>Head Office</h1>
              <p>
                <span className="contactIcon">
                  <FaLocationDot />
                </span>
                <span>Bhai Pheru - Head Balloki Road, Phool Nagar, Kasur, Punjab, Pakistan</span>
              </p>
              <p>
                <span className="contactIcon">
                  <FaPhoneAlt />
                </span>
                <span onClick={handlePhone}>(+92) 42 353-16587</span></p>
              <p>
                <span className="contactIcon">
                  <IoMdMail />
                </span>
                <span onClick={handleMail}>info@citipharma.com.pk</span>
              </p>
              <p>
                <span className="contactIcon">
                  <TbWorld />
                </span>
                <span onClick={handleWeb}>https://citipharma.com.pk</span>
              </p>
              <div className='footerIcons'>
                <div className="contactIcon">
                  <FaLinkedin className='icons' />
                </div>
                <div className="contactIcon">
                  <FaFacebook className='icons' />
                </div>
                <div className="contactIcon">
                  <FaTwitter className='icons' />
                </div>
                <div className="contactIcon">
                  <FaInstagram className='icons' />
                </div>
                <div className="contactIcon">
                  <FaYoutube className='icons' />
                </div>
              </div>
            </div>
            <div className="contactForm">
              <h1>Contact Us</h1>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12 col-md-6">
                  <input type="text" name='name' className="form-control" placeholder='Your Name' required />
                </div>
                <div className="col-12 col-md-6">
                  <input type="email" name='email' className="form-control" placeholder='Your Email' required />
                </div>
                <div className="col-12 col-md-6">
                  <input type="phone" name='phone' className="form-control" placeholder='Phone Number' required />
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" name='subject' className="form-control" placeholder='Subject' required />
                </div>
                <div className="col-12">
                  <textarea name="message" className='form-control' placeholder='Message' rows="6"></textarea>
                </div>
                <div className="col-12 text-end">
                  <button className="btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
