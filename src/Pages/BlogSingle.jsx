import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import blogs from './blogsList'
import hero from "./images/Untitled design (4).jpg"
import { Link, useParams } from 'react-router-dom'
const BlogSingle = () => {
    const [mainBlog, setMainBlog] = useState()
    const { blogId } = useParams()


    const blog = blogs.find((b) => b.id === parseInt(blogId));
    console.log(blog)

    return (
        <div>
            <Header data="blogs" />
            <div className="relative h-80 w-full">
                <img src={hero} alt="Background Image" className="object-cover object-center w-full h-full" />
                {/* <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
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

            <Footer />
        </div>
    )
}

export default BlogSingle