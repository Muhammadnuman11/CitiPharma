import React, { useState } from 'react'
import Layout from './Layout'
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdFax } from "react-icons/md";
import emailjs from 'emailjs-com';
import config from '../../components/config';


const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

export default function Contact() {

  const handlePhone = () => {
    window.open('tel:924235316587');
  }
  const handleMail = () => {
    window.open('mailto:corporate@citipharma.com.pk');
  }

  // Send Message
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
    const userId = config.User_Id
    const serId = config.Service_Id
    const tempId = config.M_Template_Id

  // User id
  emailjs.init(userId);

  const handleEmail = (e) => {
    e.preventDefault();
    let { name, email, phone, subject, message } = state
    name = name.trim()
    email = email.trim()
    phone = phone.trim()
    subject = subject.trim()
    message = message.trim()

    const errors = {};

    if (name.length < 3) {
      errors.name = "Please enter a name with at least 3 characters.";
    } else if (/^[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(name)) {
      errors.name = "Name cannot start with a number or special character.";
    }
    if (!email) {
      errors.email = "Please enter an email.";
    } else if (/^[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(email)) {
      errors.email = "Email cannot start with a number or special character.";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (phone.length < 11 || !/^\d+$/.test(phone)) {
      errors.phone = "Please enter a valid phone number with at least 11 digits without special character.";
    }
    if (subject.length < 3) {
      errors.subject = "Please enter a subject with at least 3 characters.";
    } else if (/^[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(subject)) {
      errors.subject = "Subject cannot start with a number or special character.";
    }
    if (message.length < 10) {
      errors.message = "Please enter a message with at least 10 characters.";
    }

    // If there are errors, display them and prevent form submission
    if (Object.keys(errors).length > 0) {
      // Display error messages
      Object.keys(errors).forEach(key => {
        window.notify(errors[key], "error");
      });
    } else {
      emailjs.send(serId, tempId, {
        name,
        email,
        phone,
        subject,
        message
      })
        .then((response) => {
          window.notify("Message sent successfully!", "success");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          window.notify("Error sending email. Please try again later.", "error");
        });

      setState(initialState);
    }
  };

  // Helper function to check if email is valid
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  return (
    <Layout title={'Contact - Citi Pharma'} description={'588-Q Block, M.A., Johar Town, Lahore Punjab, Pakistan, +92 42 353-16587, corporate@citipharma.com.pk'}>
      <div className="contact">
        <div className="contact-details">
          <div className="map">
            <iframe title='Citi Pharma' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7600346124627!2d73.90621807462088!3d31.199666262918488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39185de50beac6d7%3A0x905c41e507064bc!2sCITI%20Pharma%20Limited!5e0!3m2!1sen!2s!4v1708507019216!5m2!1sen!2s" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <h1 className='mainHeadings'>Contact Us</h1>
          <div className="contact-box">
            <div className="address">
              <h1 className='mainHeadings'>Head Office</h1>
              <p>
                <span className="contactIcon">
                  <FaLocationDot />
                </span>
                <span>588-Q Block, M.A., Johar Town, Lahore Punjab, Pakistan</span>
              </p>
              <p>
                <span className="contactIcon">
                  <FaPhoneAlt />
                </span>
                <span onClick={handlePhone}>+92 42 353-16587</span>
              </p>
              <h1 className='mainHeadings'>Registered Office</h1>
              <p>
                <span className="contactIcon">
                  <FaLocationDot />
                </span>
                <span>3-KM, Head Balloki Road, Bhai Pheru, Distt Kasur</span>
              </p>
              <p>
                <span className="contactIcon">
                  <FaPhoneAlt />
                </span>
                <span onClick={handlePhone}> +92 49 4510189</span>
              </p>
              <p>
                <span className="contactIcon">
                  <FaPhoneAlt />
                </span>
                <span onClick={handlePhone}> +92 49 4513392</span>
              </p>
              <p className='btn border-0'>
                <span className="contactIcon">
                  <IoMdMail />
                </span>
                <span onClick={handleMail}>corporate@citipharma.com.pk</span>
              </p>
              <p>
                <span className="contactIcon">
                  <MdFax />
                </span>
                <span onClick={handleMail}>+92 49 4510191</span>
              </p>
              <div className='footerIcons w-50'>
                <div className="contactIcon">
                  <FaLinkedin className='icons' onClick={() => window.open("https://www.linkedin.com/company/citipharmalimited", "_blank")} />
                </div>
                <div className="contactIcon"  >
                  <FaFacebook className='icons' onClick={() => window.open("https://www.facebook.com/citipharmaltd?mibextid=ZbWKwL", "_blank")} />
                </div>
              </div>
            </div>
            <div className="contactForm">
            <h1 className='mainHeadings my-0 py-0'>Get in touch</h1>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-12 col-md-6">
                  <input type="text" name='name' className="form-control" placeholder='Your Name' required onChange={handleChange} value={state.name} />
                </div>
                <div className="col-12 col-md-6">
                  <input type="email" name='email' className="form-control" placeholder='Your Email' required onChange={handleChange} value={state.email} />
                </div>
                <div className="col-12 col-md-6">
                  <input type="phone" name='phone' className="form-control" placeholder='Phone Number' required onChange={handleChange} value={state.phone} />
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" name='subject' className="form-control" placeholder='Subject' required onChange={handleChange} value={state.subject} />
                </div>
                <div className="col-12">
                  <textarea name="message" className='form-control' placeholder='Message' rows="6" onChange={handleChange} value={state.message}></textarea>
                </div>
                <div className="col-12 text-end">
                  <button className="btn" onClick={handleEmail}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </Layout >
  )
}
