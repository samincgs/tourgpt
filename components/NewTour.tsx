'use client';
import { FormEvent, FormEventHandler } from 'react';
import TourInfo from './TourInfo';

const NewTour = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='pt-12 max-w-2xl'>
        <h2 className='capitalize mb-8 font-bold text-accent text-3xl tracking-wide'>
          plan your dream vacation
        </h2>
        <div className='join w-full'>
          <input
            type='text'
            className='input input-bordered join-item w-full'
            placeholder='city'
            required
            name='city'
          />
          <input
            type='text'
            className='input input-bordered join-item w-full'
            placeholder='country'
            required
            name='country'
          />
          <button type='submit' className='btn btn-primary join-item uppercase'>
            generate tour
          </button>
        </div>
      </form>
      <div className='mt-16'>
        <TourInfo />
      </div>
    </>
  );
};
export default NewTour;
