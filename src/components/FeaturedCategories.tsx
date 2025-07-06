import CategoryCard from './CategoryCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Apparel 11',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/freepik__the-style-is-candid-image-photography-with-natural__38973.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2ZyZWVwaWtfX3RoZS1zdHlsZS1pcy1jYW5kaWQtaW1hZ2UtcGhvdG9ncmFwaHktd2l0aC1uYXR1cmFsX18zODk3My5wbmciLCJpYXQiOjE3NTE4MTA4NzQsImV4cCI6MTc4MzM0Njg3NH0.qplMXBg_lAyJ8gVyUjf82wxBVlVXmbdOpeLUe4r3wn0',
      teaser: 'Explore premium leather jackets, coats, vests, and pants.',
      expanded: 'Explore premium leather jackets, coats, vests, pants, skirts, and dresses for men and women. Handcrafted using LWG-certified sheepskin and cowhide with full OEM customization options.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20APPAREL%20M&F%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFQUEFSRUwgTSZGIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzUxNzU1MzgxLCJleHAiOjE3ODMyOTEzODF9.UujzxMMxkXlm5uX3P71-zPHjh-t6KoIp0GtQ_at3raE'
    },
    {
      title: 'Bags',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/freepik__the-style-is-candid-image-photography-with-natural__27579.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2ZyZWVwaWtfX3RoZS1zdHlsZS1pcy1jYW5kaWQtaW1hZ2UtcGhvdG9ncmFwaHktd2l0aC1uYXR1cmFsX18yNzU3OS5wbmciLCJpYXQiOjE3NTE4MTA4MDMsImV4cCI6MTc4MzM0NjgwM30.AeyWWroJaXNPVzA6Dh8LlIGvv7PjEIImNXhQm6iRDk8',
      teaser: 'Durable and stylish leather bags for travel and daily use.',
      expanded: 'Durable, stylish leather bags built for travel and everyday use. Choose from duffels, suit carriers, and pouches — all customizable with your brand\'s design and finish.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BAGS%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJBR1MgQ0FUQUxPR1VFIF8yNC5wZGYiLCJpYXQiOjE3NTE3NTUzOTksImV4cCI6MTc4MzI5MTM5OX0.GXiH820Gzi7VMaj50jjtqMHUVPs8ZtXKjW15ll3h1iE'
    },
    {
      title: 'Wallets',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/wallets.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL3dhbGxldHMuanBlZyIsImlhdCI6MTc1MTgxMTY2MiwiZXhwIjoxNzgzMzQ3NjYyfQ.OqZil-4x6Rl3WTfqClEsRDJUIMyZV0FOknr2JqOv4Eo',
      teaser: 'Refined leather wallets for both men and women.',
      expanded: 'Elegant men\'s and women\'s leather wallets — bi-folds, tri-folds, and card holders. Premium materials and full branding options for private label clients.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20WALLETS%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIFdBTExFVFMgQ0FUQUxPR1VFIF8yNC5wZGYiLCJpYXQiOjE3NTE3NTU0MzgsImV4cCI6MTc4MzI5MTQzOH0.vAsw5qFtJkYPkDT6mF1AHcYGwAa9mFRvYxo-vacqLhs'
    },
    {
      title: 'Gloves',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/freepik__the-style-is-candid-image-photography-with-natural__60150.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2ZyZWVwaWtfX3RoZS1zdHlsZS1pcy1jYW5kaWQtaW1hZ2UtcGhvdG9ncmFwaHktd2l0aC1uYXR1cmFsX182MDE1MC5wbmciLCJpYXQiOjE3NTE4MTI0MDYsImV4cCI6MTc4MzM0ODQwNn0.BbItf23Yd3yQ84YYN00kTHwFO9BKbeiTbXSMnSyqtTE',
      teaser: 'Luxury leather gloves for comfort and style.',
      expanded: 'Soft, warm, and stylish leather gloves for men and women. Ideal for winterwear, driving, or fashion brands. Fully customizable in material, lining, and fit.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20GLOVES%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEdMT1ZFUyBDQVRBTE9HVUUgXzI0LnBkZiIsImlhdCI6MTc1MTc1NTQyMywiZXhwIjoxNzgzMjkxNDIzfQ.NAdh_zVBSop99_a3GB7zAWrgyfh2I2pNRZmzFqPFc4s'
    },
    {
      title: 'Accessories',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/A%20curated%20set%20of%20luxury%20leather%20desk%20accessories%20leather%20keychains,%20card%20holders,%20notepads,%20pen%20tra%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0EgY3VyYXRlZCBzZXQgb2YgbHV4dXJ5IGxlYXRoZXIgZGVzayBhY2Nlc3NvcmllcyBsZWF0aGVyIGtleWNoYWlucywgY2FyZCBob2xkZXJzLCBub3RlcGFkcywgcGVuIHRyYSAoMSkuanBlZyIsImlhdCI6MTc1MTgxMDg5MiwiZXhwIjoxNzgzMzQ2ODkyfQ.-xEaF0IDFBn0KMc_9HqGyeuu2ptyVcH575dn-atP1B8',
      teaser: 'Premium lifestyle leather accessories for gifting & branding.',
      expanded: 'Complete your collection with leather keychains, desk organizers, laptop sleeves, and more. Ideal for gifting, merchandising, or luxury lifestyle brands.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20ACCESSORIES%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFDQ0VTU09SSUVTIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzUxODE2MTk2LCJleHAiOjE3ODMzNTIxOTZ9.sbxeqNR0ZkX2gO8EXIlpXipm322VhUA-47wmNDFix5Uhhttps://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20ACCESSORIES%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFDQ0VTU09SSUVTIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzUxODE2MTk2LCJleHAiOjE3ODMzNTIxOTZ9.sbxeqNR0ZkX2gO8EXIlpXipm322VhUA-47wmNDFix5Uttps://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20ACCESSORIES%20CATALOGUE%20_24.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFDQ0VTU09SSUVTIENBVEFMT0dVRSBfMjQucGRmIiwiaWF0IjoxNzUxNzU1MzQ5LCJleHAiOjE3ODMyOTEzNDl9.8lXDglobqKSuXykLCKqXQzSZL0qzJSmJ_nPmt7BSibg'
    },
    {
      title: 'Belts',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/belts.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2JlbHRzLmpwZWciLCJpYXQiOjE3NTE4MTE1MzIsImV4cCI6MTc4MzM0NzUzMn0.27tf7P8fAqlkWkgTwzlkEWC_Q8_hbDHsQDCzpz02Ha8',
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
