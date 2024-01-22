// ExperienceEducationItem.js

import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";

const ExperienceEducationItem = ({ yearRange, title, company }) => {
  return (
    <div className="flex items-center mb-4">
      {/* Left side icon and vertical line */}
      <div className="mr-4 flex flex-col items-center">
        <div className='bg-yellow-500 rounded-full'>

        <FaGraduationCap className='m-3 text-xl  '/>
        </div>
        <div className="w-0.5 h-12 bg-gray-300"></div>
      </div>

      {/* Right side text */}
      <div>
        <p className="font-bold">{yearRange}</p>
        <p className="text-lg">{title}</p>
        <p className="text-gray-400">{company}</p>
        {/* Additional details or description can be added here */}
      </div>
    </div>
  );
};

export default ExperienceEducationItem;
