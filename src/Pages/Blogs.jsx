import React, { useContext, useState } from 'react'
import Header from '../Components/Header'

import hero from "./images/Untitled design (4).jpg"
import blog01 from "./images/blog-01.png"
import blog02 from "./images/blog-02.png"
import blog03 from "./images/blog-03.png"
import iconMan from "./images/icon-man.svg";
import blogs from './blogsList'
// import iconCalendar from "./images/icon-calender.svg";
import Footer from '../Components/Footer'
// import xyrachContext from '../context/context'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div>
            <Header data="blogs" />
            <div className="relative h-screen w-full">
                <img src={hero} alt="Background Image" className="object-cover object-center w-full h-full" />
                {/* <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
                <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-8xl text-white font-bold ">Blogs</h1>
                    <p className="text-lg text-white mt-4 text-center">What do you want to read today ?
                    </p>
                </div>
            </div>
            <section className="ji gp uq">
                <div className="animate_top bb ze rj ki xn vq">
                    <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Our Blogs</h2>
                    <p className="bb on/5 wo/5 hq">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, corporis consequatur? Aliquid accusantium nam maiores ullam eius at nihil ea illo distinctio dolores, pariatur nisi quidem sit reiciendis. Aliquid, provident?</p>
                </div>
                <div className="bb ye ki xn vq jb jo oo">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="animate_top sg vk rm xm" style={{ marginLeft: 20 }}>
                            <div className="c rc i z-1 pg">
                                <img className="w-full" src={blog.image} alt="Blog" />
                                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                    <Link to={`/blogs-single/${blog.id}`} className="vc ek rg lk gh sl ml il gi hi">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="yh">
                                <h4 className="ek tj ml il kk wm xl eq lb">
                                    <a href="blog-single.html">{blog.title}</a>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Blogs