// ExperienceEducation.js

import React from 'react';
import ExperienceEducationItem from './ExperienceEducationItem';

const ExperienceEducation = () => {
  // Dummy data for experience and education entries
  const entries = [
    { id: 1, yearRange: '2021 - PRESENT', title: 'B.TECH IN CSE', company: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore' },
    { id: 2, yearRange: '2018 - 2020', title: 'HIGHER SECONDRY (11th + 12th)', company: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore' },
    { id: 3, yearRange: '2016 - 2018', title: 'HIGH SECONDRY', company: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore' },
    { id: 4, yearRange: '2008 - 2016', title: 'SCHOOLING', company: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore' },
    
  ];

  return (
    <div className='w-9/12 mx-auto'>
      {/* Top Heading */}
      <h2 className="text-2xl font-bold my-12 text-center ">EXPERIENCE & EDUCATION</h2>

      {/* Experience Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {entries.map((entry) => (
          <ExperienceEducationItem
            key={entry.id}
            yearRange={entry.yearRange}
            title={entry.title}
            company={entry.company}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceEducation;
