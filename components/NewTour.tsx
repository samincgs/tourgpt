'use client';
import { FormEvent } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createNewTour,
  generateTourResponse,
  getExistingTour,
} from '@/utils/actions';
import TourInfo from './TourInfo';
import toast from 'react-hot-toast';

const NewTour = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination: any) => {
      const existingTour = await getExistingTour(destination);

      if (existingTour) return existingTour;

      const newTour = await generateTourResponse(destination);
      if (newTour) {
        await createNewTour(newTour);
        queryClient.invalidateQueries({ queryKey: ['tours'] });
        return newTour;
      }
      toast.error('No matching city found...');
      return null;
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className='loading loading-lg'></span>;
  }

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
      <div className='mt-16'>{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};
export default NewTour;
