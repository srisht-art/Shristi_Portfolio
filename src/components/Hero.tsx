import React from 'react';
import { ArrowDown, Sparkles, Play, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-700 px-6 py-3 rounded-full text-purple-700 dark:text-purple-300 font-medium animate-fade-in shadow-lg">
            <Sparkles size={16} />
            UI/UX Designer & Cloud Computing Enthusiast
          </div>
        </div>
        
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            Shristi
          </span>
          <br />
          <span className="text-gray-900 dark:text-white drop-shadow-sm">Khanna</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
          B.Tech CSE student passionate about crafting intuitive user experiences 
          and innovative design solutions that bridge technology and human needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/25 font-semibold text-lg flex items-center gap-3"
          >
            <Play size={20} className="group-hover:translate-x-1 transition-transform" />
            Explore My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-600 hover:border-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl font-semibold text-lg flex items-center gap-3"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Get In Touch
          </button>
        </div>
        
        <div className="animate-bounce cursor-pointer">
          <ArrowDown 
            size={28} 
            className="text-gray-500 dark:text-gray-400 mx-auto hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;