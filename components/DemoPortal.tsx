
import React from 'react';
import { X, Search, MapPin, Calendar, Clock, Star, CheckCircle, Bell, LayoutDashboard, Wallet, Settings, Shield } from 'lucide-react';
import { UserRole } from '../types';

interface DemoPortalProps {
  onClose: () => void;
}

const DemoPortal: React.FC<DemoPortalProps> = ({ onClose }) => {
  const [role, setRole] = React.useState<UserRole>(UserRole.CUSTOMER);
  const [step, setStep] = React.useState(1);

  const mockSalons = [
    { name: "Luxury Cuts NYC", rating: 4.9, price: "$45", dist: "0.8 miles", img: "https://picsum.photos/400/300?salon=1" },
    { name: "The Beard Hub", rating: 4.7, price: "$35", dist: "1.2 miles", img: "https://picsum.photos/400/300?salon=2" },
    { name: "Glow & Flow", rating: 4.8, price: "$60", dist: "2.5 miles", img: "https://picsum.photos/400/300?salon=3" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl h-[90vh] glass rounded-3xl border-white/10 overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-white">Interactive Product Demo</h2>
            <p className="text-gray-500 text-sm">Experience the ZARKOBIT ecosystem</p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-xl">
            {[UserRole.CUSTOMER, UserRole.SALON_OWNER, UserRole.ADMIN].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${role === r ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                {r.replace('_', ' ')}
              </button>
            ))}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Demo Content Area */}
        <div className="flex-1 overflow-hidden flex">
          {/* Sidebar for certain roles */}
          {role !== UserRole.CUSTOMER && (
            <div className="w-64 border-r border-white/10 p-6 hidden md:block space-y-6">
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 bg-blue-600 text-white rounded-xl text-sm font-bold">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-white/5 rounded-xl text-sm font-bold transition-colors">
                  <Wallet className="w-4 h-4" /> Earnings
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-white/5 rounded-xl text-sm font-bold transition-colors">
                  <Bell className="w-4 h-4" /> Bookings
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-white/5 rounded-xl text-sm font-bold transition-colors">
                  <Settings className="w-4 h-4" /> Profile
                </button>
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4">Quick Stats</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-white">$1,240.00</div>
                    <div className="text-xs text-gray-500">Weekly Payout</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">4.9/5.0</div>
                    <div className="text-xs text-gray-500">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Display */}
          <div className="flex-1 overflow-y-auto p-6 bg-black/40">
            {role === UserRole.CUSTOMER && (
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Search for salon, hair cuts, spa..." 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500 transition-all">
                    <MapPin className="text-blue-500 w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockSalons.map((salon, i) => (
                    <div key={i} className="group glass rounded-2xl border-white/10 overflow-hidden hover:border-blue-500/50 transition-all">
                      <div className="relative h-48">
                        <img src={salon.img} alt={salon.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {salon.rating}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-white">{salon.name}</h4>
                          <span className="text-blue-500 font-bold">{salon.price}</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {salon.dist} • Open until 9:00 PM
                        </p>
                        <button className="w-full py-3 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white border border-blue-500/20 rounded-xl font-bold transition-all">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {role === UserRole.SALON_OWNER && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Active Bookings', value: '12', color: 'text-blue-500' },
                    { label: 'Today Revenue', value: '$450', color: 'text-green-500' },
                    { label: 'New Requests', value: '3', color: 'text-orange-500' },
                  ].map((stat, i) => (
                    <div key={i} className="glass p-6 rounded-2xl border-white/10">
                      <div className="text-gray-500 text-sm font-medium mb-1">{stat.label}</div>
                      <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                    Pending Requests
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "John Smith", service: "Beard Trim + Haircut", time: "11:30 AM", date: "Today" },
                      { name: "Sarah Miller", service: "Deep Conditioning", time: "02:15 PM", date: "Today" },
                      { name: "David Wilson", service: "Men's Styling", time: "10:00 AM", date: "Tomorrow" },
                    ].map((req, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-5 glass border-white/5 rounded-2xl gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">
                            {req.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-white font-bold">{req.name}</div>
                            <div className="text-gray-500 text-sm">{req.service}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <div className="text-white font-bold flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-blue-500" /> {req.date}
                            </div>
                            <div className="text-gray-500 text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {req.time}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl transition-all font-bold text-sm">Decline</button>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-bold text-sm">Accept</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {role === UserRole.ADMIN && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-black text-white">Global Control Center</h4>
                  <div className="flex items-center gap-2 text-green-500 text-sm font-bold bg-green-500/10 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" /> Systems Operational
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                   {[
                    { label: 'Total Commissions', value: '$84,200', desc: '+12% this month' },
                    { label: 'Verified Salons', value: '1,248', desc: '42 pending approval' },
                    { label: 'Active Disputes', value: '0', desc: 'Perfect resolution rate' },
                    { label: 'Server Latency', value: '18ms', desc: 'Optimal performance' },
                   ].map((st, i) => (
                     <div key={i} className="glass p-5 rounded-2xl border-white/10">
                       <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">{st.label}</div>
                       <div className="text-2xl font-black text-white">{st.value}</div>
                       <div className="text-[10px] text-gray-400 mt-1">{st.desc}</div>
                     </div>
                   ))}
                </div>

                <div className="glass p-8 rounded-3xl border-white/10 text-center py-20">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h5 className="text-xl font-bold text-white mb-2">Platform Integrity Secure</h5>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Admin dashboard is fully integrated with Stripe Connect and KYC verification protocols.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Simulation Mode Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPortal;
