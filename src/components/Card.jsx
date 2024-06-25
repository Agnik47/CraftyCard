import React from 'react';

function Card({ user, removeUser, id }) {
  return (
    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-md'>
      <img src={user.image} alt={user.name} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-white mb-2'>{user.name}</h2>
        <p className='text-gray-300 mb-2'>{user.email}</p>
        <p className='text-gray-400'>{user.about}</p>
        <button
          onClick={() => removeUser(id)}
          className='block mt-4 px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300'
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Card;
