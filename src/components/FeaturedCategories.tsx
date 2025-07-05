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
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20APPAREL%20M&F%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFQUEFSRUwgTSZGIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzUxNzU1MzgxLCJleHAiOjE3ODMyOTEzODF9.UujzxMMxkXlm5uX3P71-zPHjh-t6KoIp0GtQ_at3raE'
    },
    {
      title: 'Bags',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      teaser: 'Durable and stylish leather bags for travel and daily use.',
      expanded: 'Durable, stylish leather bags built for travel and everyday use. Choose from duffels, suit carriers, and pouches — all customizable with your brand\'s design and finish.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BAGS%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJBR1MgQ0FUQUxPR1VFIF8yNC5wZGYiLCJpYXQiOjE3NTE3NTUzOTksImV4cCI6MTc4MzI5MTM5OX0.GXiH820Gzi7VMaj50jjtqMHUVPs8ZtXKjW15ll3h1iE'
    },
    {
      title: 'Wallets',
      image: 'https://images.unsplash.com/photo-1627123339732-4d4c2e0c3ab2?auto=format&fit=crop&w=800&q=80',
      teaser: 'Refined leather wallets for both men and women.',
      expanded: 'Elegant men\'s and women\'s leather wallets — bi-folds, tri-folds, and card holders. Premium materials and full branding options for private label clients.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20WALLETS%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIFdBTExFVFMgQ0FUQUxPR1VFIF8yNC5wZGYiLCJpYXQiOjE3NTE3NTU0MzgsImV4cCI6MTc4MzI5MTQzOH0.vAsw5qFtJkYPkDT6mF1AHcYGwAa9mFRvYxo-vacqLhs'
    },
    {
      title: 'Gloves',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?auto=format&fit=crop&w=800&q=80',
      teaser: 'Luxury leather gloves for comfort and style.',
      expanded: 'Soft, warm, and stylish leather gloves for men and women. Ideal for winterwear, driving, or fashion brands. Fully customizable in material, lining, and fit.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20GLOVES%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEdMT1ZFUyBDQVRBTE9HVUUgXzI0LnBkZiIsImlhdCI6MTc1MTc1NTQyMywiZXhwIjoxNzgzMjkxNDIzfQ.NAdh_zVBSop99_a3GB7zAWrgyfh2I2pNRZmzFqPFc4s'
    },
    {
      title: 'Accessories',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800&q=80',
      teaser: 'Premium lifestyle leather accessories for gifting & branding.',
      expanded: 'Complete your collection with leather keychains, desk organizers, laptop sleeves, and more. Ideal for gifting, merchandising, or luxury lifestyle brands.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20ACCESSORIES%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFDQ0VTU09SSUVTIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzUxNzU1MzQ5LCJleHAiOjE3ODMyOTEzNDl9.8lXDglobqKSuXykLCKqXQzSZL0qzJSmJ_nPmt7BSibg'
    },
    {
      title: 'Belts',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80',
      teaser: 'Versatile leather belts crafted for every wardrobe.',
      expanded: 'Classic and modern leather belts for men and women. Made from full-grain hides with custom buckles, stitching, and branding.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BELTS%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJFTFRTIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzUxNzU1NDExLCJleHAiOjE3ODMyOTE0MTF9.jdb6_UW4s_AknTbm0JqiVwu1IsCYRfbuRCGYgq751c0'
    }
  ];

  const openMainCatalog = () => {
    window.open('https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/DOMESTIC%20EXPORTS%20-%20PRODUCT%20CATALOGUE%20\'24%20(Small%20File)_compressed.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0RPTUVTVElDIEVYUE9SVFMgLSBQUk9EVUNUIENBVEFMT0dVRSAnMjQgKFNtYWxsIEZpbGUpX2NvbXByZXNzZWQucGRmIiwiaWF0IjoxNzUxNzU0MDc3LCJleHAiOjIwNjcxMTQwNzd9.9fQd4zSPiOjYFs69wTaU6BiTdJ0M364_T4LNNECU_2w', '_blank');
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
