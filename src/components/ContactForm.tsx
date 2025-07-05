
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
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
  };

  return (
    <section id="contact-form" className="py-20 bg-tan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Contact for Pricing
          </h2>
          <p className="text-xl text-tan-100">
            Get a customized quote for your leather goods requirements
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
