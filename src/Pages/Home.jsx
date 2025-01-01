import React, { useState, useEffect } from "react";
import "./style.css";
import "./bundle.js"
import Cards from '../Components/Cards.jsx'
import { Link } from "react-router-dom";
import shape01 from "./images/shape-01.svg";
import shape02 from "./images/shape-02.svg";
import shape03 from "./images/shape-03.svg";
import shape04 from "./images/shape-04.svg";
import heroImage from "./images/hero.png";
import icon01 from "./images/icon-01.svg";
import icon02 from "./images/icon-02.svg";
import icon03 from "./images/icon-03.svg";
import one from './images/1.png'
import two from './images/2.png'
import blogs from "./blogsList.js";
import shape05 from "./images/shape-05.svg";
import shape06 from "./images/shape-06.svg";
import shape07 from "./images/shape-07.svg";
import about01 from "./images/about-01.png";
import about02 from "./images/about-02.png";
import about03 from "./images/about-03.png";
import proimg from "./images/2817.jpg"
import iconPlay from "./images/icon-play.svg";
import shape08 from "./images/shape-08.svg";
import shape09 from "./images/shape-09.svg";
import shape10 from "./images/shape-10.svg";
import shape11 from "./images/shape-11.svg";
import team01 from "./images/team-01.png";
import team02 from "./images/team-02.png";
import team03 from "./images/team-03.png";
import icon04 from "./images/icon-04.svg";
import icon05 from "./images/icon-05.svg";
import icon06 from "./images/icon-06.svg";
import icon07 from "./images/icon-07.svg";

import testimonialImg from "./images/testimonial.png";
import quoteIcon from "./images/icon-quote.svg";
import brandLight01 from "./images/brand-light-01.svg";
import brandDark01 from "./images/brand-dark-01.svg";
import brandLight02 from "./images/brand-light-02.svg";
import brandDark02 from "./images/brand-dark-02.svg";
import brandLight03 from "./images/brand-light-03.svg";
import brandDark03 from "./images/brand-dark-03.svg";
import brandLight04 from "./images/brand-light-04.svg";
import brandDark04 from "./images/brand-dark-04.svg";
import brandLight05 from "./images/brand-light-05.svg";
import brandDark05 from "./images/brand-dark-05.svg";
import brandLight06 from "./images/brand-light-06.svg";
import brandDark06 from "./images/brand-dark-06.svg";

import shape14 from "./images/shape-14.svg";
import shape15 from "./images/shape-15.svg";
import project01 from "./images/project-01.png"
import project02 from "./images/project-02.png"
import project03 from "./images/project-03.png"
import project04 from "./images/project-04.png"
import six from "./images/6.png"
import shape12 from "./images/shape-12.svg";
import shape13 from "./images/shape-13.svg";
import shape16 from "./images/shape-16.svg";
import iconMan from "./images/icon-man.svg";
import iconCalendar from "./images/icon-calender.svg";

import blog01 from "./images/blog-01.png"
import blog02 from "./images/blog-02.png"
import blog03 from "./images/blog-03.png"
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
// import Service from "../Components/Service.jsx";

