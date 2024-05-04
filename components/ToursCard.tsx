import Link from 'next/link';

const ToursCard = ({ tour }: any) => {
  const { city, id, country } = tour;
  console.log(city, country);
  return (
    <Link
      href={`/tours/${id}`}
      className=' mt-12 card card-compact rounded-xl bg-base-100'
    >
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-center'>
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
};
export default ToursCard;
