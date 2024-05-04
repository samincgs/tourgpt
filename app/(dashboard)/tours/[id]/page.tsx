import TourInfo from '@/components/TourInfo';
import { getSingleTour } from '@/utils/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const SingleTourPage = async ({ params }: { params: { id: string } }) => {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect('/tours');
  }

  return (
    <div>
      <Link href='/tours' className='btn btn-secondary mb-12 mt-12 capitalize'>
        back to tours
      </Link>
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
