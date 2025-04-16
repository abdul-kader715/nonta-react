import React from 'react';
import CausesData from '../../api/causes';
import { Link } from 'react-router-dom'
const CausesSection = (props) => {
    const ClickHander = () => {
        window.scrollTo(10,0)
    }
    return (
        <section className={"" + props.hClass}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <h2>OUR CAUSES GOALS</h2>
                            <h3>We Gools Popular Causes</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {CausesData.slice(0, 3).map((causes, item) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={item}>
                            <div className="causes_card">
                                <div className="imgage">
                                    <img src={causes.img} alt="" />
                                    <span>{causes.Catagori}</span>
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHander} to={`/causes-single/${causes.Slug}`}>{causes.title}</Link></h2>
                                    <p>{causes.description}</p>
                                </div>
                                <div className="donet_progres">
                                    <div className="progres">
                                        <div className="bar" style={{ width: `${(causes.donatedAmount / causes.goalAmount) * 100}%` }}>
                                        </div>
                                        <p className="percent">{Math.round((causes.donatedAmount / causes.goalAmount) * 100)}%</p>
                                    </div>
                                    <div className="donet_amaunt">
                                        <span>${causes.goalAmount} Goals</span>
                                        <span>${causes.donatedAmount} Donat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CausesSection;