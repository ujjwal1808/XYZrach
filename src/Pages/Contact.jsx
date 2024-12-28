import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import hero from "./images/Untitled design (4).jpg"
import "./style.css"
import Footer from '../Components/Footer'
import axios from 'axios'
const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name,phone,email,message)
    const data = {
      Name:name,
      Phone: phone,
      Email: email,
      Message: message
    }
    axios.post('https://api.sheetbest.com/sheets/5eba79c9-8976-47e0-a03d-1c64f7e2a5ed',data).then((response)=>{
      console.log(response);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      alert('You\'r query has been submitted we will reachout you soon')
    })
  }


  return (
    <div>
      <Header data="contact" />
      <div className="relative h-screen w-full">
        <img src={hero} alt="Background Image" className="object-cover object-center w-full h-full" />
        {/* <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" /> */}
        <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-8xl text-white font-bold ">Contact Us</h1>
          <p className="text-lg text-white mt-4 text-center">Lets built the next big thing!
          </p>
        </div>
      </div>

      <div className="bg-gray-100 flex items-center justify-center w-full ">
  <div className="w-full bg-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
    {/* Left Section */}
    <div className="gh text-white p-10 flex flex-col justify-center h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Let’s build the next big thing!</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Have a product vision? Let’s build
      </h1>
      <p className="mb-6 text-base md:text-lg">
        Send your details and we’ll get in touch:
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="text-white text-sm md:text-lg">
            ✔ Expect a response within 24 hours.
          </span>
        </li>
        <li className="flex items-center">
          <span className="text-white text-sm md:text-lg">
            ✔ We’re open to signing an NDA, if needed.
          </span>
        </li>
        <li className="flex items-center">
          <span className="text-white text-sm md:text-lg">
            ✔ Engage directly with our product experts, not account managers.
          </span>
        </li>
      </ul>
      <div className="mt-8">
        <p className="text-base md:text-lg font-medium">Reach out to us at</p>
        <p className="text-base md:text-lg">info@xyrachsolutions.com</p>
        <p className="text-base md:text-lg">+1 1234567890</p>
        <p className="text-base md:text-lg mt-2">🇨🇦 Toronto</p>
      </div>
    </div>

    {/* Right Section */}
    <div className="p-6 md:p-10 hh flex justify-center flex-col h-screen">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-black">Contact us</h2>
      <form className="space-y-4" onSubmit={handleSubmit} autoComplete='off'>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <textarea
          name='message'
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="How can we help you?"
          className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="gh hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base md:text-lg font-medium transition duration-300 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default Contact