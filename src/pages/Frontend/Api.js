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

        // let data = { name, country, email, question };
        // console.log(data)

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
                            {/* <Animation name={"animate__fadeInUp"}>
                                <div className="api-table table-responsive">
                                    <h1 className='mainHeadings'>PBDs & Intermediates</h1>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Structure</th>
                                                <th>Name</th>
                                                <th>CAS</th>
                                                <th>Spec</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="https://www.chemicalbook.com/CAS/GIF/60547-92-4.gif" alt="" />
                                                </td>
                                                <td>4-Benzyloxy-5-methoxy-2-nitrobenzoic acid</td>
                                                <td>60547-92-4</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>5g</span>
                                                    <span>10g</span>
                                                    <span>20g</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://img.chemicalbook.com/CAS/GIF/35050-55-6.gif" alt="" />
                                                </td>
                                                <td>Tomaymycin</td>
                                                <td>81422-30-2</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>10mg</span>
                                                    <span>25mg</span>
                                                    <span>100mg</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://www.chemicalbook.com/CAS/GIF/60547-92-4.gif" alt="" />
                                                </td>
                                                <td>Tomaymycin DM</td>
                                                <td>945490-09-5</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>10mg</span>
                                                    <span>25mg</span>
                                                    <span>100mg</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://img.chemicalbook.com/CAS/GIF/81307-24-6.gif" alt="" />
                                                </td>
                                                <td>DC-81</td>
                                                <td>81307-24-6</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity border-0'>
                                                    <span>10mg</span>
                                                    <span>25mg</span>
                                                    <span>100mg</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Animation>
                            <Animation name={"animate__fadeInUp"}>
                                <div className="api-table table-responsive">
                                    <h1 className='mainHeadings'>Duocarmycins & Intermediates</h1>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Structure</th>
                                                <th>Name</th>
                                                <th>CAS</th>
                                                <th>Spec</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="https://www.chemicalbook.com/CAS/GIF/60547-92-4.gif" alt="" />
                                                </td>
                                                <td>N-Boc-O-benzyl-seco-CBI</td>
                                                <td>128300-11-8</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>250mg</span>
                                                    <span>500mg</span>
                                                    <span>1g</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://img.chemicalbook.com/CAS/20180528/GIF/130007-86-2.gif" alt="" />
                                                </td>
                                                <td>N-Boc-seco-CBI</td>
                                                <td>130007-86-2</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>10mg</span>
                                                    <span>250mg</span>
                                                    <span>500mg</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://img.chemicalbook.com/CAS/20200611/GIF/157922-77-5.gif" alt="" />
                                                </td>
                                                <td>Duocarmycin TM</td>
                                                <td>157922-77-5</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>10mg</span>
                                                    <span>25mg</span>
                                                    <span>100mg</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://img.chemicalbook.com/CAS/20200611/GIF/1613286-58-0.gif" alt="" />
                                                </td>
                                                <td>Duocarmycin MB</td>
                                                <td>1613286-58-0</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity border-0'>
                                                    <span>10mg</span>
                                                    <span>25mg</span>
                                                    <span>100mg</span>
                                                    <span>bulk</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Animation>
                            <Animation name={"animate__fadeInUp"}>
                                <div className="api-table table-responsive">
                                    <h1 className='mainHeadings'>Auristatin Intermediates</h1>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Structure</th>
                                                <th>Name</th>
                                                <th>CAS</th>
                                                <th>Spec</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="https://www.chemicalbook.com/CAS/GIF/60547-92-4.gif" alt="" />
                                                </td>
                                                <td>N-Boc-Dil</td>
                                                <td>132149-81-6</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity'>
                                                    <span>1g</span>
                                                    <span>3g</span>
                                                    <span>5g</span>
                                                    <span>10</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://img.chemicalbook.com/CAS/GIF/35050-55-6.gif" alt="" />
                                                </td>
                                                <td>N-Boc-Dap</td>
                                                <td>120205-50-7</td>
                                                <td> &gt;95%</td>
                                                <td className='quantity border-0'>
                                                    <span>1g</span>
                                                    <span>5g</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Animation> */}

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
                                <div className="form-signin shadow">
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
