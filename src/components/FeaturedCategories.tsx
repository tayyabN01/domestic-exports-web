import CategoryCard from './CategoryCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Apparel',
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png',
      teaser: 'Explore premium leather jackets, coats, vests, and pants.',
      expanded: 'Explore premium leather jackets, coats, vests, pants, skirts, and dresses for men and women. Handcrafted using LWG-certified sheepskin and cowhide with full OEM customization options.',
      catalogUrl: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      title: 'Bags',
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png',
      teaser: 'Durable and stylish leather bags for travel and daily use.',
      expanded: 'Durable, stylish leather bags built for travel and everyday use. Choose from duffels, suit carriers, and pouches — all customizable with your brand\'s design and finish.',
      catalogUrl: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      title: 'Wallets',
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png',
      teaser: 'Refined leather wallets for both men and women.',
      expanded: 'Elegant men\'s and women\'s leather wallets — bi-folds, tri-folds, and card holders. Premium materials and full branding options for private label clients.',
      catalogUrl: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      title: 'Gloves',
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png',
      teaser: 'Luxury leather gloves for comfort and style.',
      expanded: 'Soft, warm, and stylish leather gloves for men and women. Ideal for winterwear, driving, or fashion brands. Fully customizable in material, lining, and fit.',
      catalogUrl: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      title: 'Accessories',
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png',
      teaser: 'Premium lifestyle leather accessories for gifting & branding.',
      expanded: 'Complete your collection with leather keychains, desk organizers, laptop sleeves, and more. Ideal for gifting, merchandising, or luxury lifestyle brands.',
      catalogUrl: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      title: 'Belts',
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png',
      teaser: 'Versatile leather belts crafted for every wardrobe.',
      expanded: 'Classic and modern leather belts for men and women. Made from full-grain hides with custom buckles, stitching, and branding.',
      catalogUrl: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    }
  ];

  

  return (
    <section id="featured-categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
            Our Premium Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of handcrafted leather goods, each piece designed with meticulous attention to detail and built to last generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;