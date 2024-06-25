import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ addUser }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    addUser(data);
    reset();
  };

  return (
    <div className='mt-10'>
      <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: 'Name is required' })}
          className={`rounded-md px-4 py-2 text-base font-semibold outline-none bg-gray-800 text-gray-100 ${errors.name ? 'border-red-500' : ''}`}
          type='text'
          
          placeholder='Name'
        />
        {errors.name && <span className='text-red-500 text-xs'>{errors.name.message}</span>}
        <input
          {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
          className={`rounded-md px-4 py-2 text-base font-semibold outline-none bg-gray-800 text-gray-100 ${errors.email ? 'border-red-500' : ''}`}
          type='email'
          placeholder='Email'
        />
        {errors.email && <span className='text-red-500 text-xs'>{errors.email.message}</span>}
        <input
          {...register('about')}
          className='rounded-md px-4 py-2 text-base font-semibold outline-none bg-gray-800 text-gray-100'
          type='text'
          placeholder='About'
        />
        <input
          {...register('image')}
          className='rounded-md px-4 py-2 text-base font-semibold outline-none bg-gray-800 text-gray-100'
          type='text'
          placeholder='Image URL'
        />
        <button
          type='submit'
          className='col-span-2 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300'
        >
          Add Card
        </button>
      </form>
    </div>
  );
}

export default Form;
