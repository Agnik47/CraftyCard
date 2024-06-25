import React, { useState } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [users, setUsers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user, index) => index !== id));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className='container mx-auto py-8 px-4'>
        <div className='flex justify-end mb-4'>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <h1 className='text-3xl font-semibold text-center mb-8'>Create Your Custom Cards</h1>
        <Cards users={users} removeUser={removeUser} />
        <Form addUser={addUser} />
      </div>
    </div>
  );
}

export default App;
