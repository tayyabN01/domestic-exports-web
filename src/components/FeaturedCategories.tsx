import CategoryCard from './CategoryCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Apparel',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Apparel.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0FwcGFyZWwucG5nIiwiaWF0IjoxNzYzMTQ5NzUxLCJleHAiOjE3OTQ2ODU3NTF9.PzkpNS-W_eE5BDgGVjh4tAMAmXO32i0HXbfnhg5Ok9Y',
      teaser: 'Explore premium leather jackets, coats, vests, and pants.',
      expanded: 'Explore premium leather jackets, coats, vests, pants, skirts, and dresses for men and women. Handcrafted using LWG-certified sheepskin and cowhide with full OEM customization options.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20APPAREL%20M&F%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEFQUEFSRUwgTSZGIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzYzMTQ5Nzg1LCJleHAiOjE3OTQ2ODU3ODV9.tt3TLBUXmSdJLWYyWJe03p2vz8apnxDWLImKHrzCSto'
    },
    {
      title: 'Bags',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Bags.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0JhZ3MucG5nIiwiaWF0IjoxNzYzMTQ5ODgxLCJleHAiOjE3OTQ2ODU4ODF9.IcLRGtcw78SKwhoNtbIc5SuWEzn13hGa1-MJPOPAW5A',
      teaser: 'Durable and stylish leather bags for travel and daily use.',
      expanded: 'Durable, stylish leather bags built for travel and everyday use. Choose from duffels, suit carriers, and pouches — all customizable with your brand\'s design and finish.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BAGS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJBR1MgQ0FUQUxPR1VFIF8yNS5wZGYiLCJpYXQiOjE3NjMxNDk5MDUsImV4cCI6MTc5NDY4NTkwNX0.-tkjH-Q_c1W4AQ6MNnDhFk_rQoJp_BKUUIJqxNrbOaU'
    },
    {
      title: 'Wallets',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20WALLETS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIFdBTExFVFMgQ0FUQUxPR1VFIF8yNS5wZGYiLCJpYXQiOjE3NjMxNDk5MzEsImV4cCI6MTc5NDY4NTkzMX0.spHP8BLctbIcZ9qvViin7AdZ1r8VGYUG-oeSJr6AxkQ',
      teaser: 'Refined leather wallets for both men and women.',
      expanded: 'Elegant men\'s and women\'s leather wallets — bi-folds, tri-folds, and card holders. Premium materials and full branding options for private label clients.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20WALLETS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIFdBTExFVFMgQ0FUQUxPR1VFIF8yNS5wZGYiLCJpYXQiOjE3NjMxNDk5NTEsImV4cCI6MTc5NDY4NTk1MX0.ShVey-4_UC4zbLl3AWqnGG7Se_kYS2YUrZkLkuQcgD8'
    },
    {
      title: 'Gloves',
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Gloves.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0dsb3Zlcy5wbmciLCJpYXQiOjE3NjMxNDk5NjksImV4cCI6MTc5NDY4NTk2OX0.Pf56wbFVVkSGJw71YiWf8HnfMjMU8xGb_r6M7LLA8J8',
      teaser: 'Luxury leather gloves for comfort and style.',
      expanded: 'Soft, warm, and stylish leather gloves for men and women. Ideal for winterwear, driving, or fashion brands. Fully customizable in material, lining, and fit.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20GLOVES%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEdMT1ZFUyBDQVRBTE9HVUUgXzI1LnBkZiIsImlhdCI6MTc2MzE0OTk5MSwiZXhwIjoxNzk0Njg1OTkxfQ.Qo9iPkNak_MqAi0WQ93jAzK5V5XbF6eKrT_BRk5Diw4'
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
      image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BELTS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJFTFRTIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzYzMTUwMDA3LCJleHAiOjE3OTQ2ODYwMDd9.gRJ5lypryTKQeAVakXBPqvY1GfyFiRtv31zPNHLq2u8',
      teaser: 'Versatile leather belts crafted for every wardrobe.',
      expanded: 'Classic and modern leather belts for men and women. Made from full-grain hides with custom buckles, stitching, and branding.',
      catalogUrl: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/D.E%20-%20BELTS%20CATALOGUE%20_25.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWM5NGE5OS1jMTU1LTRhYWEtYTJmNy00MzY4ZjA5ODVmYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0QuRSAtIEJFTFRTIENBVEFMT0dVRSBfMjUucGRmIiwiaWF0IjoxNzYzMTUwMDI3LCJleHAiOjE3OTQ2ODYwMjd9.Jw9EVI4fEuzIcPy7uuK_TYDCmUlJzu_U3JOY5x9UZLA'
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