import React from 'react';
import Card from './Card';

function Cards({ users, removeUser }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {users.map((user, index) => (
        <Card key={index} id={index} user={user} removeUser={removeUser} />
      ))}
    </div>
  );
}

export default Cards;
