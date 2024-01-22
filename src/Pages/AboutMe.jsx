// AboutMe.js

import React from 'react';
import MySkills from '../Components/MySkills';
import ExperienceEducation from '../Components/ExperienceEducation';
import { useState, useEffect } from 'react';
import PageTransition from '../Components/PageTransition';
import myimg from '../images/Untitled.jpg'

const AboutMe = () => {

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    // Set showPage to true after a delay (adjust as needed)
    const delay = setTimeout(() => {
      setShowPage(true);
    }, 500);

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);



  return (
    <PageTransition in={showPage}>
    <div className='h-auto w-full bg-gray-900 text-white py-1'>
  
  <h2 className="md:text-6xl text-4xl font-[900] leading-3 text-center my-20">ABOUT <span className='text-yellow-500'>ME</span></h2>

    <div className='flex flex-col md:flex-row w-9/12 mx-auto md:gap-10'>
      {/* Top Heading */}

      <div className='md:w-2/12 md:m-auto md:scale-150 md:hidden md:h-1/2'>
        <img
          src={myimg} // Replace with your image URL
          alt="Header"
          className="rounded-full md:rounded-none h-[250px] w-[250px] md:h-full md:w-full mx-auto mb-4 object-cover border-4 border-gray-800 shadow-md "
          // style={{ width: '250px', height: '250px' }} // Adjust the size as needed
        />
        </div>

      {/* Personal Info Section */}
      <div className="flex flex-wrap mb-4 flex-1 text-center md:text-start">
        <div className="w-full sm:w-1/2">
          <p className="mb-4">
            <span className="font-bold">First Name:</span> Vishal
          </p>
          <p className="mb-4">
            <span className="font-bold">Last Name:</span> Meena
          </p> 
          <p className="mb-4">
            <span className="font-bold">Age:</span> 21 Years
          </p>
          <p className="mb-4">
            <span className="font-bold">Nationality:</span> Indian
          </p>
          <p className="mb-4">
            <span className="font-bold">Freelance:</span> Available
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="mb-4">
            <span className="font-bold">Address:</span> Bhopal
          </p>
          <p className="mb-4">
            <span className="font-bold">Phone:</span> +91 9893340323
          </p>
          <p className="mb-4">
            <span className="font-bold">Email:</span> meenavishal2211@gmail.com
          </p>
          <p className="mb-4">
            <span className="font-bold">Git Hub:</span> vishalmeena2211
          </p>
          <p className="mb-4">
            <span className="font-bold">Languages:</span> English,Hindi
          </p>
        </div>
      <button className=" text-white px-3 w-full border border-orange-500 py-3 md:w-4/12 rounded-full mx-auto md:mx-0 ">
        Download Resume
      </button>
      </div>


      {/* Four Boxes Section */}
      <div className="flex flex-wrap justify-center flex-1 md:gap-6 mx-auto">
        <div className='flex flex-col md:flex-row md:gap-6'>

            <div className='p-4 px-6 border flex flex-col justify-center'>
               <p>
                 <span className='text-5xl text-yellow-500 font-extrabold '>3+ </span> <br />
                 <p>YEARS OF EXPERIENCE</p></p>
            </div>
            <div className='p-4 px-6 border flex flex-col justify-center'>
               <p>
                 <span className='text-5xl text-yellow-500 font-extrabold '>1000+ </span> <br />
                 <p>LEETCODE QUESTIONS SOLVED</p></p>
            </div>
            
        </div>
        <div className='flex flex-col md:flex-row md:gap-6'>

            <div className='p-4 px-6 border flex flex-col justify-center'>
               <p>
                 <span className='text-5xl text-yellow-500 font-extrabold '>100+ </span> <br />
                 <p>FULL STACK PROJECTS</p></p>
            </div>
            <div className='p-4 px-6 border flex flex-col justify-center'>
               <p>
                 <span className='text-5xl text-yellow-500 font-extrabold '>25+ </span> <br />
                 <p>MODERN TECHNOLOG SKILLED</p></p>
            </div>
            
        </div>
       
      </div>
    </div>
    <MySkills/>

    <ExperienceEducation/>
    </div>
    </PageTransition>
  );
};

export default AboutMe;
