import React, { useState } from 'react';

// Image
import Icon from '../../images/cta/icon.png';
import shape from '../../images/cta/shape.png';
import shape2 from '../../images/cta/shape-2.png';

const CtaSection = (props) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
    };

    return (
        <section className={"" + props.hClass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <h2>Subscribe Newsletter in your
                            to connect our services</h2>
                    </div>
                    <div className="col-lg-6 col-12">
                        <form onSubmit={handleSubmit} className="newsletter">
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button type="submit">Subscribe</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="icon">
                <img src={Icon} alt="" />
            </div>
            <div className="shape">
                <img src={shape2} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape} alt="" />
            </div>
        </section>
    );
};

export default CtaSection;