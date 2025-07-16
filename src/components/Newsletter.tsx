
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    const formElement = e.target as HTMLFormElement;
    const formDataToSend = new FormData(formElement);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast.success('Thank you for requesting our sample! We will reach out to you within a few hours.');
        setEmail('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-tan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl font-bold text-white mb-6">
          Request Sample
        </h2>
        <p className="text-xl text-tan-100 mb-8">
          Experience our quality up close.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="hidden" name="access_key" value="30e439d1-8c6a-440d-be3b-7ff1bf294f2b" />
          <input type="hidden" name="subject" value="Newsletter Subscription - Leather Manufacturing" />
          <input type="hidden" name="from_name" value="Leather Manufacturing Website" />
          
          <Input
            type="email"
            name="email"
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
            Request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
