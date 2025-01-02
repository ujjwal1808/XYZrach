import React, { useEffect } from "react";
import "./card.scss"
import { Link } from "react-router-dom";

const Cards = () => {


    return (
        <section className="mainn section1">
            <div className="card blue">
                
                <div className="card-body">
                    <h3>Mobile App Development</h3>
                    <p>Transform ideas into reality with our Mobile App Development services. </p>
                    
                </div>
                <div className="card-footer ">
                    <Link to="/services" onClick={() => { window.scroll(0, 0); }} className="btn-countdown">Read more</Link>
                </div>
            </div>
            <div className="card blue">
                
                <div className="card-body">
                    <h3>Web application development</h3>
                    <p>Empower your business with our Web Application Development services.</p>
                    
                </div>
                <div className="card-footer">
                    

                    <Link to="/services" onClick={() => { window.scroll(0, 0); }} className="btn-countdown">Read more</Link>
                </div>
            </div>
            <div className="card blue">
                
                <div className="card-body">
                    <h3>UI UX design</h3>
                    <p>Enhance user satisfaction with our UI/UX Design services. </p>
                    
                </div>
                <div className="card-footer">
                    
                    <Link to="/services" onClick={() => { window.scroll(0, 0); }} className="btn-countdown">Read more</Link>
                </div>
            </div>
            <div className="card blue">
                
                <div className="card-body">
                    <h3>Intergration
                    services</h3>
                    <p>Seamlessly connect your systems with our Integration Services.</p>
                    
                </div>
                <div className="card-footer">
                    

                    <Link to="/services" onClick={() => { window.scroll(0, 0); }} className="btn-countdown">Read more</Link>
                </div>
            </div>
            <div className="card blue">
                
                <div className="card-body">
                    <h3>Staff Augmentation
                    </h3>
                    <p>Scale your team effortlessly with our Staff Augmentation services. </p>
                    
                </div>
                <div className="card-footer">
                    <Link to="/services" onClick={() => { window.scroll(0, 0); }} className="btn-countdown">Read more</Link>
                </div>
            </div>
            
        </section>
    );
};

export default Cards;
