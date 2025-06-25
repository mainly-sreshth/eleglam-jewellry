import React, { useEffect, useState } from 'react';
import { ChevronDown, Star, Award, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Timeless Elegance",
      subtitle: "Discover Our Exquisite Collection",
      description: "Handcrafted jewelry that tells your unique story with unparalleled beauty and sophistication.",
      image: "https://images.pexels.com/photos/1020437/pexels-photo-1020437.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Luxury Redefined",
      subtitle: "Premium Diamonds & Gemstones",
      description: "Each piece is meticulously crafted with the finest materials and exceptional attention to detail.",
      image: "https://images.pexels.com/photos/1446903/pexels-photo-1446903.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Artisan Craftsmanship",
      subtitle: "Heritage of Excellence",
      description: "Three generations of master jewelers bringing you pieces that transcend time and trends.",
      image: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCollections = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[6000ms] ease-out scale-105 hover:scale-110"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl min-h-[500px] flex flex-col justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute transform transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/90 text-sm font-medium">Rated 5.0 by 1000+ customers</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-xl sm:text-2xl text-amber-200 font-light mb-6 leading-relaxed">
                  {slide.subtitle}
                </p>
                
                <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToCollections}
                    className="group bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
                  >
                    <span className="flex items-center justify-center">
                      Explore Collection
                      <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-amber-900 hover:border-amber-600">
                    <span className="flex items-center justify-center">
                      Custom Design
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 text-white">
              <Award className="text-amber-400" size={24} />
              <div>
                <p className="font-semibold">Award Winning</p>
                <p className="text-sm opacity-90">Design Excellence</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Shield className="text-amber-400" size={24} />
              <div>
                <p className="font-semibold">Lifetime Warranty</p>
                <p className="text-sm opacity-90">Quality Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Star className="text-amber-400" size={24} />
              <div>
                <p className="font-semibold">Premium Materials</p>
                <p className="text-sm opacity-90">Ethically Sourced</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 right-8 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-400 w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;