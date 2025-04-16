import React from 'react';
import { Link } from "react-router-dom";
import Dimg1 from "../../images/donat/i1.png"
import Dimg2 from "../../images/donat/i4.png"
import Dimg3 from "../../images/donat/i2.png"
import Dimg4 from "../../images/donat/i3.png"

const DonatSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="donat_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="left_content">
                            <div className="top_title">
                                <h2> Become To Donat </h2>
                                <h3> Hands with heart flat Nonprofit
                                    organization and love.</h3>
                                <p>Services address a range of simply application and infrastructure of passages of available, but the
                                    majority have</p>
                            </div>
                            <div className="donet_btn">
                                <Link to="/causes-single/Get-Inspired" onClick={ClickHandler} className="btn_primary">DONATING More<i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right_content">
                            <div className="top_content">
                                <h2> CUSTOM Donat AMOUNT</h2>
                                <p>Eriations of passages mons y variations of passages of Lorem Ipsum Fasts injected humour, or
                                    randomised.</p>
                                <div className="info">
                                    <ul>
                                        <li><img src={Dimg1} alt="" />London,Dhaka</li>
                                        <li><img src={Dimg2} alt="" />$ 1200</li>
                                    </ul>
                                    <ul>
                                        <li><img src={Dimg3} alt="" />$3,200 Monthly</li>
                                        <li><img src={{Dimg4}} alt="" />8 Home+</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="donet_amount">
                                <h3>$85,000 GOALS</h3> <i className="ti-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonatSection