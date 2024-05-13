import TourInfo from '@/components/TourInfo';
import { generateTourImage, getSingleTour } from '@/utils/actions';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const SingleTourPage = async ({ params }: { params: { id: string } }) => {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect('/tours');
  }

  const tourImage = await generateTourImage({
    city: tour.city,
    country: tour.country,
  });

  return (
    <div>
      <Link href='/tours' className='btn btn-secondary mb-12 mt-12 capitalize'>
        back to tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            alt='tour image'
            width={300}
            height={300}
            className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover'
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
