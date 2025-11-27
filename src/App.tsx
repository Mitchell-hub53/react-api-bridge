import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`${theme} bg-gray-800`}>
      <Router>
        <Toaster richColors position='top-right' />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
