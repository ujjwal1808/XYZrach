import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AboutVideo from "./images/AboutVideo.gif"
import shape16 from "./images/shape-16.svg";
import blogs from './blogsList'
import { Link,  useParams } from 'react-router-dom'

const BlogSingle = () => {
    const { blogId } = useParams()
    const blog = blogs.find((b) => b.id === parseInt(blogId));
    console.log(blog)

    return (
        <div>
            <Header data="blogs" />
            <div className="relative h-80 w-full">
                <img src={AboutVideo} alt="Background Image" className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-6xl text-white font-bold ">Blog</h1>
                    <p className="text-lg text-white mt-4 text-center">{blog.title}
                    </p>
                </div>
            </div>

            <div className="lg:mx-60 my-12 text-justify min-[220px]:mx-10">
                <Link to="/blogs" className="text-blue-500 my-5">
                    <i className="fa-solid fa-arrow-left mr-2"></i>
                    Go Back
                </Link>
                <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-black">{blog.title}</h1>
                <div className="w-full h-full my-10">
                    <img src={blog.image} alt="" className="w-full h-full rounded-2xl object-cover" />
                </div>
                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>

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

            <Footer />
        </div>
    )
}

export default BlogSingle