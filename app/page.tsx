import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-primary text-6xl font-bold'>TourGPT</h1>
          <p className='py-6 text-lg leading-loose'>
            Your AI-powered tour advisor. Driven by OpenAI, it converses with
            you and provides insights about your favorite travel destinations
          </p>
          <Link href='/chat'>
            <button className='btn btn-secondary uppercase'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
