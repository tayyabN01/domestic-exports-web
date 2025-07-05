
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923250777980', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center md:hidden animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingWhatsApp;
