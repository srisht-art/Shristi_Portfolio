import React from 'react';
import { Code2, Cloud, Palette, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate B.Tech Computer Science Engineering student with a specialization in Cloud Computing 
          and Machine Learning, combined with 1-2 years of hands-on UI/UX design experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              My journey in design began with a curiosity about how technology can be made more human-centered. 
              Through my academic pursuits in CSE and practical experience in UI/UX design, I've developed 
              a unique perspective that combines technical expertise with creative problem-solving.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I have a curious mind that constantly explores new design trends, tools, and human–computer 
              interaction patterns, and I'm an absolute learner who thrives on turning feedback into refined, 
              impactful designs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">What Drives Me</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-200 dark:bg-purple-700 p-2 rounded-lg">
                  <Palette size={20} className="text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Creative Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Finding innovative solutions through design thinking</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-200 dark:bg-blue-700 p-2 rounded-lg">
                  <Users size={20} className="text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">User-Centered Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Putting user needs at the heart of every design</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-200 dark:bg-green-700 p-2 rounded-lg">
                  <Code2 size={20} className="text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Technical Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Bridging design and development seamlessly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-pink-200 dark:bg-pink-700 p-2 rounded-lg">
                  <Cloud size={20} className="text-pink-600 dark:text-pink-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Future-Forward Thinking</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Embracing emerging technologies and trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Experience</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">1-2 Years in UI/UX</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Education</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">B.Tech CSE</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Specialization</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Cloud Computing & ML</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Projects Completed</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">15+</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Internships</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">4 Companies</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Design Philosophy</h3>
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
              "Good design is not just what looks good. It's what works well, feels intuitive, 
              and creates a meaningful connection between the user and the product."
            </blockquote>
            <p className="text-right text-purple-600 dark:text-purple-400 font-medium mt-4">- My Design Mantra</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;