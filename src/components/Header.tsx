
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png" 
              alt="Domestic Exports Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-charcoal hover:text-tan transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-charcoal hover:text-tan transition-colors duration-200">
              About Us
            </Link>
            <Link to="/blog" className="text-charcoal hover:text-tan transition-colors duration-200">
              Blog
            </Link>
            <Link to="/contact" className="text-charcoal hover:text-tan transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            <Button 
              className="hidden sm:inline-flex bg-tan hover:bg-tan-600 text-white px-6 py-2 rounded-full transition-all duration-200"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact for Pricing
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-charcoal hover:text-tan transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-charcoal hover:text-tan transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-charcoal hover:text-tan transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                className="text-charcoal hover:text-tan transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-charcoal hover:text-tan transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="sm:hidden bg-tan hover:bg-tan-600 text-white px-6 py-2 rounded-full transition-all duration-200 w-full"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact for Pricing
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
