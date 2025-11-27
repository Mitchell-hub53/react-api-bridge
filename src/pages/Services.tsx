const services = [
  {
    name: 'Tomato Seedlings',
    description: 'High-yield, disease-resistant tomato seedlings. Perfect for both open-field and greenhouse farming. Ready for transplant in 4-6 weeks.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b4abb0-704d-4a04-a802-b6c34ed39c73/tomato-seedlings-gha8wji-1764270513140.webp',
  },
  {
    name: 'Cabbage Seedlings',
    description: 'Robust cabbage seedlings with excellent head formation. Suitable for a variety of climates and soil types. Expect a bountiful harvest.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b4abb0-704d-4a04-a802-b6c34ed39c73/cabbage-seedlings-bddzg2i-1764270520294.webp',
  },
  {
    name: 'Maize Seedlings',
    description: 'Genetically superior maize seedlings for higher grain yield. Our seedlings offer a strong start, ensuring uniform growth and maturity.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b4abb0-704d-4a04-a802-b6c34ed39c73/maize-seedlings-l8kar21-1764270528515.webp',
  },
];

export default function Services() {
  return (
    <div className='bg-gray-800 min-h-screen py-16 px-4'>
      <div className='container mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-green-400 mb-12'>Our Seedling Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service) => (
            <div key={service.name} className='bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300'>
              <img src={service.imageUrl} alt={service.name} className='w-full h-56 object-cover' />
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-green-300 mb-3'>{service.name}</h3>
                <p className='text-gray-400'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
