// Skills.js

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MySkills = () => {
  // Sample skills data
  const skillsData = [
    { id: 1, title: 'React', percentage: 99 },
    { id: 2, title: 'JavaScript/NODE', percentage: 99 },
    { id: 3, title: 'PYTHON', percentage: 95 },
    { id: 4, title: 'C++', percentage: 100 },
    { id: 5, title: 'NextJS', percentage: 80 },
    { id: 6, title: 'Typescript', percentage: 80 },
    { id: 7, title: 'MongoDB', percentage: 95 },
    { id: 8, title: 'SQL', percentage: 99 },
    // Add more skills as needed
  ];

  return (
    <div className='text-white bg-gray-900'>
      {/* Top Heading */}
      <h2 className="text-3xl text-center font-bold mb-4 my-20">MY SKILLS</h2>

      {/* Skills Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {skillsData.map((skill) => (
          <div key={skill.id} className="p-3 rounded-md shadow-md">
            {/* Circular Filler */}
            <div className="mx-auto mb-8 w-28 h-28">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: '#e0e0e0',
                  pathColor: '#FFAE42',
                  trailColor: '#e0e0e0',
                })}
              />
            </div>

            {/* Skill Title */}
            <p className="text-center font-semibold">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MySkills;
