import React, { useState } from 'react';
import Pages from '../../components/Pages';
import Animation from '../../components/Animation';
import Layout from './Layout';


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

    const handleEmail = (e) => {
        e.preventDefault()

        let { name, country, email, question } = state

        name = name.trim()
        country = country.trim()
        email = email.trim()
        question = question.trim()

        if (name.length < 3) {
            return window.notify("Please enter name atleast 3 char.", "error")
        }
        if (country.length < 3) {
            return window.notify("Please enter country atleast 3 char.", "error")
        }
        if (!email) {
            return window.notify("Please enter email", "error")
        }
        if (question.length < 10) {
            return window.notify("Please enter question atleast 10 char.", "error")
        }

        const subject = encodeURIComponent('New inquiry');
        const body = encodeURIComponent(`Question From website:-\nName: ${name}\nCountry: ${country}\nEmail: ${email}\nQuestion: ${question}`);

        const mailtoLink = `mailto::corporate@citipharma.com.pk?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
        setState(initialState)
    }

    return (
        <>
            <Layout title={"Api - Citi Pharma"}>
                <div className="api">
                    <Pages title={"Highly Potent API Toxins"} link={"images/api.png"} />
                    <Animation name={"animate__fadeInUp"}>
                        <div className="api-text">
                            <div className='para'>
                                <p>
                                    A selection of DNA damaging HPAPI toxins and intermediates are available to purchase directly from Apex Molecular. These compounds are synthesised in our laboratories.
                                </p>
                                <p>
                                    We also have experience in producing toxin-linker constructs utilising toxins classes, such as PDBs, Duocarmycins, Auristatins and Camptothecin analogues i.e Exatecan and SN-38
                                </p>
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
                                                <td>Penicillin</td>
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
                                                <td>Vitamin C</td>
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
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Montelukast Sodium</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
                                            </tr>
                                            <tr>
                                                <td>Diclofenac Sodium</td>
                                                <td>USP & BP</td>
                                                <td>Antibiotic</td>
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
                        <Animation name={"animate__fadeInUp"}>
                            <div className="question">
                                <div className="p-4 shadow">
                                    <form>
                                        <h1 className="mainHeadings mt-3 mb-4 fs-4">Ask any question</h1>
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

                                        <button className="btn btn-primary p-1" onClick={handleEmail}>Send a question</button>
                                    </form>
                                </div>
                            </div>
                        </Animation>
                    </div>
                </div>
            </Layout>
        </>
    )
}
