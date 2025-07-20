'use client';

import { Phone, MessageCircle, Facebook, Youtube, Globe, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Floating Leaves Animation */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <Leaf 
                className="text-green-400 transform rotate-12" 
                size={16 + Math.random() * 24} 
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Business Profile Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full border border-white/20">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100">
            <Image
              src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/518337833_122096747096949620_4430782645213346196_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=67mKxk4AoIAQ7kNvwFnFFOQ&_nc_oc=Adk9B3LUlEkZPJnGG1xiCMMO23d4jLqD0cgtR7FzsAN2P_Q-vnq9cudW64xTtq1z2Is&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=lr1nK25-MMsFxTwNx5K5cA&oh=00_AfT2hcqssPMjewtNvPA9ROOg8u5Lm-CtM_gUec5LESoUuQ&oe=688252DE"
              alt="Pata Pushpo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Business Name */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          <span className="text-green-600">Pata</span> Pushpo
        </h1>
        <p className="text-center text-gray-600 mb-8">Plant Nursery & Garden Solutions</p>
        
        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <a
            href="tel:01736693033"
            className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <Phone className="text-green-600" size={20} />
            <span className="text-gray-800 font-medium">01736-693033</span>
          </a>
          
          <a
            href="https://wa.me/8801736693033"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <MessageCircle className="text-green-600" size={20} />
            <span className="text-gray-800 font-medium">Chat Now</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="space-y-3">
          <a
            href="https://facebook.com/patapushpo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Facebook className="text-blue-600" size={20} />
            <span className="text-gray-700">Pata Pushpo on Facebook</span>
          </a>
          
          <a
            href="https://youtube.com/@PataPushpo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Youtube className="text-red-600" size={20} />
            <span className="text-gray-700">@PataPushpo</span>
          </a>
          
          <a
            href="https://patapushpo.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Globe className="text-green-600" size={20} />
            <span className="text-gray-700">patapushpo.blogspot.com</span>
          </a>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="absolute bottom-4 text-center text-gray-500 text-sm z-10">
        © 2025 Pata Pushpo. All rights reserved. Made by <a href="https://github.com/mehedihjim" className="animate-pulse">MH Jim</a>
      </div>
    </main>
  );
}