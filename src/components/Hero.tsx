import React from 'react';
import { ArrowDown, Sparkles, Play, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-700 px-6 py-3 rounded-full text-purple-700 dark:text-purple-300 font-medium animate-fade-in shadow-lg">
                <Sparkles size={16} />
                UI/UX Designer & Cloud Computing Enthusiast
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                Shristi
              </span>
              <br />
              <span className="text-gray-900 dark:text-white drop-shadow-sm">Khanna</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light">
              B.Tech CSE student passionate about crafting intuitive user experiences 
              and innovative design solutions that bridge technology and human needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
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
            
            <div className="animate-bounce cursor-pointer flex justify-center lg:justify-start">
              <ArrowDown 
                size={28} 
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={scrollToAbout}
              />
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Profile image container */}
              <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src="/WhatsApp Image 2025-08-19 at 3.52.48 PM.jpeg" 
                  alt="Shristi Khanna - UI/UX Designer"
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] object-cover rounded-xl shadow-lg"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm animate-bounce-subtle">
                  Available for Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
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