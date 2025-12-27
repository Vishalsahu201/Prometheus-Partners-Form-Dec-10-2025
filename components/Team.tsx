
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">The Innovators</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Built by Visionaries</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative overflow-hidden rounded-3xl aspect-square mb-6 glass border-white/10 transition-all group-hover:border-blue-500/50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <Linkedin className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer" />
                    <Twitter className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer" />
                    <Github className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-blue-500 font-bold text-sm mb-3">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
