
import logo from '../assets/logo-text.png';
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
            <img src={logo} alt="Dev Stack logo" className=' object-contain' />
        </div>
        
      </div>
      
      <div className="hidden md:flex gap-8 text-gray-600 font-medium cursor-pointer">
        <a href="#" className="text-pink-600">Home</a>
        <a href="#" className="hover:text-gray-900">Technologies</a>
        <a href="#" className="hover:text-gray-900">Projects</a>
        <a href="#" className="hover:text-gray-900">About</a>
        <a href="#" className="hover:text-gray-900">Contact</a>
      </div>

      <div className="flex gap-4">
        <button className=" text-gray-600 font-medium hover:text-gray-900 cursor-pointer">Sign In</button>
        <button className="brand-gradient text-white px-5 py-2 rounded-full font-medium bg-pink-500 shadow-md hover:opacity-90 transition cursor-pointer">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;