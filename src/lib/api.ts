const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Mock function for sending a contact message
export const sendContactMessage = async (formData) => {
  // In a real app, this would be a POST request to the backend.
  console.log('Sending message:', formData);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // Simulate a successful response
  return { success: true, message: 'Message received!' };
  
  /*
  // Example of a real fetch call:
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
  */
};

// Mock function for admin login
export const loginAdmin = async (credentials) => {
  console.log('Logging in with:', credentials);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful login
  if (credentials.username === 'admin' && credentials.password === 'password') {
    return { success: true, token: 'fake-jwt-token' };
  }

  // Simulate a failed login
  throw new Error('Invalid credentials');
};
