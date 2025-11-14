import CategoryCard from './CategoryCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Apparel',
      image: 'https://drive.google.com/file/d/1yPubiNWNzwCLkRq4HpITOdXBw_-zz-yR/view?usp=sharing',
      teaser: 'Explore premium leather jackets, coats, vests, and pants.',
      expanded: 'Explore premium leather jackets, coats, vests, pants, skirts, and dresses for men and women. Handcrafted using LWG-certified sheepskin and cowhide with full OEM customization options.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20APPAREL%20M&F%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFQUEFSRUwgTSZGIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzUyNjkxODY0LCJleHAiOjE3ODQyMjc4NjR9.kHyu6xWxlhnz9licM0zLmd9bSt5JFoFs4CM6wEEtTvc'
    },
    {
      title: 'Bags',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/freepik__the-style-is-candid-image-photography-with-natural__27579.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2ZyZWVwaWtfX3RoZS1zdHlsZS1pcy1jYW5kaWQtaW1hZ2UtcGhvdG9ncmFwaHktd2l0aC1uYXR1cmFsX18yNzU3OS5wbmciLCJpYXQiOjE3NTI2OTE5ODEsImV4cCI6MTc4NDIyNzk4MX0.hQpqTPbtQpMVknn9gg8uw3mvvn-w3eX2E7J6gVcry6c',
      teaser: 'Durable and stylish leather bags for travel and daily use.',
      expanded: 'Durable, stylish leather bags built for travel and everyday use. Choose from duffels, suit carriers, and pouches — all customizable with your brand\'s design and finish.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BAGS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJBR1MgQ0FUQUxPR1VFIF8yNS5wZGYiLCJpYXQiOjE3NTI2OTE4ODQsImV4cCI6MTc4NDIyNzg4NH0.62EsjOqCzZrL8jPbiG6AHaMHEk3wOYWAiPX0CYV_B6s'
    },
    {
      title: 'Wallets',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/wallets.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL3dhbGxldHMuanBlZyIsImlhdCI6MTc1MjY5MjA1OSwiZXhwIjoxNzg0MjI4MDU5fQ.7MNeONLwC8wga_qCbYvTf_mPJ_0SigdfTqvb1AX_F08',
      teaser: 'Refined leather wallets for both men and women.',
      expanded: 'Elegant men\'s and women\'s leather wallets — bi-folds, tri-folds, and card holders. Premium materials and full branding options for private label clients.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20WALLETS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIFdBTExFVFMgQ0FUQUxPR1VFIF8yNS5wZGYiLCJpYXQiOjE3NTI2OTE5MDcsImV4cCI6MTc4NDIyNzkwN30.hM-2zzW9LZRSuygmd3mZ-7uBkJtgDXjzAOakhSZsNQ8'
    },
    {
      title: 'Gloves',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/freepik__the-style-is-candid-image-photography-with-natural__60150.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2ZyZWVwaWtfX3RoZS1zdHlsZS1pcy1jYW5kaWQtaW1hZ2UtcGhvdG9ncmFwaHktd2l0aC1uYXR1cmFsX182MDE1MC5wbmciLCJpYXQiOjE3NTI2OTIwMjYsImV4cCI6MTc4NDIyODAyNn0.TXKMjB_whRX23LxDOI9LromPyOfAqbrngp0u4j4n7Ig',
      teaser: 'Luxury leather gloves for comfort and style.',
      expanded: 'Soft, warm, and stylish leather gloves for men and women. Ideal for winterwear, driving, or fashion brands. Fully customizable in material, lining, and fit.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20GLOVES%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEdMT1ZFUyBDQVRBTE9HVUUgXzI1LnBkZiIsImlhdCI6MTc1MjY5MTkyNSwiZXhwIjoxNzg0MjI3OTI1fQ.Sxe9VlipV5IbNm9hPok3MK4BgVphq52t10w5r264wuk'
    },
    {
      title: 'Accessories',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Accessories.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0FjY2Vzc29yaWVzLmpwZWciLCJpYXQiOjE3NTI2OTIxNTIsImV4cCI6MTc4NDIyODE1Mn0.TVMP7SqlSQcfAVFSUhiE3vT6FfpnTA4OfuwscHwdAoE',
      teaser: 'Premium lifestyle leather accessories for gifting & branding.',
      expanded: 'Complete your collection with leather keychains, desk organizers, laptop sleeves, and more. Ideal for gifting, merchandising, or luxury lifestyle brands.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20ACCESSORIES%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFDQ0VTU09SSUVTIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzUyNjkxODI3LCJleHAiOjE3ODQyMjc4Mjd9.g2JvrU_XdS12o_OQ1g7UlVIuiCQehjpBlkJ0nXSNVTU'
    },
    {
      title: 'Belts',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/belts.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2JlbHRzLmpwZWciLCJpYXQiOjE3NTI2OTIxMTgsImV4cCI6MTc4NDIyODExOH0.Sahf5D_cTpWVRNdRot-vx99lJKOVEE-6D2sTnK70SyQ',
      teaser: 'Versatile leather belts crafted for every wardrobe.',
      expanded: 'Classic and modern leather belts for men and women. Made from full-grain hides with custom buckles, stitching, and branding.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BELTS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJFTFRTIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzUyNjkxOTQzLCJleHAiOjE3ODQyMjc5NDN9.FQJNSiHPCgsZBAU0Y8wqEXVqwtvvQ1zgTqK8KJ_8FMI'
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