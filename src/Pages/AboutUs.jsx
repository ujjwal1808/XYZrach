import React from 'react'
import Header from '../Components/Header'
import "./style.css";
import AboutVideo from "./images/AboutVideo.gif"
import aboutDesign1 from './images/standard-quality-control-concept-m.jpg'
import aboutDesign2 from './images/standard-quality-control-collage-concept.jpg'
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom';
import CallToAction from '../Components/CallToAction.jsx';



const AboutUs = () => {
  return (
    <div>
      <Header data="aboutus" />
      <main className='hh'>
        <div className="relative h-screen w-full">
          <img src={AboutVideo} alt="Background Image" className="object-cover object-center w-full h-full" />
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
                  <img src={aboutDesign1} alt="About" className="ib rounded-xl shadow-xl shadow-gray-400" />

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
                  <Link to="/contact" onClick={() => { window.scroll(0, 0); }} className="ek jk lk gh gi hi rg ml il vc _d _l">
                    Contact us
                  </Link>
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
                  <Link to="/contact" onClick={() => { window.scroll(0, 0); }} className="ek jk lk gh gi hi rg ml il vc _d _l">
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="animate_left xc gn gg jn/2 i">
                <div>
                  <img src={aboutDesign2} alt="About" className="ib rounded-xl shadow-2xl" />

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

                <CallToAction/>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutUs