import React from 'react'

import { Link } from "react-router-dom"
import service from "../../api/services"
import logo from "../../images/logo-s2.png"
import Shape1 from "../../images/footer/shape-1.png"
import Shape2 from "../../images/footer/shape-2.png"
import inst1 from "../../images/instagram/img-1.jpg"
import inst2 from "../../images/instagram/img-2.jpg"
import inst3 from "../../images/instagram/img-3.jpg"
import inst4 from "../../images/instagram/img-4.jpg"
import inst5 from "../../images/instagram/img-5.jpg"
import inst6 from "../../images/instagram/img-6.jpg"

const instragram = [
    {
        id: '1',
        img: inst1,
    },
    {
        id: '2',
        img: inst2,
    },
    {
        id: '3',
        img: inst3,
    },
    {
        id: '4',
        img: inst4,
    },
    {
        id: '5',
        img: inst5,
    },
    {
        id: '6',
        img: inst6,
    }
]



const FooterSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.tClass}>
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget_column widget_about">
                                <div className="footer_logo">
                                    <Link onClick={ClickHandler} to="home">
                                        <img src={logo} alt="img" />
                                    </Link>
                                </div>
                                <p>Nemo enim ipsam voluptate quia
                                    voluptas sit aspernatur aut odit
                                    aut fugit, sed quia magni this
                                    dolores eos qui ratione .</p>
                                <ul className="social_widget">
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget_column widget_link">
                                <h2>Quick Links</h2>
                                <ul>
                                    {service.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/services-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget_column widget_insatagram">
                                <h2>Our Gallery</h2>
                                <ul>
                                    {instragram.map((insta,inkye) => (
                                        <li key={inkye}><img src={insta.img} alt="img" /></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-6 col-12">
                            <div className="widget_column widget_contact">
                                <h2>Our Contacts</h2>
                                <div>
                                    <span>Adress: 27 Division St, Berakuti,
                                        NY 121102, USA</span>
                                </div>
                                <div>
                                    <span>Phone: +8 1440 456 782</span>
                                    <span>Fax: +8 846512 456 788</span>
                                </div>
                                <div>
                                    <span>Email: example@mail.com </span>
                                    <span>Website: yourwebsite.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Copyright ©Nonta 2023 all rights reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={Shape1} alt="img" />
            </div>
            {/* <div className="shape-2">
                <img src={Shape2} alt="img" />
            </div> */}
        </section>
    )
}
export default FooterSection