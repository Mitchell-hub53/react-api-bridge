import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

export default function Header({ toggleTheme, theme }) {
  return (
    <header className='bg-gray-900 text-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <Link to='/' className='text-2xl font-bold text-green-400'>
          AgriGrow
        </Link>
        <nav className='hidden md:flex items-center space-x-6'>
          <NavLink to='/' className={({ isActive }) => `hover:text-green-300 transition-colors ${isActive ? 'text-green-400 font-semibold' : ''}`}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => `hover:text-green-300 transition-colors ${isActive ? 'text-green-400 font-semibold' : ''}`}>About Us</NavLink>
          <NavLink to='/services' className={({ isActive }) => `hover:text-green-300 transition-colors ${isActive ? 'text-green-400 font-semibold' : ''}`}>Services</NavLink>
          <NavLink to='/contact' className={({ isActive }) => `hover:text-green-300 transition-colors ${isActive ? 'text-green-400 font-semibold' : ''}`}>Contact</NavLink>
        </nav>
        <button onClick={toggleTheme} className='p-2 rounded-full hover:bg-gray-700 transition-colors'>
          {theme === 'dark' ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
        </button>
      </div>
    </header>
  );
}
