
import logo from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">

        <button className="md:hidden text-2xl text-gray-700 cursor-pointer">☰</button>

        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
          <img src={logo} alt="Dev Stack logo" className="h-8 w-auto object-contain" />
        </div>

        <div className="hidden md:flex gap-8 text-gray-600 font-medium cursor-pointer">
          <a href="#" className="text-pink-600">Home</a>
          <a href="#" className="hover:text-gray-900">Technologies</a>
          <a href="#" className="hover:text-gray-900">Projects</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="text-gray-600 font-medium hover:text-gray-900 cursor-pointer">Sign In</button>
          <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-pink-600 transition cursor-pointer">Sign Up</button>
        </div>

        <div className="md:hidden w-8"></div>
      </div>
    </nav>
  );
};

export default Navbar;