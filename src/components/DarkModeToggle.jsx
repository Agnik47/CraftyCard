import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className='flex items-center space-x-2 cursor-pointer'>
      <span className='text-gray-400'>Dark Mode</span>
      <div className='relative'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className='w-12 h-6 bg-gray-400 rounded-full shadow-inner'></div>
        <div
          className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-full' : ''}`}
        ></div>
      </div>
      <span className='text-gray-400'>Light Mode</span>
    </label>
  );
};

export default DarkModeToggle;
