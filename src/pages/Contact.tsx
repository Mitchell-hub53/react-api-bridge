import { useState } from 'react';
import { toast } from 'sonner';
import { sendContactMessage } from '../lib/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await sendContactMessage(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gray-800 text-white min-h-screen py-16 px-4'>
      <div className='container mx-auto max-w-2xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-green-400 mb-4'>Contact Us</h1>
        <p className='text-gray-300 mb-10'>
          Have a question about our seedlings, need farming advice, or want to place a bulk order? We'd love to hear from you. Fill out the form below, and a member of our team will get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className='bg-gray-900 p-8 rounded-lg shadow-xl text-left'>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-gray-300 font-semibold mb-2'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-300 font-semibold mb-2'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='block text-gray-300 font-semibold mb-2'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
