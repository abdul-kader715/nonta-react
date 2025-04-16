import React from 'react';
import { Link } from 'react-router-dom';

const DonatSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="donate_section section_space">
            <div className="container">
                <div className="donate_wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-12">
                            <div className="content">
                                <h2>Work together Why Let us </h2>
                                <p>Services address a range of simply application.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div>
                                <Link onClick={ClickHandler} to="/causes-single/Get-Inspired" className="donat_btn">Donation Now<i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default DonatSectionS2;