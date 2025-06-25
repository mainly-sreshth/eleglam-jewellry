import React from 'react';
import { Award, Users, Gem, Heart, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '50k+', label: 'Happy Customers' },
    { icon: Gem, number: '25+', label: 'Years Experience' },
    { icon: Award, number: '100+', label: 'Design Awards' },
    { icon: Heart, number: '99%', label: 'Customer Satisfaction' }
  ];

  const features = [
    {
      icon: Gem,
      title: 'Premium Materials',
      description: 'We use only the finest diamonds, precious metals, and gemstones sourced ethically from trusted suppliers worldwide.',
    },
    {
      icon: Clock,
      title: 'Timeless Craftsmanship',
      description: 'Each piece is meticulously handcrafted by master artisans with decades of experience in fine jewelry making.',
    },
    {
      icon: Shield,
      title: 'Lifetime Guarantee',
      description: 'Every piece comes with our comprehensive lifetime warranty, ensuring your investment is protected forever.',
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Heritage of Excellence
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been creating extraordinary jewelry that celebrates life's most precious moments with unparalleled beauty and craftsmanship.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1454660/pexels-photo-1454660.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Master craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-amber-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">25+</div>
                <div className="text-sm text-amber-800 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">
              Crafting Dreams Into Reality
            </h3>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              Founded by master jeweler Alessandro Rossi in 1998, LuxeGems has grown from a small family workshop into one of the world's most respected fine jewelry houses. Our commitment to excellence and innovation has earned us recognition from discerning customers worldwide.
            </p>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              Every piece in our collection tells a story of passion, precision, and artistry. From the selection of the finest materials to the final polish, we ensure that each creation meets our exacting standards of beauty and quality.
            </p>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-amber-900 mb-2">{stat.number}</div>
              <div className="text-amber-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="text-amber-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-4">{feature.title}</h4>
              <p className="text-amber-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;