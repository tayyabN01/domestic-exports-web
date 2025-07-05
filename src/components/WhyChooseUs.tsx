
const WhyChooseUs = () => {
  const features = [
    {
      title: 'Handcrafted',
      description: 'Every piece is meticulously crafted by skilled artisans',
      icon: '🔨'
    },
    {
      title: 'Full-Grain Leather',
      description: 'Only the finest quality leather for lasting durability',
      icon: '🐄'
    },
    {
      title: 'Eco-Friendly Tanning',
      description: 'LWG-certified sustainable leather processing',
      icon: '🌿'
    },
    {
      title: 'Global Shipping',
      description: 'Worldwide delivery with reliable logistics partners',
      icon: '🌍'
    }
  ];

  return (
    <section className="py-20 bg-cream leather-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
            Why Choose Domestic Exports?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With decades of expertise and a commitment to excellence, we deliver leather goods that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4 group-hover:text-tan transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
