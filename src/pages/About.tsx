
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-cream leather-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-charcoal mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Born in the heart of Pakistan's leather capital, Domestic Exports represents generations of craftsmanship and innovation in leather goods manufacturing.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
                Sialkot Heritage
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in the legendary city of Sialkot, Pakistan - renowned worldwide for its leather craftsmanship - Domestic Exports carries forward a family legacy spanning over three decades. Our journey began with a simple vision: to create leather goods that marry traditional techniques with contemporary design.
                </p>
                <p>
                  Today, we stand as a trusted partner to brands worldwide, offering comprehensive OEM and private label services. From concept to completion, we handle every aspect of leather goods manufacturing with meticulous attention to detail.
                </p>
                <p>
                  Our commitment to excellence has earned us partnerships with discerning brands across North America, Europe, and Asia, who trust us to bring their leather goods vision to life.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" 
                alt="Sialkot leather workshop"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece we create follows a time-honored process that ensures exceptional quality and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Selection',
                description: 'Hand-picking premium hides from LWG-certified tanneries',
                icon: '🎯',
                image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Selection.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL1NlbGVjdGlvbi5qcGVnIiwiaWF0IjoxNzUyMDAwODU4LCJleHAiOjE3ODM1MzY4NTh9.wKGkVy4bUndSuib5zwi2X9FQrW5xW0wIH13j6waNO0M'
              },
              {
                title: 'Crafting',
                description: 'Master artisans shape each piece with precision tools',
                icon: '✂️',
                image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Crafting%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0NyYWZ0aW5nICgxKS5qcGVnIiwiaWF0IjoxNzUyMDAxMDk5LCJleHAiOjE3ODM1MzcwOTl9.gWJNvHp4NK6BnWyD6tk_NLw763Dt02rGepM5oZKJ8qA'
              },
              {
                title: 'Stitching',
                description: 'Reinforced seams using industrial-grade threads',
                icon: '🧵',
                image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Crafting.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL0NyYWZ0aW5nLmpwZWciLCJpYXQiOjE3NTIwMDExNDgsImV4cCI6MTc4MzUzNzE0OH0.7X5_zGuDUJ4IrpuNUR26kC5VdYz4J1l9dPMHAOQEqRs'
              },
              {
                title: 'Quality Control',
                description: 'Rigorous inspection ensures perfection in every detail',
                icon: '✅',
                image: 'https://gvhhmrgzfkbcwgplejpa.supabase.co/storage/v1/object/sign/website/Quality.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZjMyM2MyMC00MGU0LTQ5NWYtYjQ4Yi1kMjA5ODBlNjhiYzQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL1F1YWxpdHkuanBlZyIsImlhdCI6MTc1MjAwMzQ2OSwiZXhwIjoxNzgzNTM5NDY5fQ.SoMdoboE61cw2PeVA6ScrgaNMQfSZ88Zgx-GBmCHYAk'
              }
            ].map((step, index) => (
              <div 
                key={step.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-6">
              Sustainability & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in responsible manufacturing that respects both people and planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'LWG Sourcing',
                description: 'All our leather comes from Leather Working Group certified tanneries, ensuring responsible environmental practices.',
                icon: '🌱'
              },
              {
                title: 'Ethical Labor',
                description: 'Fair wages, safe working conditions, and professional development opportunities for all our craftsmen.',
                icon: '🤝'
              },
              {
                title: 'Low Waste',
                description: 'Zero-waste production methods and creative use of leather remnants in smaller accessories.',
                icon: '♻️'
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-tan rounded-full flex items-center justify-center text-4xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4 group-hover:text-tan transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
