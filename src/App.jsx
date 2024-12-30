import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
// import "./Pages/style.css"
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
// import Services from './Pages/Services'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import './Pages/bundle.js'
import './Pages/style.css'
import Services from './Pages/Services.jsx'
import BlogSingle from './Pages/BlogSingle.jsx'



function App() {
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<><Home/></>} />
        <Route path='/about-us' element={<><AboutUs/></>} />
        <Route path='/services' element={<><Services/></>}/>
        <Route path='/blogs' element={<><Blogs/></>} />
        <Route path='/blogs-single/:blogId' element={<><BlogSingle/></>} />
        <Route path='/contact' element={<><Contact/></>} />
      </>
    )
  );

  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
