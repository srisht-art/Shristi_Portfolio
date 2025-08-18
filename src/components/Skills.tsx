import React from 'react';
import { Figma, Palette, Search, Zap, Users, BarChart, Layers, Smartphone, Code, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Figma size={24} />,
      color: "purple",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Sketch", level: 75 },
        { name: "WordPress", level: 85 }
      ]
    },
    {
      title: "Research & Testing",
      icon: <Search size={24} />,
      color: "blue",
      skills: [
        { name: "Usability Testing", level: 88 },
        { name: "A/B Testing", level: 82 },
        { name: "User Feedback Sessions", level: 90 }
      ]
    },
    {
      title: "Design Fundamentals",
      icon: <Palette size={24} />,
      color: "green",
      skills: [
        { name: "Typography", level: 85 },
        { name: "Color Theory", level: 90 },
        { name: "Layout Composition", level: 88 }
      ]
    },
    {
      title: "Development Skills",
      icon: <Code size={24} />,
      color: "pink",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 88 },
        { name: "Basic JavaScript", level: 75 },
        { name: "C", level: 80 },
        { name: "Python", level: 82 }
      ]
    },
    {
      title: "Project Management",
      icon: <Settings size={24} />,
      color: "indigo",
      skills: [
        { name: "Agile", level: 85 },
        { name: "Scrum", level: 80 },
        { name: "Sprint Planning", level: 78 },
        { name: "Stand-Ups", level: 85 },
        { name: "Iterative Design", level: 88 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      pink: "from-pink-500 to-pink-600 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A comprehensive toolkit combining design thinking, technical skills, and user-centered methodologies 
          to create exceptional digital experiences.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${getColorClasses(category.color).split(' ')[2]} ${getColorClasses(category.color).split(' ')[4]}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Overview */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">Design Process Expertise</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-purple-200 dark:bg-purple-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-purple-600 dark:text-purple-300" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Research</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Understanding user needs and market requirements</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-200 dark:bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Layers size={24} className="text-blue-600 dark:text-blue-300" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Ideation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Brainstorming and conceptualizing solutions</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-200 dark:bg-green-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Smartphone size={24} className="text-green-600 dark:text-green-300" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Prototyping</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Creating interactive mockups and wireframes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-pink-200 dark:bg-pink-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart size={24} className="text-pink-600 dark:text-pink-300" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Testing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Validating designs through user feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;