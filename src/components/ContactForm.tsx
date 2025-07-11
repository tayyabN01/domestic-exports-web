
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    name: '',
    email: '',
    company: '',
    quantity: '',
    message: '',
    requestCall: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, requestCall: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formElement = e.target as HTMLFormElement;
    const formDataToSend = new FormData(formElement);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast.success('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          productName: '',
          name: '',
          email: '',
          company: '',
          quantity: '',
          message: '',
          requestCall: false
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-tan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Contact for Pricing
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="30e439d1-8c6a-440d-be3b-7ff1bf294f2b" />
            <input type="hidden" name="subject" value="New Contact Form Inquiry - Leather Manufacturing" />
            <input type="hidden" name="from_name" value="Leather Manufacturing Website" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Product Interest
                </label>
                <Input
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="e.g., Leather Jackets, Wallets, Bags"
                  className="border-tan focus:ring-tan focus:border-tan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="border-tan focus:ring-tan focus:border-tan"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="border-tan focus:ring-tan focus:border-tan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Company Name
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className="border-tan focus:ring-tan focus:border-tan"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Estimated Quantity
              </label>
              <Input
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 100-500 pieces, 1000+ units"
                className="border-tan focus:ring-tan focus:border-tan"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Message & Requirements
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific requirements, design preferences, timeline, etc."
                rows={5}
                className="border-tan focus:ring-tan focus:border-tan"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="requestCall"
                checked={formData.requestCall}
                onCheckedChange={handleCheckboxChange}
                className="border-tan data-[state=checked]:bg-tan"
              />
              <input 
                type="hidden" 
                name="requestCall" 
                value={formData.requestCall ? 'Yes' : 'No'} 
              />
              <label 
                htmlFor="requestCall" 
                className="text-sm text-charcoal cursor-pointer"
              >
                Request a call back to discuss requirements
              </label>
            </div>

            <Button 
              type="submit"
              className="w-full bg-charcoal hover:bg-gray-800 text-white py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
