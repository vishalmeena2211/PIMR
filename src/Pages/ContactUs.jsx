// ContactUs.js

import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

import { useState, useEffect } from 'react';
import PageTransition from '../Components/PageTransition';


const ContactUs = () => {


  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    // Set showPage to true after a delay (adjust as needed)
    const delay = setTimeout(() => {
      setShowPage(true);
    }, 500);

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submitted")
  }



  return (
    <>
    <PageTransition in={showPage}>
    <div className="flex flex-col bg-gray-900 items-center justify-center min-h-screen h-auto text-white ">
      {/* Get in Touch Heading */}
      <h2 className="md:text-6xl text-4xl font-[900] my-20 leading-3">GET IN <span className='text-yellow-500'>TOUCH</span></h2>

      {/* Contact Sections */}
      <div className="flex flex-col md:flex-row w-full md:w-9/12  justify-center">
        {/* Left Section (1/3 width) */}
        <div className="p-4 md:p-2 md:w-6/12">
          <h2 className="text-2xl font-[900] mb-4">LET`S DISCUSS CREATIVE THINGS</h2>
          <p className=" mb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
         
         <div className='flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
            <MdEmail className='text-4xl text-yellow-400'/>
            
            <div>
                <div>
               Email me
                </div>
                <div>
                meenavishal2211@gmail.com
                </div>
            </div>
            </div>
            <div className='flex gap-4 items-center'>
            <IoCallSharp className='text-4xl text-yellow-400' />
            <div>
              <div>
              CALL ME
              </div>
              <div>
              +91 9893340323
              </div>
            </div>
            </div>
         </div>
         
         
          <div className="flex items-center justify-between md:justify-start gap-2 my-6">
            {/* Icons (replace with your actual icons) */}
            <div className="mr-4 rounded-full bg-gray-700 hover:bg-yellow-500">
              {/* Your first icon */}
              <TiSocialFacebook className='m-2 text-2xl '/>
            </div>
            <div className="mr-4 rounded-full bg-gray-700 hover:bg-yellow-500">
              {/* Your first icon */}
              <FaGithub className='m-2 text-2xl'/>
            </div>
            <div className="mr-4 rounded-full bg-gray-700 hover:bg-yellow-500">
              {/* Your first icon */}
              <FaLinkedinIn className='m-2 text-2xl'/>
            </div>
            <div className="mr-4 rounded-full bg-gray-700 hover:bg-yellow-500">
              {/* Your first icon */}
              <FaTwitter className='m-2 text-2xl'/>
            </div>
            
          </div>
        </div>

        {/* Right Section (2/3 width) */}
        <div className="w-full p-4 ">
          {/* Contact Form (replace with your actual form) */}
          <form className='mx-auto flex flex-col ' onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row justify-between'>

           
            <div className="mb-4">
              
              <input
                type="text"
                id="name"
                name="name"
                placeholder=' Your Name'
                className="mt-1 p-3 px-4 w-full border rounded-full bg-gray-800 border-none focus:border-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Your Email'
                className="mt-1 p-3 px-4 w-full border rounded-full bg-gray-800 border-none"
              />
            </div>
            <div className="mb-4">
             
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='Your Subject'
                className="mt-1 p-3 px-4 w-full border rounded-full bg-gray-800 border-none focus:border-none"
              />
            </div>
            </div>
            <div className="mb-4">
              
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder='Your Message'

                className="mt-1 p-3 px-4  w-full border rounded-2xl resize-none bg-gray-800 border-none focus:border-none"
              ></textarea>
            </div>
            <button
              className=" text-white px-3 border border-orange-500 py-3 md:w-3/12 w-full rounded-full"
              
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
    </>

  );
};

export default ContactUs;
