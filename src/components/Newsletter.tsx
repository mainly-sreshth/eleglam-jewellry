import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
          <Mail className="text-white" size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Connected with Luxury
        </h2>
        
        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Be the first to discover our latest collections, exclusive offers, and jewelry care tips. Join our community of luxury jewelry enthusiasts.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-3 text-white">
            <CheckCircle size={24} className="text-green-300" />
            <span className="text-xl font-semibold">Thank you for subscribing!</span>
          </div>
        )}

        <p className="text-amber-200 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;