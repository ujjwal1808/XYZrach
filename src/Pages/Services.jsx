import React from 'react'
import Header from '../Components/Header'
import './scroll.css'
import AboutVideo from "./images/AboutVideo.gif"
import one_ from './images/1_.png'
import two_ from './images/2_.png'
import three from './images/3.png'
import four from './images/4.png'
import five from './images/5.png'
import Footer from '../Components/Footer'
import shape16 from "./images/shape-06.svg";
import { Link } from 'react-router-dom'
import CallToAction from '../Components/CallToAction'
const Services = () => {
  return (
    <div>
      <Header data="services" />
      <main className='hh'>
        <div className="relative h-screen w-full">
          <img src={AboutVideo} alt="Background Image" className="object-cover object-center w-full h-full" />
          {/* <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
          <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-8xl text-white font-bold max-[378px]:text-6xl">Services</h1>
            <p className="text-lg text-white mt-4 text-center">Get to know our list of services and tech stack in helping <br /> enterprise, startups and agencies.</p>
          </div>
        </div>

        <h1 className='text-bold vj zp or kk wm wb tt'>Streamline Your Business with Digital Product Development Services</h1>
        <p className='mb-20 w-9/12 text-center m-auto '>Get scalable digital solutions from the team of experts who will cover the full development lifecycle, from ideation and prototyping to launch and ongoing maintenance, ensuring you have the tools and resources to succeed in the digital marketplace.</p>
        <ol className="steps ">

          <li className='m-10 ml-32'>
            <div className="block block--left justify-items-center">
              <img src={one_} alt="" className='w-96' />
            </div>
            <div className="block  block--right">
              <div className="animate_right jn p-5">
                <h2 className="fk vj zp pr kk wm qb">
                  Mobile app development

                </h2>
                <p className="uo text-justify">
                  Transform ideas into reality with our Mobile App Development services. We create intuitive, feature-rich applications tailored to your business needs. From design to deployment, our team ensures seamless functionality, engaging user experiences, and cross-platform compatibility, helping you connect with customers and drive success in the mobile-first world.
                </p>

                <div className="tc tf yo zf mb">
                  <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className='m-10 ml-32'>
            <div className="block block--left justify-items-center">
              <img src={two_} alt="" className='w-96' />
            </div>
              <div className="block block--right">
                <div className="animate_right jn p-5">
                  <h2 className="fk vj zp pr kk wm qb">
                    Web application development

                  </h2>
                  <p className="uo text-justify">
                    Empower your business with our Web Application Development services. We design and build scalable, secure, and high-performing web applications tailored to your needs. Our solutions focus on user experience, functionality, and seamless integration, ensuring your business stays competitive and delivers exceptional value to your customers.
                  </p>

                  <div className="tc tf yo zf mb">
                    <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
          </li>

          <li className='m-10 ml-32'>
            <div className="block block--left justify-items-center">
              <img src={three} alt="" className='w-96'/>
            </div>
            <div className="block block--right">
            <div className="animate_right jn p-5">
                  <h2 className="fk vj zp pr kk wm qb">
                    UI/UX Design

                  </h2>
                  <p className="uo text-justify">
                  Enhance user satisfaction with our UI/UX Design services. We create visually appealing and intuitive designs that prioritize user experience. By blending creativity with functionality, we craft interfaces that engage users and drive results, ensuring your digital products are both user-friendly and impactful.
                  </p>

                  <div className="tc tf yo zf mb">
                    <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                      Contact us
                    </a>
                  </div>
                </div>
            </div>
          </li>

          <li className='m-10 ml-32'>
            <div className="block block--left justify-items-center">
            <img src={four} alt="" className='w-96'/>
            </div>
            <div className="block block--right">
            <div className="animate_right jn p-5">
                  <h2 className="fk vj zp pr kk wm qb">
                  Intergration
                  services

                  </h2>
                  <p className="uo text-justify">
                  Seamlessly connect your systems with our Integration Services. We specialize in unifying applications, data, and processes to enhance efficiency and scalability. Our solutions ensure smooth data flow and compatibility, empowering your business to operate as a cohesive unit while improving performance and reducing operational complexities.
                  </p>

                  <div className="tc tf yo zf mb">
                    <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                      Contact us
                    </a>
                  </div>
                </div>
            </div>
          </li>

          <li className='m-10 ml-32'>
            <div className="block block--left justify-items-center">
              <img src={five} alt="" className='w-96'/>
            </div>
            <div className="block block--right">
            <div className="animate_right jn p-5">
                  <h2 className="fk vj zp pr kk wm qb">
                  Staff Augmentation


                  </h2>
                  <p className="uo text-justify">
                  Scale your team effortlessly with our Staff Augmentation services. We provide skilled professionals to complement your in-house expertise, ensuring you meet project demands and deadlines. Whether short-term or long-term, our flexible staffing solutions help you bridge talent gaps and achieve success without the complexities of traditional hiring.
                  </p>

                  <div className="tc tf yo zf mb">
                    <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                      Contact us
                    </a>
                  </div>
                </div>
            </div>
          </li>

        </ol>
        <CallToAction/>
      </main>
      <Footer/>
    </div>
  )
}

export default Services