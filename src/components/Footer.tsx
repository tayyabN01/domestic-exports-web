
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-tan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-6">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#featured-categories" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Apparel
                </a>
              </li>
              <li>
                <a href="#featured-categories" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Bags
                </a>
              </li>
              <li>
                <a href="#featured-categories" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Wallets
                </a>
              </li>
              <li>
                <a href="#featured-categories" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Belts
                </a>
              </li>
              <li>
                <a href="#featured-categories" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Gloves
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600">
                <strong>Email:</strong>{' '}
                <a href="mailto:sales@domesticexports.com" className="hover:text-tan transition-colors duration-200">
                  sales@domesticexports.com
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong>{' '}
                <a href="tel:+923250777980" className="hover:text-tan transition-colors duration-200">
                  +92 325 0777980
                </a>
              </p>
              <p className="text-gray-600">
                <strong>WhatsApp:</strong>{' '}
                <a 
                  href="https://wa.me/923250777980" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-tan transition-colors duration-200"
                >
                  +92 325 0777980
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-tan transition-colors duration-200">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-tan-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png" 
              alt="Domestic Exports Logo" 
              className="h-12 w-auto mb-4 md:mb-0"
            />
            <p className="text-gray-600 text-center md:text-right">
              © 2025 Domestic Exports. All rights reserved.
              <br />
              Crafted with pride in Sialkot, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
