export default function About() {
  return (
    <div className='bg-gray-800 text-white min-h-screen'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-green-400 mb-8'>About AgriGrow</h1>
        <div className='max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8 md:p-12'>
          <p className='text-lg text-gray-300 mb-6'>
            AgriGrow was founded on a simple but powerful idea: every farmer, regardless of the size of their operation, deserves access to the highest quality seedlings. In many parts of Africa, agricultural potential is limited by the availability of reliable, disease-resistant starter plants. We saw an opportunity to change that.
          </p>
          <p className='text-lg text-gray-300 mb-6'>
            Our mission is to be the leading provider of premium agricultural seedlings, empowering local farmers to increase their yields, improve their livelihoods, and contribute to food security in their communities. We combine modern horticultural techniques with a deep understanding of local climates and soil types to produce seedlings that thrive.
          </p>
          <h2 className='text-3xl font-semibold text-green-300 mt-10 mb-4'>Our Commitment</h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            <li><span className='font-semibold'>Genetic Quality:</span> We source our seeds from certified suppliers to ensure genetic purity and superior traits.</li>
            <li><span className='font-semibold'>Health & Vigor:</span> Our state-of-the-art nurseries provide the perfect environment for raising robust and healthy seedlings.</li>
            <li><span className='font-semibold'>Farmer Success:</span> We believe our success is measured by the success of our farmers. We provide ongoing support and advice to help you get the best from our products.</li>
            <li><span className='font-semibold'>Sustainability:</span> We are dedicated to sustainable practices that protect our environment and ensure a healthy future for farming.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
