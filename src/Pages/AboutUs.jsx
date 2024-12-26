import React from 'react'
import Header from '../Components/Header'
import "./style.css";
import "./bundle.js"

import shape05 from "./images/shape-05.svg";
import shape16 from "./images/shape-06.svg";
import shape07 from "./images/shape-07.svg";
import about01 from "./images/about-01.png";
import about02 from "./images/about-02.png";
import about03 from "./images/about-03.png";
import aboutDesign1 from './images/Untitled design (5).png'
import aboutDesign2 from './images/Untitled design (6).png'
import aboutDesign3 from './images/Untitled design (4).jpg'
import iconPlay from "./images/icon-play.svg";
import Footer from '../Components/Footer.jsx';



const AboutUs = () => {
  return (
    <div>
      <Header data="aboutus" />
      <main className='hh'>
        <div className="relative h-screen w-full">
          <img src={aboutDesign3} alt="Background Image" className="object-cover object-center w-full h-full" />
          {/* <img src='' alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
          <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-8xl text-white font-bold ">About us</h1>
            <p className="text-lg text-white mt-4 text-center">Discover how XYRACH transforms businesses with tailored IT solutions, <br /> a commitment to innovation, and a passion for driving success.</p>
          </div>
        </div>

        <section className="ji xl:ud-py-15 pg">
          <div className="bb ze ki xn wq">
            <div className="tc wf gg qq">
              <div className="animate_left xc gn gg jn/2 i">
                <div>
                  <img src={aboutDesign1} alt="About" className="ib" />

                </div>
                <div>
                </div>
              </div>

              <div className="animate_right jn/2">
                <h2 className="fk vj zp pr kk wm qb">
                  We are The Leading Tech Company Service
                </h2>
                <p className="uo">
                  As a leading tech company, we provide innovative solutions that drive business growth. Our expert team specializes in delivering cutting-edge technologies and services, from software development to system integration. We focus on efficiency, scalability, and customer satisfaction, ensuring your business stays ahead in a rapidly evolving digital landscape.

                </p>

                <div className="tc tf yo zf mb">
                  <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ji xl:ud-py-15 pg coom">
          
          <div className="bb ze ki xn wq">
            <div className="tc wf gg qq">

            <div className="animate_right jn/2">
                <h2 className="fk vj zp pr text-blue-400  qb">
                Increase productivity with our technology
                </h2>
                <h4 className="ek yj mk">Efficiency</h4>
                <p className='gb text-blue-200'>
                Our technology streamlines operations, automates processes, and enhances collaboration, leading to improved efficiency across all departments.
                </p>

                <h4 className="ek yj mk">Innovation</h4>
                <p className='gb text-blue-200'>By implementing innovative solutions, we help businesses optimize workflows, reduce downtime, and foster a culture of continuous improvement.</p>

                <div className="tc tf yo zf mb">
                  <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                    Contact us
                  </a>
                </div>
              </div>
              <div className="animate_left xc gn gg jn/2 i">
                <div>
                  <img src={aboutDesign2} alt="About" className="ib" />

                </div>
                <div>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        <section id="features" style={{marginBottom:90}}>
                    <div className="bb ze ki yn 2xl:ud-px-12.5 ">
                    <div className="cb">
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2  className="fk vj pr kk wm on/5 gq/2 bb _b ">
                            How it Works
                            </h2>
                            <p className="bb on/5 wo/5 hq ">
                                At Xyrach, we’re more than just developers – we’re your partners in success. Contact us today to discover how we can transform your ideas into powerful digital solutions.
                            </p>
                        </div>


                    </div>

                        <div className="tc uf zo xf ap zf bp mq">
                            

                            <div className="animate_top kn to/3 tc cg oq" style={{alignItems:'center'}}>
                                <div className="tc wf xf cf ae cd rg bgg">
                                <i className="fa-regular fa-lightbulb icon2"></i>
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb" >Understand</h4>
                                    <p>We start by listening to your goals and challenges to fully understand your business needs.</p>
                                </div>
                            </div>

                            <div className="animate_top kn to/3 tc cg oq" style={{alignItems:'center'}}>
                                <div className="tc wf xf cf ae cd rg bgg">
                                <i className="fa-solid fa-square-plus icon2"></i>
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb">Create</h4>
                                    <p>Based on your requirements, we design and develop tailored solutions to meet your objectives.</p>
                                </div>
                            </div>

                            <div className="animate_top kn to/3 tc cg oq" style={{alignItems:'center'}}>
                                <div className="tc wf xf cf ae cd rg bgg">
                                <i className="fa-solid fa-truck icon2"></i>
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb">Deliver</h4>
                                    <p>We ensure high-quality delivery and provide continuous support for optimal performance and growth.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

        <section className="i pg gh ji">
                    <img className="h p q" src={shape16} alt="Bg Shape" />

                    <div className="bb ye i z-10 ki xn dr">
                        <div className="tc uf sn tn un gg">
                            <div className="animate_left to/2">
                                <h2 className="fk vj zp pr lk ac">Join with 5000+ Startups Growing with Base.</h2>
                                <p className="lk">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
                                    efficitur leo. Ut venenatis rhoncus.
                                </p>
                            </div>
                            <div className="animate_right bf">
                                <a href="#" className="vc ek kk hh rg ol il cm gi hi">
                                    Get Started Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutUs