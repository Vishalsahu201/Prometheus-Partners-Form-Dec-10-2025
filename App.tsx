
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketOpportunity from './components/MarketOpportunity';
import Team from './components/Team';
import AIChatbot from './components/AIChatbot';
import DemoPortal from './components/DemoPortal';
import { FEATURES } from './constants';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [showDemo, setShowDemo] = React.useState(false);

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar onOpenDemo={() => setShowDemo(true)} />
      
      <main>
        <Hero onOpenDemo={() => setShowDemo(true)} />

        {/* Vision Section */}
        <section id="vision" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://picsum.photos/800/600?vision=1" 
                  alt="Zarkobit Vision" 
                  className="rounded-3xl relative z-10 border border-white/10 glass hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div>
                <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Our Vision</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Disrupting the $600B <br />Grooming Economy</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  ZARKOBIT isn't just an app; it's a global ecosystem. We empower local professionals 
                  with enterprise-grade tools while giving customers unparalleled access to world-class 
                  grooming services.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {FEATURES.map((feature, i) => (
                    <div key={i} className="flex gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="shrink-0 p-2 bg-blue-600/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="text-white font-bold mb-1">{feature.title}</div>
                        <div className="text-gray-500 text-sm leading-snug">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarketOpportunity />

        {/* Revenue Model Section */}
        <section id="revenue" className="py-24 bg-blue-600/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Revenue Model</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Monetizing Excellence</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Commission', price: '15%', desc: 'Platform fee per successful booking', icon: '💰' },
                { title: 'SaaS Pro', price: '$49', desc: 'Monthly subscription for advanced CRM tools', icon: '🚀' },
                { title: 'Ads & Features', price: 'Varies', desc: 'Featured listings for salon visibility', icon: '✨' },
              ].map((tier, i) => (
                <div key={i} className="glass p-10 rounded-3xl border-white/10 text-center hover:border-blue-500 transition-all hover:-translate-y-2">
                  <div className="text-5xl mb-6">{tier.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{tier.title}</h4>
                  <div className="text-4xl font-black text-blue-500 mb-4">{tier.price}</div>
                  <p className="text-gray-400 mb-8">{tier.desc}</p>
                  <button className="w-full py-4 glass border-white/20 hover:bg-white/5 text-white font-bold rounded-2xl transition-all">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team />

        {/* Contact / Footer */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="bg-blue-600 p-2 rounded-lg text-white">✂️</div>
                  <span className="text-2xl font-black text-white">ZARKOBIT SALON</span>
                </div>
                <p className="text-gray-400 mb-10 max-w-md">
                  Empowering the global grooming industry with technology that connects, scales, and delivers excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Phone className="w-5 h-5 text-blue-500" /> +91 9236651274
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Mail className="w-5 h-5 text-blue-500" /> infoprometheusweb@gmail.com
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <MapPin className="w-5 h-5 text-blue-500" /> Global Headquarters: Uttar Pradesh, India
                  </div>
                </div>
              </div>
              <div className="glass p-10 rounded-3xl border-white/10">
                <h4 className="text-2xl font-bold text-white mb-8">Investor Inquiry</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none w-full" />
                    <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none w-full" />
                  </div>
                  <input type="text" placeholder="Organization" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none w-full" />
                  <textarea placeholder="Message" rows={4} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none w-full resize-none"></textarea>
                  <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/10">Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} ZARKOBIT SALON Global Marketplace. All rights reserved.
        </p>
      </footer>

      {showDemo && <DemoPortal onClose={() => setShowDemo(false)} />}
      
      <AIChatbot />
    </div>
  );
}

export default App;
