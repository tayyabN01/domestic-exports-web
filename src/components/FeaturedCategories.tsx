
import CategoryCard from './CategoryCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Apparel',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/assets/images/page12_img3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2Fzc2V0cy9pbWFnZXMvcGFnZTEyX2ltZzMucG5nIiwiaWF0IjoxNzM2MDE4NDg3LCJleHAiOjE3Njc1NTQ0ODd9.XqEgP6rIg8p_Pr7JqVJsUGxKRCBWuPdVafKOEEqJAuI',
      teaser: 'Explore premium leather jackets, coats, vests, and pants.',
      expanded: 'Explore premium leather jackets, coats, vests, pants, skirts, and dresses for men and women. Handcrafted using LWG-certified sheepskin and cowhide with full OEM customization options.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20APPAREL%20M&F%20CATALOGUE%20_24.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFQUEFSRUwgTSZGIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzM2MDE4NDg3LCJleHAiOjE3Njc1NTQ0ODd9.YALjRuIDW7TehUZsNsNpxKyW3PKq7xeL0rGlV3Qk-sg'
    },
    {
      title: 'Bags',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      teaser: 'Durable and stylish leather bags for travel and daily use.',
      expanded: 'Durable, stylish leather bags built for travel and everyday use. Choose from duffels, suit carriers, and pouches — all customizable with your brand\'s design and finish.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BAGS%20CATALOGUE%20_24.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJBR1MgQ0FUQUxPR1VFIF8yNC5wZGYiLCJpYXQiOjE3MzYwMTg0ODcsImV4cCI6MTc2NzU1NDQ4N30.I0UdLw8oNEJBOgYwOsyR2gPJHmPLnKPWxAL2Vu7YQME'
    },
    {
      title: 'Wallets',
      image: 'https://images.unsplash.com/photo-1627123339732-4d4c2e0c3ab2?auto=format&fit=crop&w=800&q=80',
      teaser: 'Refined leather wallets for both men and women.',
      expanded: 'Elegant men\'s and women\'s leather wallets — bi-folds, tri-folds, and card holders. Premium materials and full branding options for private label clients.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20WALLETS%20CATALOGUE%20_24.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIFdBTExFVFMgQ0FUQUxPR1VFIF8yNC5wZGYiLCJpYXQiOjE3MzYwMTg0ODcsImV4cCI6MTc2NzU1NDQ4N30.z1z2nMOJvz_4veCh_vq-wF6eNGR7WGE1fQy6YnLgJbM'
    },
    {
      title: 'Gloves',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?auto=format&fit=crop&w=800&q=80',
      teaser: 'Luxury leather gloves for comfort and style.',
      expanded: 'Soft, warm, and stylish leather gloves for men and women. Ideal for winterwear, driving, or fashion brands. Fully customizable in material, lining, and fit.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20GLOVES%20CATALOGUE%20_24.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEdMT1ZFUyBDQVRBTE9HVUUgXzI0LnBkZiIsImlhdCI6MTczNjAxODQ4NywiZXhwIjoxNzY3NTU0NDg3fQ.Z8RRMsJRLLqW6qDQFB_4vRrONGE8KLuNyFaqCqGKQNs'
    },
    {
      title: 'Accessories',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800&q=80',
      teaser: 'Premium lifestyle leather accessories for gifting & branding.',
      expanded: 'Complete your collection with leather keychains, desk organizers, laptop sleeves, and more. Ideal for gifting, merchandising, or luxury lifestyle brands.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20ACCESSORIES%20CATALOGUE%20_24.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFDQ0VTU09SSUVTIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzM2MDE4NDg3LCJleHAiOjE3Njc1NTQ0ODd9.jh8P9Iz7HGqKC3CVP9T4ztLAo5_1BbC5V4QGFNMFrGU'
    },
    {
      title: 'Belts',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80',
      teaser: 'Versatile leather belts crafted for every wardrobe.',
      expanded: 'Classic and modern leather belts for men and women. Made from full-grain hides with custom buckles, stitching, and branding.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BELTS%20CATALOGUE%20_24.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJFTFRTIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzM2MDE4NDg3LCJleHAiOjE3Njc1NTQ0ODd9.NdN2eKtKmOwBv44u7C0CHK2RNpzGvPKe-2vZJ0FzGSY'
    }
  ];

  const openMainCatalog = () => {
    window.open('https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/DOMESTIC%20EXPORTS%20-%20PRODUCT%20CATALOGUE...pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL0RPTUVTVEJDIE9YUE9SVFMgLSBQUk9EVUNUIENBVEFMT0dVRS4uLnBkZiIsImlhdCI6MTczNjAxODQ4NywiZXhwIjoxNzY3NTU0NDg3fQ.WblLzg5jUaFcQ5OIrhNjMTW8FYJGKjgkmZ-9L4rKWmQ', '_blank');
  };

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

        <div className="text-center">
          <Button
            onClick={openMainCatalog}
            className="bg-charcoal hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Preview Complete Catalogue</span>
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
