import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import Gallery from './Gallery';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Gallery images for the projects
  const projectImages = [
    {
      src: "/ChatGPT Image Aug 17, 2025, 09_01_54 AM.png",
      alt: "Perfume Web Page Wireframe",
      caption: "Perfume E-commerce Wireframe",
      category: "Web Design"
    },
    {
      src: "/Screenshot 2025-08-16 124219.png",
      alt: "Perfume Web Page Final Design",
      caption: "Luxury Perfume Website",
      category: "E-commerce"
    },
    {
      src: "/ChatGPT Image Aug 17, 2025, 09_02_42 AM.png",
      alt: "Wallpaper App Wireframes",
      caption: "Wallpaper App User Flow",
      category: "Mobile App"
    },
    {
      src: "/Screenshot 2025-08-16 123109.png",
      alt: "Wallpaper App Final UI",
      caption: "Wallpaper Download App",
      category: "Mobile UI"
    },
    {
      src: "/Screenshot 2025-08-16 121641.png",
      alt: "Mobile App Wireframes",
      caption: "Mobile App Wireframe Collection",
      category: "Wireframes"
    },
    {
      src: "/ChatGPT Image Aug 17, 2025, 09_04_28 AM.png",
      alt: "Journal App Wireframes",
      caption: "Journal App User Interface",
      category: "Mobile App"
    },
    {
      src: "/Screenshot 2025-08-16 124503.png",
      alt: "UI Design Samples",
      caption: "UI/UX Design Portfolio",
      category: "UI Design"
    },
    {
      src: "/ChatGPT Image Aug 17, 2025, 09_21_30 AM.png",
      alt: "Complete App Flow",
      caption: "Complete Mobile App Flow",
      category: "App Design"
    }
  ];
  const projects = [
    {
      id: 1,
      title: "Wallpaper Download App Design",
      category: "Mobile App Design",
      description: "A fast, aesthetic, and intuitive wallpaper browsing experience",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Mobile UI", "Visual Design", "User Experience"],
      problemStatement: "Existing wallpaper apps are cluttered and slow, making it hard to discover and preview wallpapers. The goal was to design a fast, aesthetic, and intuitive browsing experience.",
      designProcess: [
        "Analyzed competitor apps and UX flaws",
        "Built wireframes for browsing, preview, and download flow",
        "Designed vibrant, minimal high-fidelity UI",
        "Conducted usability tests and refined previews and favorites"
      ],
      keyFeatures: [
        "Organized categories and search filters",
        "Wallpaper preview on lock/home screen",
        "Favorites for saving wallpapers",
        "One-tap download and apply"
      ],
      wireframes: [
        "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400"
      ],
      finalUI: [
        "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=600"
      ],
      results: "40% faster browsing with improved navigation. Preview feature increased user satisfaction. Positive usability feedback: 'clean' and 'easy to use.'"
    },
    {
      id: 2,
      title: "Perfume Web Page Design",
      category: "E-commerce Web Design",
      description: "Luxurious, visually immersive web page to showcase perfumes and drive sales",
      image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Luxury Brand", "Web Design"],
      problemStatement: "The client needed a luxurious, visually immersive web page to showcase perfumes and drive sales.",
      designProcess: [
        "Studied luxury e-commerce design patterns",
        "Wireframed core sections: hero, collections, scent profiles",
        "Applied elegant typography, high-quality visuals, and refined layouts",
        "Tested navigation clarity and brand storytelling"
      ],
      keyFeatures: [
        "Hero banner with brand storytelling",
        "High-quality product images",
        "Scent descriptions with emotional appeal",
        "Responsive design across devices"
      ],
      wireframes: [
        "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      finalUI: [
        "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      results: "35% increase in time spent on site during testing. Improved navigation boosted browsing flow. Well-received by the client for brand alignment."
    },
    {
      id: 3,
      title: "Bus App & Payment Gateway Design",
      category: "Mobile App Design",
      description: "Seamless bus booking app with integrated payment solutions",
      image: "https://images.pexels.com/photos/1119972/pexels-photo-1119972.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Transportation", "Payment Integration", "Mobile UX"],
      problemStatement: "Commuters face issues with slow booking, lack of live updates, and limited payments. The goal was to create a seamless bus booking app with integrated payment solutions.",
      designProcess: [
        "Researched commuter needs and pain points",
        "Sketched booking, seat selection, and payment flows",
        "Created intuitive UI with route highlights and clear CTAs",
        "Tested booking flow and payment steps with users"
      ],
      keyFeatures: [
        "Real-time bus tracking with live maps",
        "Interactive seat reservation",
        "Multiple payment options (cards, UPI, wallets)",
        "Digital QR tickets for contactless boarding"
      ],
      wireframes: [
        "https://images.pexels.com/photos/1119972/pexels-photo-1119972.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      finalUI: [
        "https://images.pexels.com/photos/1119972/pexels-photo-1119972.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      results: "Booking time reduced from 5 minutes to <2 minutes. Payment gateway improved checkout speed by 40%. Testers praised clarity and convenience."
    },
    {
      id: 4,
      title: "Journal App UI/UX",
      category: "Mobile App Design",
      description: "Digital journaling tool with motivation and secure features",
      image: "https://images.pexels.com/photos/6469137/pexels-photo-6469137.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Personal Productivity", "Security", "Wellness"],
      problemStatement: "People struggle to journal regularly due to lack of motivation, inspiration, and secure digital tools.",
      designProcess: [
        "Explored user needs for daily reflection",
        "Designed wireframes for entries, mood tracking, and progress",
        "Developed calming, minimal UI for focus",
        "Tested reminders, cloud sync, and export features"
      ],
      keyFeatures: [
        "Guided daily prompts and quick entry option",
        "Mood tracking with emotion tags",
        "Calendar view and progress visualization",
        "Cloud sync with encryption and biometric login",
        "Export to PDF for sharing"
      ],
      wireframes: [
        "https://images.pexels.com/photos/6469137/pexels-photo-6469137.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      finalUI: [
        "https://images.pexels.com/photos/6469137/pexels-photo-6469137.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      results: "Journaling consistency increased by 60% among testers. Users found patterns via mood tracking. Lightweight UI made journaling a quick 2-minute habit. Positive reviews for simplicity and security."
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Showcasing my design journey through comprehensive case studies that demonstrate 
          problem-solving, user-centered design, and impactful results.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group">
                View Case Study
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Design Gallery */}
      <div className="mt-20">
        <Gallery 
          images={projectImages}
          title="Design Gallery"
          className="animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Projects;