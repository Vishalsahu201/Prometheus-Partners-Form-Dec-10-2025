
import React from 'react';
import { ChevronRight, Play, Star, Users, Globe } from 'lucide-react';

const Hero: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/20 text-blue-400 text-sm font-semibold mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now Live in 12 Countries
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
            THE FUTURE OF <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">GROOMING IS HERE</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            ZARKOBIT is the world's first truly global, AI-powered on-demand salon marketplace. 
            Book top-tier grooming services instantly, anywhere on Earth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 blue-glow"
            >
              Get Started <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass border-white/10 hover:bg-white/5 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
              <Play className="w-5 h-5" /> Watch Pitch
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Salons', value: '50,000+', icon: <Users className="w-5 h-5 text-blue-400" /> },
              { label: 'Active Users', value: '1.2M+', icon: <Star className="w-5 h-5 text-blue-400" /> },
              { label: 'Countries', value: '12+', icon: <Globe className="w-5 h-5 text-blue-400" /> },
              { label: 'Annual Revenue', value: '$24M', icon: <ChevronRight className="w-5 h-5 text-blue-400" /> },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-left border-white/10 hover:border-blue-500/50 transition-colors group">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
