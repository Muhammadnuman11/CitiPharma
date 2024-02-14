import React from 'react'
import Pages from '../../components/Pages'
import Layout from './Layout'

export default function Contact() {
  return (
    <Layout title={'Contact - Lahore Plastic'}>
      <div className="contact">
        <Pages title={"Contact Us"} />
        <div className="contact-details">
          <div className="contact-box">
            <div className="address">
              <h4>Head Office</h4>
              <h6>Lahore House:</h6>
              <p>8-Annand road, upper mall, Lahore - Pakistan</p>
              <p>Tell: <span>+92 42 358 76 100</span></p>
              <p>Fax: <span>+92 42 358 76 100</span></p>
              <p>Cell: <span>+92 300 84 66 555</span></p>
              <p>Email: <span>lahorehouse786@gmail.com</span></p>
              <p>Website: <span>www.lahorehouse.com</span></p>
            </div>
            <div className="map">
              <iframe title='Lahore Plastic' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.331398730467!2d74.35525707463646!3d31.542518546049266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dfdfe7dbc7%3A0xb8514b87175c29e!2sLahore%20Plastic!5e0!3m2!1sen!2s!4v1707736786245!5m2!1sen!2s" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="contact-box">
            <div className="address">
              <h4>Karachi Office</h4>
              <h6>Lahore Plastic, Karachi:</h6>
              <p>4-e mezzanine floor,17th commerial street, phase II, ext D.H.A Karachi - Pakistan.</p>
              <p>Tell: <span>+92 21 3538 5308</span></p>
              <p>Tell: <span>+92 21 3538 9212</span></p>
            </div>
            <div className="map">
              <iframe title='Lahore Plastic, Karachi' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.900506725235!2d67.06709049279748!3d24.8330758679262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d5006d5c589%3A0x21c80923cc63fb90!2sLahore%20Plastic%20Karachi%20Office!5e0!3m2!1sen!2s!4v1707741690824!5m2!1sen!2s" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="contact-box">
            <div className="address">
              <h4>Regional Office</h4>
              <h6>Suffah Enterprises:</h6>
              <p>Office# 5, 1 Floor United Center Shamsabad, Murree Road, Rawalpindi. Pakistan.</p>
              <p>Tell: <span>051 48 54 017</span></p>
              <p>Cell: <span>+92 306 50 00 656</span></p>
              <p>Email: <span>suffahenterprises@gmail.com</span></p>
            </div>
            <div className="map">
              <iframe title='Lahore Plastic, Murree' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.2885169510098!2d73.0803949695483!3d33.653169614677594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95a83e506af5%3A0xfc41b1674e0ee955!2sUnited%20Center!5e0!3m2!1sen!2s!4v1707742364133!5m2!1sen!2s" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/* <div className="contact-box">
            <div className="address">
              <h4>Plant</h4>
              <p>20-Km sheikhupura road, Lahore - Pakistan</p>
            </div>
             <div className="map">
              <iframe title='Lahore Plastic, Murree' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.2885169510098!2d73.0803949695483!3d33.653169614677594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95a83e506af5%3A0xfc41b1674e0ee955!2sUnited%20Center!5e0!3m2!1sen!2s!4v1707742364133!5m2!1sen!2s" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> 
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
