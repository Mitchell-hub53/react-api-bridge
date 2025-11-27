import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='text-white'>
      <section 
        className='relative bg-cover bg-center h-[60vh]' 
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b4abb0-704d-4a04-a802-b6c34ed39c73/agrigrow-hero-g2jcu7x-1764270505742.webp)' }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold text-green-300 drop-shadow-lg mb-4'>Welcome to AgriGrow</h1>
          <p className='text-lg md:text-xl max-w-2xl text-gray-200 mb-8'>Empowering farmers with high-quality seedlings for a bountiful harvest. Your journey to successful farming starts here.</p>
          <div className='flex space-x-4'>
            <Link to='/services' className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105'>Our Services</Link>
            <Link to='/contact' className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105'>Contact Us</Link>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gray-800'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-4 text-green-400'>Why Choose AgriGrow?</h2>
          <p className='text-gray-300 max-w-3xl mx-auto mb-12'>We are committed to providing farmers with access to genetically superior, disease-resistant seedlings that promise higher yields and robust growth. Quality and reliability are the seeds of our business.</p>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-gray-900 p-8 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-semibold mb-3 text-green-300'>Quality You Can Trust</h3>
              <p className='text-gray-400'>Our seedlings are nurtured in optimal conditions to ensure they are healthy, strong, and ready for your farm.</p>
            </div>
            <div className='bg-gray-900 p-8 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-semibold mb-3 text-green-300'>Expert Support</h3>
              <p className='text-gray-400'>Our team of agricultural experts is always on hand to provide guidance and support for your farming needs.</p>
            </div>
            <div className='bg-gray-900 p-8 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-semibold mb-3 text-green-300'>Sustainable Farming</h3>
              <p className='text-gray-400'>We promote and practice sustainable farming methods to protect our environment for future generations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
