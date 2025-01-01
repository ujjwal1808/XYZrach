import React, { useState, useEffect } from "react";
import "./style.css";

import Cards from '../Components/Cards.jsx'
import { Link } from "react-router-dom";
import shape05 from "./images/shape-05.svg";
import shape06 from "./images/shape-06.svg";
import shape07 from "./images/shape-07.svg";
import about01 from "./images/about-01.png";
import about02 from "./images/about-02.png";
import about03 from "./images/about-03.png";
import proimg from "./images/2817.jpg"
import shape08 from "./images/shape-08.svg";
import shape09 from "./images/shape-09.svg";
import shape10 from "./images/shape-10.svg";
import shape11 from "./images/shape-11.svg";
import icon04 from "./images/icon-04.svg";
import icon05 from "./images/icon-05.svg";
import icon06 from "./images/icon-06.svg";
import icon07 from "./images/icon-07.svg";
import shape16 from "./images/shape-16.svg";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";


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
    <>

        <div className={`${"dark-mode"}`}>


            <Header data="home" />
            <main className="" >

                <section className="relative bg-cover bg-center text-white h-screen">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${proimg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="relative z-10 mx-auto px-6 py-16 text-left bg-blue-950/[0.8] h-screen w-screen flex flex-col justify-center items-start space-y-6">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            Complete Workflow Service Solutions
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-4xl text-gray-200 "
                        >
                            Learn about our comprehensive range of services and advanced tech
                            stack, designed to empower enterprises, startups, and agencies to
                            achieve their goals effectively and efficiently.
                        </p>
                        <a
                            href="#who_we_are"
                            className=" gh bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-lg font-medium shadow-lg transition duration-300"
                        >
                            Get Started Now
                        </a>
                    </div>
                </section>

                <div className="gh" id="who_we_are">

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

                                <div className="jn/2">
                                    <h4 className="ek yj text-white gb ">Who We Are</h4>
                                    <h2 className="fk vj zp pr wm qb mk ">
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
                    <div className="bb ze ki yn 2xl:ud-px-12.5 mb-28">
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
                                <Link to="/contact" onClick={() => { window.scroll(0, 0); }} className="vc ek kk hh rg ol il cm gi hi">
                                    Get Started Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


            </main >
            <Footer />
        </div >
    </>


);
}

export default Home;
