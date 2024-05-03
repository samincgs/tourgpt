const TourInfo = ({ tour }: any) => {
  const { title, description, stops, city } = tour;
  return (
    <div className='max-w-2xl'>
      <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
      <p className='leading-loose mb-6'>{description}</p>
      <h2 className='text-2xl mb-4 leading-loose'>
        Places you can visit in {city}{' '}
      </h2>
      <ul>
        {stops.map((stop: any) => (
          <li key={stop} className='mb-4 bg-base-100 p-4 rounded-xl'>
            <p>{stop}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TourInfo;
