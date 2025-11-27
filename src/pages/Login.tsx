import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { adminLogin } from '../lib/api';
import { LogIn, Loader2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Attempting login...');

    try {
      const response = await adminLogin({ email, password });
      toast.success('Login successful!', { id: toastId });
      console.log('Admin Token:', response.token);
      // In a real app, you would store the token and redirect
      // localStorage.setItem('authToken', response.token);
      // window.location.href = '/admin/dashboard';
      setEmail('');
      setPassword('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 flex items-center justify-center h-[calc(100vh-160px)]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-400">Admin Login</h1>
          <p className="text-gray-400 mt-2">Access the administrative dashboard.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="admin@kazi.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors disabled:bg-orange-400/50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <LogIn className="mr-2" />}
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
