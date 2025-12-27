
import React from 'react';
import { Menu, X, Scissors } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Scissors className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              ZARKOBIT <span className="text-blue-500">SALON</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#vision" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Vision</a>
              <a href="#market" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Market</a>
              <a href="#revenue" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Revenue</a>
              <a href="#team" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Team</a>
              <button 
                onClick={onOpenDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                Launch Demo
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-in slide-in-from-top-4 duration-300">
          <a href="#vision" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium">Vision</a>
          <a href="#market" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium">Market</a>
          <a href="#revenue" className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium">Revenue</a>
          <button 
            onClick={onOpenDemo}
            className="w-full mt-4 bg-blue-600 text-white px-6 py-4 rounded-xl text-base font-bold"
          >
            Launch Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
