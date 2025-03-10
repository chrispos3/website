import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  
  const projectsData = [
    {
      id: 1,
      title: "TODO",
      category: "web",
      description: "TODO",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">My Projects</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <motion.div
                className="text-center max-w-3xl mx-auto px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">My Projects</h1>
                <p className="text-lg sm:text-xl">
                  A collection of my work and projects, showcasing my skills and experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filter */}
      <section className="py-4 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">Filter Projects</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <motion.div 
                className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  onClick={() => setFilter("all")}
                  className={`win98-button text-sm sm:text-base ${
                    filter === "all" ? "bg-[#000080] text-white" : ""
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("web")}
                  className={`win98-button text-sm sm:text-base ${
                    filter === "web" ? "bg-[#000080] text-white" : ""
                  }`}
                >
                  Web
                </button>
                <button
                  onClick={() => setFilter("app")}
                  className={`win98-button text-sm sm:text-base ${
                    filter === "app" ? "bg-[#000080] text-white" : ""
                  }`}
                >
                  App
                </button>
                <button
                  onClick={() => setFilter("design")}
                  className={`win98-button text-sm sm:text-base ${
                    filter === "design" ? "bg-[#000080] text-white" : ""
                  }`}
                >
                  Design
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-8 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="win98-window group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="win98-titlebar">
                  <span className="win98-titlebar-text text-sm sm:text-base">{project.title}</span>
                  <div className="win98-titlebar-buttons">
                    <button className="win98-titlebar-button">_</button>
                    <button className="win98-titlebar-button">□</button>
                    <button className="win98-titlebar-button">×</button>
                  </div>
                </div>
                <div className="win98-content p-3 sm:p-4">
                  <div className="aspect-video relative overflow-hidden mb-3 sm:mb-4">
                    <div className="absolute inset-0 image-placeholder"></div>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                    <span className="win98-button text-xs">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="win98-button inline-block text-sm sm:text-base"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-8 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">Have a Project in Mind?</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <motion.div 
                className="max-w-3xl mx-auto text-center px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">Have a Project in Mind?</h2>
                <p className="text-sm sm:text-base mb-6 sm:mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
                <a
                  href="/contact"
                  className="win98-button text-sm sm:text-base"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
