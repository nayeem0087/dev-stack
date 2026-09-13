
import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Curated tools, technologies, and resources for developers building modern software.</p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-gray-600">GitHub</a>
              <a href="#" className="hover:text-gray-600">Twitter</a>
              <a href="#" className="hover:text-gray-600">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-800">Home</a></li>
              <li><a href="#" className="hover:text-gray-800">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-800">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-800">About</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
              <li><a href="#" className="hover:text-gray-800">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-6 flex justify-between text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;