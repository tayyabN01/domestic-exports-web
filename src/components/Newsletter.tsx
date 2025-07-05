
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    
    toast.success('Thank you for subscribing! Check your email for our latest catalog.');
    setEmail('');
  };

  return (
    <section className="py-20 bg-tan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl font-bold text-white mb-6">
          Get Our Catalog & New Drops
        </h2>
        <p className="text-xl text-tan-100 mb-8">
          Stay updated with our latest collections and exclusive B2B offers
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-white border-white text-charcoal placeholder-gray-400 focus:ring-white focus:border-white"
            required
          />
          <Button 
            type="submit"
            className="bg-charcoal hover:bg-gray-800 text-white px-8 py-2 whitespace-nowrap transition-all duration-300 hover:scale-105"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
