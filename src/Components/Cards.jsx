import React, { useEffect } from "react";
// import { gsap } from "gsap";
import "./card.scss"

const Cards = () => {


    return (
        <section className="mainn section1">
            <div class="card blue">
                
                <div class="card-body">
                    <h3>Mobile App Development</h3>
                    <p>Transform ideas into reality with our Mobile App Development services. </p>
                    
                </div>
                <div class="card-footer ">
                    <a href="#" class="btn-countdown">Read more</a>
                </div>
            </div>
            <div class="card blue">
                
                <div class="card-body">
                    <h3>Web application development</h3>
                    <p>Empower your business with our Web Application Development services.</p>
                    
                </div>
                <div class="card-footer">
                    

                    <a href="#" class="btn-countdown">Read more</a>
                </div>
            </div>
            <div class="card blue">
                
                <div class="card-body">
                    <h3>UI UX design</h3>
                    <p>Enhance user satisfaction with our UI/UX Design services. </p>
                    
                </div>
                <div class="card-footer">
                    
                    <a href="#" class="btn-countdown">Read more</a>
                </div>
            </div>
            <div class="card blue">
                
                <div class="card-body">
                    <h3>Intergration
                    services</h3>
                    <p>Seamlessly connect your systems with our Integration Services.</p>
                    
                </div>
                <div class="card-footer">
                    

                    <a href="#" class="btn-countdown">Read more</a>
                </div>
            </div>
            <div class="card blue">
                
                <div class="card-body">
                    <h3>Staff Augmentation
                    </h3>
                    <p>Scale your team effortlessly with our Staff Augmentation services. </p>
                    
                </div>
                <div class="card-footer">
                    

                    <a href="#" class="btn-countdown">Read more</a>
                </div>
            </div>
            
        </section>
    );
};

export default Cards;
