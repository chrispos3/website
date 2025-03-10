import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import FormalChris from "../components/ui/formalChris";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">Welcome to Chris's Portfolio</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="win98-button inline-block mb-4">
                      Welcome to my portfolio
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Hi, I'm <span className="text-[#000080]">Chris Posivak</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    A sophomore Computer Science and Engineering major at Lehigh University
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link 
                      to="/projects"
                      className="win98-button"
                    >
                      View Projects
                    </Link>
                    <Link 
                      to="/contact"
                      className="win98-button"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative aspect-square max-w-md mx-auto overflow-hidden bg-[#c0c0c0] p-4">
                    <FormalChris />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">Featured Projects</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                <p className="max-w-2xl mx-auto">
                  Here's a selection of my recent work. Each project represents my skills, problem-solving abilities, and attention to detail.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    className="win98-window group relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="win98-titlebar">
                      <span className="win98-titlebar-text">Project {index + 1}</span>
                      <div className="win98-titlebar-buttons">
                        <button className="win98-titlebar-button">_</button>
                        <button className="win98-titlebar-button">□</button>
                        <button className="win98-titlebar-button">×</button>
                      </div>
                    </div>
                    <div className="win98-content">
                      <div className="aspect-video relative overflow-hidden mb-4">
                        <div className="absolute inset-0 image-placeholder"></div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Project Title</h3>
                      <p className="text-sm mb-4">
                        This is a placeholder for your project description. Replace with actual details about your project.
                      </p>
                      <Link
                        to="/projects"
                        className="win98-button inline-block"
                      >
                        View Project
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    to="/projects"
                    className="win98-button"
                  >
                    View All Projects
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">About Me</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                  className="flex-1 order-2 md:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
                  <p className="mb-6">
                    DO LATER
                  </p>
                  <Link
                    to="/about"
                    className="win98-button"
                  >
                    Read More
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="flex-1 order-1 md:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-square max-w-md mx-auto overflow-hidden">
                    <div className="absolute inset-0 image-placeholder"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">Contact Me</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Feel Free to Contact Me!</h2>
                <p className="mb-8">
                  I'm always open to new connections and new opportunities. 
                </p>
                <Link
                  to="/contact"
                  className="win98-button"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
