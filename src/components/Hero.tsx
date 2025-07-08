
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToCategories = () => {
    document.getElementById('featured-categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/page1_img1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL3BhZ2UxX2ltZzEuanBlZyIsImlhdCI6MTc1MTk5ODgzMiwiZXhwIjoxNzgzNTM0ODMyfQ.OgiUYfXKYymWwXBRotXBiU5DIVL1z0w7N1O6g2SPIj0')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Crafted to Last.
          <br />
          <span className="text-tan-200">Designed to Impress.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Premium B2B leather goods manufacturer specializing in handcrafted excellence
        </p>
        
        <Button 
          onClick={scrollToCategories}
          className="bg-tan hover:bg-tan-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Explore Collections
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
