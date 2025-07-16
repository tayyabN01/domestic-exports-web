import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const MaterialSwatches = () => {
  const swatches = [
    {
      name: 'Full-Grain Leather',
      description: 'Natural surface, visible grain, ages with patina',
      tags: ['Top-grade', 'Durable', 'Premium feel'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Top-Grain Leather',
      description: 'Sanded surface, smooth, more uniform texture',
      tags: ['Refined look', 'High-end appeal'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Pull-Up Leather',
      description: 'Waxy finish, color shifts when stretched',
      tags: ['Vintage charm', 'Develops character'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Nubuck Leather',
      description: 'Sanded grain surface, velvety touch',
      tags: ['Soft', 'Elegant', 'Fashion-forward'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Suede (Split Leather)',
      description: 'Inner hide, fuzzy and flexible',
      tags: ['Great for linings', 'Soft accessories'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Vegetable-Tanned Leather',
      description: 'Firm, natural tan tone, darkens over time',
      tags: ['Eco-friendly', 'Traditional tanning'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Chrome-Tanned Leather',
      description: 'Supple, available in bright colors',
      tags: ['Soft touch', 'Fashion-friendly'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Embossed Leather',
      description: 'Patterned surface with pressed texture',
      tags: ['Stylish', 'Bold texture options'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    },
    {
      name: 'Patent Leather',
      description: 'Glossy, mirror-like surface',
      tags: ['Dressy', 'Sleek accessories'],
      image: '/lovable-uploads/f5ddb280-5940-4f8f-8b72-18f306ae59ef.png'
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-4">
            Material Swatches – Feel the Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the textures, finishes, and characteristics of our premium leather collection
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
          {swatches.map((swatch, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={swatch.image}
                  alt={`${swatch.name} texture close-up`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {swatch.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {swatch.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {swatch.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {swatches.map((swatch, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3">
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={swatch.image}
                        alt={`${swatch.name} texture close-up`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        {swatch.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {swatch.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {swatch.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs px-2 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MaterialSwatches;