import React from 'react'
import Header from '../Components/Header'
import AboutVideo from "./images/AboutVideo.gif"
import iconCalendar from "./images/icon-calender.svg";
import blogs from './blogsList'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import CallToAction from '../Components/CallToAction';

const Blogs = () => {
    return (
        <div>
            <Header data="blogs" />
            <div className="relative h-screen w-full">
                <img src={AboutVideo} alt="Background Image" className="object-cover object-center w-full h-full" />
                {/* <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
                <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-8xl text-white font-bold ">Blogs</h1>
                    <p className="text-lg text-white mt-4 text-center">What do you want to read today ?
                    </p>
                </div>
            </div>

            <section className="ji gp vq">
                

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10 min-[220px]:mx-10">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="animate_top rounded-xl vk rm xm border-gray-200 border" style={{ marginLeft: 20, background: 'white' }}>
                                <div className="c rc i z-1 pg">
                                    <img className="w-full rounded-t-xl" src={blog.image} alt="Blog" />

                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <Link to={`/blogs-single/${blog.id}`} className="vc ek rg lk gh sl ml il gi hi">
                                            Read More
                                        </Link>
                                    </div>
                                </div>

                                <div className="yh">
                                <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <div className={`${blog.color} p-2 rounded-full`}></div>
                                            <p>{blog.core}</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img src={iconCalendar} alt="Calendar" />
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <Link to={`/blogs-single/${blog.id}`}>{blog.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

            </section>
            <CallToAction/>

            <Footer />

        </div>
    )
}

export default Blogs