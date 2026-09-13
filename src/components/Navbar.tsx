import React from 'react';
import logo from '../assets/logo-tech.png';
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
            <img src={logo} alt="Dev Stack logo" className='w-8 h-8 object-contain' />
        </div>
        <span className="text-xl font-bold text-gray-800">Dev Stack</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-gray-600 font-medium">
        <a href="#" className="text-pink-600">Home</a>
        <a href="#" className="hover:text-gray-900">Technologies</a>
        <a href="#" className="hover:text-gray-900">Projects</a>
        <a href="#" className="hover:text-gray-900">About</a>
        <a href="#" className="hover:text-gray-900">Contact</a>
      </div>

      <div className="flex gap-4">
        <button className="text-gray-600 font-medium hover:text-gray-900">Sign In</button>
        <button className="brand-gradient text-white px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;