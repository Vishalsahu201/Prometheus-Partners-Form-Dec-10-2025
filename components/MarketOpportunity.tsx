
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { REVENUE_STATS } from '../constants';

const MarketOpportunity: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Market Potential</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">A $600 Billion <br />Global Opportunity</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The salon and personal grooming industry is highly fragmented. ZARKOBIT provides the digital infrastructure 
              to unify this market, offering a seamless booking experience for millions of professionals.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'TAM', value: '$612B', desc: 'Total Addressable Market' },
                { title: 'CAGR', value: '7.8%', desc: 'Projected annual growth' },
                { title: 'Digital Penetration', value: '<15%', desc: 'Current online booking rate' },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-xl glass border-white/5">
                  <div className="text-3xl font-black text-blue-500 w-24">{m.value}</div>
                  <div>
                    <div className="text-white font-bold">{m.title}</div>
                    <div className="text-gray-500 text-sm">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full glass p-8 rounded-3xl border-white/10">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Revenue Projection (Q1 - Q4)
            </h4>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_STATS}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
