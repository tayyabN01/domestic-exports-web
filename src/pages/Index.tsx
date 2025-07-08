
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import MaterialSwatches from '@/components/MaterialSwatches';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCategories />
      <MaterialSwatches />
      <WhyChooseUs />
      <ContactForm />
      <Newsletter />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
