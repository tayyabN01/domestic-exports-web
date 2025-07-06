
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream leather-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-charcoal mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to start your leather goods project? We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8">
                Send us a Message
              </h2>
              
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
                  className="w-full bg-tan hover:bg-tan-600 text-white py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tan rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      <a 
                        href="mailto:sales@domesticexports.com" 
                        className="hover:text-tan transition-colors duration-200"
                      >
                        sales@domesticexports.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tan rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      <a 
                        href="tel:+923250777980" 
                        className="hover:text-tan transition-colors duration-200"
                      >
                        +92 325 0777980
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday - Friday, 9 AM - 6 PM PKT
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tan rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600">
                      <a 
                        href="https://wa.me/923250777980" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-tan transition-colors duration-200"
                      >
                        +92 325 0777980
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Quick responses for urgent inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tan rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Sialkot, Punjab, Pakistan
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Global leather manufacturing hub
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-cream rounded-lg">
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM PKT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
