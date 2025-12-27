
import React from 'react';
import { Shield, Zap, Globe, Users, TrendingUp, DollarSign } from 'lucide-react';

export const COLORS = {
  primary: '#3b82f6', // blue-500
  secondary: '#1e40af', // blue-800
  bg: '#050505',
  card: 'rgba(255, 255, 255, 0.03)',
  border: 'rgba(255, 255, 255, 0.1)'
};

export const TEAM_MEMBERS = [
  {
    name: "GPSN Vishal",
    role: "Founder",
    image: "https://picsum.photos/400/400?random=1",
    bio: "Visionary leader with a passion for global scalability."
  },
  {
    name: "Ramu Goswami",
    role: "CEO & CTO",
    image: "https://picsum.photos/400/400?random=2",
    bio: "Tech mastermind scaling millions of requests daily."
  },
  {
    name: "Anugrah",
    role: "Manager",
    image: "https://picsum.photos/400/400?random=3",
    bio: "Operations expert ensuring peak platform efficiency."
  },
  {
    name: "Rehan",
    role: "Marketing Lead",
    image: "https://picsum.photos/400/400?random=4",
    bio: "Strategic growth expert driving global expansion."
  }
];

export const FEATURES = [
  {
    title: "Global Reach",
    description: "Multilingual, multi-currency support for 190+ countries.",
    icon: <Globe className="w-6 h-6 text-blue-500" />
  },
  {
    title: "AI Recommendations",
    description: "Personalized grooming advice and smart scheduling.",
    icon: <Zap className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Instant Booking",
    description: "Real-time availability and immediate service confirmation.",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Secure Payments",
    description: "Integrated Stripe, PayPal, and local gateways.",
    icon: <Shield className="w-6 h-6 text-blue-500" />
  }
];

export const REVENUE_STATS = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 7500 },
  { month: 'Mar', revenue: 12000 },
  { month: 'Apr', revenue: 18500 },
  { month: 'May', revenue: 26000 },
  { month: 'Jun', revenue: 35000 },
];