function Home() {

    useEffect(() => {
        const handleScroll = () => {
            setStickyMenu(window.pageYOffset > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [sectionTitleText] = useState(
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
    );
    


    return (

        <div className={`${"dark-mode"}`}>
            <Header data="home" />
            <main className="">

                <section className="relative bg-cover bg-center text-white  h-screen">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${proimg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="relative z-10  mx-auto px-6 py-16 text-left bg-blue-950/[0.8] h-screen w-screen">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-40 ">
                            Complete Workflow Service Solutions
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-4xl">
                            Learn about our comprehensive range of services and advanced tech stack,
                            designed to empower enterprises, startups, and agencies to achieve their
                            goals effectively and efficiently.
                        </p>
                        <a
                            href="#"
                            className="gh hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
                        >
                            Get Started Now
                        </a>
                    </div>
                </section>
                {/* <section className="gj do ir hj sp jr i pg ">
                    <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
                        <img src={shape01} alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
                        <img src={shape02} alt="shape" className="xc 2xl:ud-block h u p va" />
                        <img src={shape03} alt="shape" className="xc 2xl:ud-block h v w va" />
                        
                        <img src={proimg} alt="Woman" className="h q r ua h-screen" />
                    </div>

                    <div className="bb ze ki xn 2xl:ud-px-0 ">
                        <div className="tc _o ">
                            <div className="animate_left jn/2 ">
                                <h1 className="fk vj zp or kk wm wb">Complete Workflow Service Solutions</h1>
                                <p className="fq">
                                    Learn about our comprehensive range of services and advanced tech stack, designed to empower
                                    enterprises, startups, and agencies to achieve their goals effectively and efficiently.
                                </p>

                                <div className="tc tf yo zf mb">
                                    <a href="#" className="ek jk lk gh gi hi rg ml il vc _d _l">
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <div className="gh">

                    <section className="ji gp uq 2xl:ud-py-35 pg ">
                        <div className="bb ze ki xn wq">
                            <div className="tc wf gg qq">
                                <div className="animate_left xc gn gg jn/2 i">
                                    <div>
                                        <img src={shape05} alt="Shape" className="h -ud-left-5 x" />
                                        <img src={about01} alt="About" className="ib" />
                                        <img src={about02} alt="About" />
                                    </div>
                                    <div>
                                        <img src={shape06} alt="Shape" />
                                        <img src={about03} alt="About" className="ob gb" />
                                        <img src={shape07} alt="Shape" className="bb" />
                                    </div>
                                </div>

                                <div className="animate_right jn/2">
                                    <h4 className="ek yj text-white gb">Who We Are</h4>
                                    <h2 className="fk vj zp pr wm qb mk">
                                        We Make Our customers happy by giving Best services.
                                    </h2>
                                    <p className="uo text-white">
                                        We are a forward-thinking tech company dedicated to delivering cutting-edge mobile apps, web applications, and design solutions. Our focus is on crafting seamless experiences and empowering businesses through innovative integration services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features">
                        <div className="bb ze ki yn 2xl:ud-px-12.5 uq oj ">
{/* <h4>We Offer The Best Quality Service for You</h4> */}
                            <div className="tc uf zo xf ap zf bp mq fb text-blue-300">
                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg mh">
                                        <i className="fa-solid fa-lightbulb icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go mk wm xb mk">Innovative</h4>
                                        <p className="text-white">Global connections through cutting-edge solutions.</p>
                                    </div>
                                </div>

                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg nh">
                                        <i className="fa-solid fa-infinity icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go kk wm xb mk">Seamless</h4>
                                        <p className="text-white">Combining technologies for a smarter, unified future.</p>
                                    </div>
                                </div>

                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg oh">
                                        <i className="fa-solid fa-shield-halved icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go kk wm xb mk">Secure</h4>
                                        <p className="text-white">Advanced protection for your digital environments.</p>
                                    </div>
                                </div>

                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg eh">
                                        <i className="fa-solid fa-brain icon" ></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go k wm xb mk">Intelligent</h4>
                                        <p className="text-white">Transforming raw data into actionable intelligence.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tc uf zo xf ap zf bp mq ">
                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg gh">
                                        <i className="fa-solid fa-bullseye icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go wm xb  mk">Future</h4>
                                        <p className="text-white">Building solutions designed for tomorrow’s challenges.</p>
                                    </div>
                                </div>

                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg jh">
                                        <i className="fa-solid fa-hexagon-nodes-bolt icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go mk wm xb">Effortless</h4>
                                        <p className="text-white">Simplifying how people and systems interact.e</p>
                                    </div>
                                </div>

                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg lh">
                                        <i className="fa-solid fa-laptop-file icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go mk wm xb">Virtual</h4>
                                        <p className="text-white">Exploring new dimensions through virtual technology.</p>
                                    </div>
                                </div>

                                <div className="animate_top kn to/3 tc cg oq">
                                    <div className="tc wf xf cf ae cd rg ih">
                                        <i className="fa-sharp fa-solid fa-infinity icon"></i>
                                    </div>
                                    <div>
                                        <h4 className="ek yj go mk wm xb">Unlimited</h4>
                                        <p className="text-white">Unlocking endless opportunities with innovation.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>

                <section className="i pg ji gp uq">
                    <span className="rc h s r vd fd/5 fh rm hh"></span>
                    <img src={shape08} alt="Shape Bg" className="h q r" />
                    <img src={shape09} alt="Shape" className="of h y z/2" />
                    <img src={shape10} alt="Shape" className="h _ aa" />
                    <img src={shape11} alt="Shape" className="of h m ba" />

                    <div
                        x-data="{ sectionTitle: `Meet With Our Creative Dedicated Team`, sectionTitleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`}">

                        <div
                            className="animate_top bb ze rj ki xn vq"
                            data-sr-id="5"
                            style={{
                                visibility: "visible",
                                opacity: 1,
                                transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                transition:
                                    "all, opacity 2.8s cubic-bezier(0.5, 0, 0, 1), transform 2.8s cubic-bezier(0.5, 0, 0, 1)",
                            }}
                        >
                            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                                Our Services
                            </h2>
                            <p className="bb on/5 wo/5 hq " x-text={sectionTitleText}>
                                {sectionTitleText}
                            </p>
                        </div>


                    </div>

                    <div className="bb ze i va ki xn xq jb jo">

                        <Cards />

                    </div>
                </section>



                <section className="lj tp kr">
                    <div>
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                                Why Choose us?
                            </h2>
                            <p className="bb on/5 wo/5 hq">
                                At Xyrach, we’re more than just developers – we’re your partners in success. Contact us today to discover how we can transform your ideas into powerful digital solutions.
                            </p>
                        </div>


                    </div>

                    <div className="bb ze ki xn yq mb en">
                        <div className="wc qf pn xo ng">
                            <div className="animate_top sg oi pi zq ml il am cn _m">
                                <img src={icon04} alt="Icon" />
                                <h4 className="ek zj kk wm nb _b">Crafted for Startups</h4>
                                <p>
                                    We understand the fast-paced demands of startups. That’s why our solutions are crafted with precision to help you launch, scale, and grow effectively in today’s competitive market.
                                </p>
                            </div>

                            <div className="animate_top sg oi pi zq ml il am cn _m">
                                <img src={icon05} alt="Icon" />
                                <h4 className="ek zj kk wm nb _b">High-quality Design</h4>
                                <p>
                                    Your digital presence deserves nothing less than excellence. We focus on delivering high-quality, visually stunning designs that captivate your audience and reflect your brand’s vision.
                                </p>
                            </div>

                            <div className="animate_top sg oi pi zq ml il am cn _m">
                                <img src={icon06} alt="Icon" />
                                <h4 className="ek zj kk wm nb _b">All Essential Sections</h4>
                                <p>
                                    Whether it's a homepage that grabs attention, service pages that convert, or a blog to share your insights – we cover all the essential sections your website or app needs for success.
                                </p>
                            </div>

                            <div className="animate_top sg oi pi zq ml il am cn _m">
                                <img src={icon07} alt="Icon" />
                                <h4 className="ek zj kk wm nb _b">Speed Optimized</h4>
                                <p>
                                    In today’s digital world, speed matters. Our solutions are optimized for lightning-fast performance, ensuring your users enjoy a seamless experience across all devices.
                                </p>
                            </div>

                            <div className="animate_top sg oi pi zq ml il am cn _m">
                                <img src={icon05} alt="Icon" />
                                <h4 className="ek zj kk wm nb _b">Fully Customizable</h4>
                                <p>
                                    We believe in flexibility. Our web and mobile solutions are fully customizable, giving you the power to adapt your digital platform as your business grows and evolves.
                                </p>
                            </div>

                            <div className="animate_top sg oi pi zq ml il am cn _m">
                                <img src={icon06} alt="Icon" />
                                <h4 className="ek zj kk wm nb _b">Regular Updates</h4>
                                <p>
                                    Stay ahead of the curve with our regular updates. We keep your platform aligned with the latest trends, technologies, and security standards to ensure peak performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted Brands Section */}
                <section id="features">
                    <div className="bb ze ki yn 2xl:ud-px-12.5 ">
                        <div className="cb">
                            <div className="animate_top bb ze rj ki xn vq">
                                <h2 className="fk vj pr kk wm on/5 gq/2 bb _b ">
                                    How it Works
                                </h2>
                                <p className="bb on/5 wo/5 hq ">
                                    At Xyrach, we’re more than just developers – we’re your partners in success. Contact us today to discover how we can transform your ideas into powerful digital solutions.
                                </p>
                            </div>


                        </div>

                        <div className="tc uf zo xf ap zf bp mq">


                            <div className="animate_top kn to/3 tc cg oq" style={{ alignItems: 'center' }}>
                                <div className="tc wf xf cf ae cd rg bgg">
                                    <i className="fa-regular fa-lightbulb icon2"></i>
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb" >Understand</h4>
                                    <p>We start by listening to your goals and challenges to fully understand your business needs.</p>
                                </div>
                            </div>

                            <div className="animate_top kn to/3 tc cg oq" style={{ alignItems: 'center' }}>
                                <div className="tc wf xf cf ae cd rg bgg">
                                    <i className="fa-solid fa-square-plus icon2"></i>
                                </div>
                                <div>
                                    <h4 className="ek yj go kk wm xb">Create</h4>
                                    <p>Based on your requirements, we design and develop tailored solutions to meet your objectives.</p>
                                </div>
                            </div>

                            <div className="animate_top kn to/3 tc cg oq" style={{ alignItems: 'center' }}>
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

                {/* Latest Blogs Section */}
                <section className="ji gp uq">
                    <div className="animate_top bb ze rj ki xn vq">
                        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Our Blogs</h2>
                        <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10 min-[220px]:mx-10">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="animate_top sg vk rm xm" style={{ marginLeft: 20, background: 'white' }}>
                                <div className="c rc i z-1 pg">
                                    <img className="w-full" src={blog.image} alt="Blog" />

                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a href="./blog-single.html" className="vc ek rg lk gh sl ml il gi hi">
                                            Read More
                                        </a>
                                    </div>
                                </div>

                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img src={iconMan} alt="User" />
                                            <p>{blog.author}</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img src={iconCalendar} alt="Calendar" />
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">{blog.title}</a>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

                {/* Contact Section */}
                <section id="support" className="i pg fh rm ji gp uq hh">
                    <img src={shape06} alt="Shape" className="h aa y" />
                    <img src={shape03} alt="Shape" className="h ca u" />
                    <img src={shape07} alt="Shape" className="h w da ee" />
                    <img src={shape12} alt="Shape" className="h p s" />
                    <img src={shape13} alt="Shape" className="h r q" />
                    <img className="h p q" src={shape16} alt="Bg Shape" />

                    <div className="animate_top bb ze rj ki xn vq">
                        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Let’s Stay Connected</h2>
                        <p className="bb on/5 wo/5 hq">
                            It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using.
                        </p>
                    </div>

                    <div className="i va bb ye ki xn wq jb mo">
                        <div className="tc uf sn tf rn un zf xl:gap-10">
                            <div className="animate_top w-full mn/5 to/3 vk sg  sm yh rq i pg gh text-white">
                                <img src={shape03} alt="Shape" className="h la x wd" />
                                <img src={shape06} alt="Shape" className="h la ma ne kf" />

                                <div className="fb">
                                    <h4 className="zj wm cc ">Email Address</h4>
                                    <p>
                                        <a href="#"><li>support@startup.com</li></a>
                                    </p>
                                </div>
                                <div className="fb">
                                    <h4 className="zj  wm cc">Office Location</h4>
                                    <p><li>76/A, Green valley, California USA.</li></p>
                                </div>
                                <div className="fb">
                                    <h4 className="zj  wm cc">Phone Number</h4>
                                    <p>
                                        <a href="#"><li>+009 8754 3433 223</li></a>
                                    </p>
                                </div>
                                <div className="fb">
                                    <h4 className="zj  wm cc">Skype Email</h4>
                                    <p>
                                        <a href="#"><li>example@yourmail.com</li></a>
                                    </p>
                                </div>

                                <span className="rc nd rh tm lc fb"></span>

                                <div>
                                    <h4 className="zj  wm qb">Social Media</h4>
                                    <ul className="tc wf fg">
                                        <li>
                                            <a href="#" className="c tc wf xf ie ld rg ml il tl ">
                                                <svg
                                                    className="th lm ml il"
                                                    width="11"
                                                    height="20"
                                                    viewBox="0 0 11 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.83366 11.3752H9.12533L10.042 7.7085H6.83366V5.87516C6.83366 4.931 6.83366 4.04183 8.667 4.04183H10.042V0.96183C9.74316 0.922413 8.61475 0.833496 7.42308 0.833496C4.93433 0.833496 3.16699 2.35241 3.16699 5.14183V7.7085H0.416992V11.3752H3.16699V19.1668H6.83366V11.3752Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        {/* Add other social icons as needed */}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="animate_top w-full nn/5 vo/3 sg gh sm yh tq text-white">
                                <form action="https://formbold.com/s/unique_form_id" method="POST">
                                    <div className="tc sf yo ap zf ep qb">
                                        <div className="vd to/2">
                                            <label className="rc ac" htmlFor="fullname">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                name="fullname"
                                                id="fullname"
                                                placeholder="Devid Wonder"
                                                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                            />
                                        </div>

                                        <div className="vd to/2">
                                            <label className="rc ac" htmlFor="email">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="example@gmail.com"
                                                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                            />
                                        </div>
                                    </div>

                                    <div className="tc sf yo ap zf ep qb">
                                        <div className="vd to/2">
                                            <label className="rc ac" htmlFor="phone">
                                                Phone number
                                            </label>
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="+009 3342 3432"
                                                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                            />
                                        </div>

                                        <div className="vd to/2">
                                            <label className="rc ac" htmlFor="subject">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                placeholder="Type your subject"
                                                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
                                            />
                                        </div>
                                    </div>

                                    <div className="fb">
                                        <label className="rc ac" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            placeholder="Message"
                                            rows="4"
                                            name="message"
                                            id="message"
                                            className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"
                                        ></textarea>
                                    </div>

                                    <div className="tc xf">
                                        <button className="vc rg lk gh ml il hi gi _l">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Section */}
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


            </main >
            <Footer />
        </div >

    );
}

export default Home;
