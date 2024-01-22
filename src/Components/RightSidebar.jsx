// RightSidebar.js

import React, { useEffect, useState } from 'react';
import { FaHome, FaPencilAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdWork, MdEmail } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Overlay.css';



const MobileMenu = ({ isOpen, onClose,isActive }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames={`overlay-right`} unmountOnExit>
    <div
      className={`${isOpen ? 'w-screen' : 'w-0 -z-10'
        }  h-screen fixed z-40 transition-all ease-in duration-300 backdrop-blur-xl bg-gray-800 flex flex-col items-center justify-center py-20 gap-10 text-white`}
    >

      <div className='flex flex-col justify-between items-center text-3xl font-semibold pl-6 gap-3 md:w-2/12 w-1/2 text-center'>
          <NavLink to='/' onClick={onClose}  className={`flex gap-4 hover:text-yellow-500 ${isActive('/') && 'text-yellow-500'} items-center my-1`}>
            
           HOME
          </NavLink>
     
          <NavLink to='/about-me' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/about-me') && 'text-yellow-500'} items-center my-1`}>
            
         ABOUT ME
          </NavLink>
          <NavLink to='/contact' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/contact') && 'text-yellow-500'} items-center my-1`}>
            
         CONTACT
          </NavLink>
     
          
      </div>
    </div>
    </CSSTransition>


  );
};

const RightSidebar = () => {


  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  useEffect(()=>{
    setMobileMenuOpen(false);

  },[])



  return (
    <>

      
      <button className="fixed z-50 top-10 right-10 flex flex-col items-end justify-start text-3xl rounded-full p-3 bg-white text-black" onClick={toggleMobileMenu} >
        {isMobileMenuOpen ? <RxCross2 /> : <IoIosMenu />}
      </button>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} isActive={isActive}/>
    </>
  );
};

export default RightSidebar;
