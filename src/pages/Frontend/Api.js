import React, { useState } from 'react';
import Animation from '../../components/Animation';
import Layout from './Layout';
import emailjs from 'emailjs-com';
import Pages from '../../components/Pages';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const initialState = {
    name: "",
    country: "",
    email: "",
    question: "",

}

export default function Api() {
    const [state, setState] = useState(initialState);
    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    // User id
    emailjs.init(process.env.REACT_APP_User_Id);
    const handleEmail = (e) => {
        e.preventDefault();
        let { name, country, email, question } = state;
        name = name.trim();
        country = country.trim();
        email = email.trim();
        question = question.trim();
        const errors = {};
        if (name.length < 3) {
            errors.name = "Please enter a name with at least 3 characters.";
        } else if (/^[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(name)) {
            errors.name = "Name cannot start with a number or special character.";
        }
        if (country.length < 3) {
            errors.country = "Please enter a country with at least 3 characters.";
        } else if (/^[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(country)) {
            errors.country = "Country cannot start with a number or special character.";
        }
        if (!email) {
            errors.email = "Please enter an email.";
        } else if (/^[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(email)) {
            errors.email = "Email cannot start with a number or special character.";
        } else if (!isValidEmail(email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (question.length < 10) {
            errors.question = "Please enter a question with at least 10 characters.";
        }

        if (Object.keys(errors).length > 0) {
            Object.keys(errors).forEach(key => {
                window.notify(errors[key], "error");
            });
        }
        else {
            emailjs.send(process.env.REACT_APP_Service_Id, process.env.REACT_APP_Q_Template_Id, {
                name,
                country,
                email,
                question,
            })
                .then((response) => {
                    window.notify("Question sent successfully!", "success");
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    window.notify("Error sending email. Please try again later.", "error");
                });

            setState(initialState);
        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };


    return (
        <>
            <Layout title={"Api Manufacturer - Citi Pharma"} description={"We specialize in the production of Active Pharmaceutical Ingredients (APIs) and finished products, ensuring the delivery of top-notch pharmaceutical solutions to meet the diverse needs of our valued clientele."}>
                <Pages title={'API Manufacturer'} link={"images/api.png"} />
                <div className="api">
                    <Animation name={"animate__fadeInUp"}>
                        <div className="api-text">
                            <h1 className='mainHeadings'>Citi Pharma - Your Premier API Manufacturer</h1>
                            <div className='apiTextBox'>
                                <div className="para">
                                    <p>
                                        Welcome to Citi Pharma, a beacon of excellence in the realm of pharmaceuticals. Situated in Pakistan, we proudly stand as one of the largest API manufacturers in the country, boasting a state-of-the-art facility adorned with cutting-edge technology. With an unwavering commitment to quality and innovation, we specialize in the production of Active Pharmaceutical Ingredients (APIs) and finished products, ensuring the delivery of top-notch pharmaceutical solutions to meet the diverse needs of our valued clientele.
                                    </p>
                                    <p>
                                        At Citi Pharma, we transcend boundaries, blending precision with passion to pioneer advancements in the healthcare industry. Our dedication to research, development, and manufacturing excellence is unparalleled, making us a trusted partner for pharmaceutical companies worldwide. Join us on our journey as we redefine the standards of pharmaceutical manufacturing, one breakthrough at a time.
                                    </p>
                                </div>
                                <div className="apiImg">
                                    <img src="images/apiPage.jpg" alt="Api Page" />
                                </div>
                            </div>
                        </div>
                    </Animation>

                    <div className="api-details">
                        <div>
                            <Animation name={"animate__fadeInUp"}>
                                <div className="api-table table-responsive">
                                    <h1 className='mainHeadings'>LIST OF PRODUCTS</h1>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Products</th>
                                                <th>Specifications</th>
                                                <th>Therapeutic Class</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Paracetamol</td>
                                                <td>USP & BP</td>
                                                <td>Anti-Inflammatory/Anti-Pyretic</td>
                                            </tr>
                                            <tr>
                                                <td>Ciprofloxacin HCL</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Ciprofloxacin Taste Mask</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Levofloxacin</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Norfloxacin</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Azithromycin</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Azithromycin Taste Mask</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Ibuprofen</td>
                                                <td>USP & BP</td>
                                                <td>Analgesic</td>
                                            </tr>
                                            <tr>
                                                <td>Aspirin</td>
                                                <td>USP & BP</td>
                                                <td>Analgesic & Anti-Coagulant</td>
                                            </tr>
                                            <tr>
                                                <td>Hydrocholoroquine</td>
                                                <td>USP & BP</td>
                                                <td>Anti-Malarial</td>
                                            </tr>
                                            <tr>
                                                <td>Choloroquine</td>
                                                <td>USP & BP</td>
                                                <td>Anti-Malarial</td>
                                            </tr>
                                            <tr>
                                                <td>Ascorbic Acid</td>
                                                <td>USP & BP</td>
                                                <td>Anti-Oxidant</td>
                                            </tr>
                                            <tr>
                                                <td>Sulphamexthoxazolc</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Moxiflocacin HCL</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Mefenamic Acid</td>
                                                <td>USP & BP</td>
                                                <td>Analgesic</td>
                                            </tr>
                                            <tr>
                                                <td>Montelukast Sodium</td>
                                                <td>USP & BP</td>
                                                <td>Leukotriene Receptor Antagonists</td>
                                            </tr>
                                            <tr>
                                                <td>Diclofenac Sodium</td>
                                                <td>USP & BP</td>
                                                <td>Analgesic</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Animation>

                            <Animation name={"animate__fadeInUp"}>
                                <div className="api-table table-responsive">
                                    <h1 className='mainHeadings'>SEMI-SYNTHETIC PENICILLIN</h1>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Products</th>
                                                <th>Specifications</th>
                                                <th>Therapeutic Class</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Amoxicillin (Compacted/Micronized)</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Ampicillin (Compacted/Micronized)</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Cloxacillin (Compacted/Micronized)</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Flucloxacillin (Compacted/Micronized)</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Animation>

                            <Animation name={"animate__fadeInUp"}>
                                <div className="api-table table-responsive">
                                    <h1 className='mainHeadings'>SEMI-SYNTHETIC CEPHALOSPORIN ORAL</h1>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Products</th>
                                                <th>Specifications</th>
                                                <th>Therapeutic Class</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Cefixime (Compacted/Micronized)</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Cephradine (Compacted/Micronized)</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Animation>
                        </div>
                        <div className="">
                            <Animation name={"animate__fadeInUp"}>
                                <div className="question">
                                    <div className="p-4 shadow">
                                        <form>
                                            <h1 className="mainHeadings mt-3 mb-4 fs-4">Ask a question</h1>
                                            <div className="form-floating">
                                                <input type="text" className="form-control shadow-none" id="floatingName" placeholder='Name' name='name' value={state.name} onChange={handleChange} />
                                                <label htmlFor="floatingName">Name</label>
                                            </div>

                                            <div className="form-floating">
                                                <input type="text" className="form-control shadow-none rounded-0" id="floatingCont" placeholder='Name' name='country' value={state.country} onChange={handleChange} />
                                                <label htmlFor="floatingCont">Country</label>
                                            </div>

                                            <div className="form-floating">
                                                <input type="email" className="form-control shadow-none" id="floatingEmail" placeholder="Email" name='email' value={state.email} onChange={handleChange} />
                                                <label htmlFor="floatingEmail">Email</label>
                                            </div>

                                            <div className="form-floating">
                                                <textarea type="text" className="form-control shadow-none" id="floatingQue" placeholder="Question" name='question' value={state.question} onChange={handleChange} />
                                                <label htmlFor="floatingQue">Ask question</label>
                                            </div>

                                            <button className="btn px-1 py-2" onClick={handleEmail}>Send a question</button>
                                        </form>
                                    </div>
                                </div>
                            </Animation>
                            <Animation name={"animate__fadeInUp"}>
                                <div className="question m-0 p-0">
                                    <div className="p-4 shadow-sm">
                                        <form>
                                            <h1 className="mainHeadings mt-3 mb-4 fs-4">Contact For API reltaed quries</h1>
                                            <h3 className="nameHeading text-uppercase fw-bold fs-4 text-dark text-center">
                                                Muhammad Raheel Salman
                                            </h3>

                                            <div className="text-center">
                                                General Manager Sales and Marketing
                                            </div>

                                            <div className="quriesForm">
                                                <p>
                                                    <span className="contactIcon">
                                                        <FaPhoneAlt />
                                                    </span>
                                                    <span>+92 300 8847678</span>
                                                </p>
                                                <p>
                                                    <span className="contactIcon">
                                                        <IoMdMail />
                                                    </span>
                                                    <span>raheel@citipharma.com.pk</span>
                                                </p>
                                                <p>
                                                    <span className="contactIcon">
                                                        <FaLocationDot />
                                                    </span>
                                                    <span>588-Q Block, M.A., Johar Town, Lahore</span>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Animation>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
