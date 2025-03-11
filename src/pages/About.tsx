import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import userCardIcon from "../components/assets/windows_icons/user_card.ico";
import toolsGearIcon from "../components/assets/windows_icons/tools_gear.ico";
import userComputerIcon from "../components/assets/windows_icons/user_computer.ico";
import userCalendarIcon from "../components/assets/windows_icons/user_calendar.ico";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: "TODO", level: 90 },
    { name: "TODO", level: 85 },
    { name: "TODO", level: 80 },
    { name: "TODO", level: 75 },
    { name: "TODO", level: 70 },
    { name: "TODO", level: 65 },
  ];

  const experiences = [
    {
      position: "TODO",
      company: "TODO",
      duration: "TODO",
      description: "TODO",
    },
    {
      position: "TODO",
      company: "TODO",
      duration: "TODO",
      description: "TODO",
    },
    {
      position: "TODO",
      company: "TODO",
      duration: "TODO",
      description: "TODO",
    },
  ];

  const education = [
    {
      degree: "Computer Science and Engineering",
      institution: "Lehigh University",
      duration: "2023 - 2027",
      description: "TODO",
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={userCardIcon} alt="About" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">About Me</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content p-8">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">About Me</h1>
                <p className="text-xl">
                  Get to know more about me, my background, and what I do.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={userCardIcon} alt="Who I Am" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">Who I Am</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content p-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-square max-w-md mx-auto overflow-hidden">
                    <div className="absolute inset-0 image-placeholder"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-1 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight">Who I Am</h2>
                  <p>TODO</p>
                  <p>TODO</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/chris-posivak-954a96298" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="win98-button flex items-center"
                    >
                      <img src={userCardIcon} alt="" className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="win98-button flex items-center"
                    >
                      <img src={userComputerIcon} alt="" className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={toolsGearIcon} alt="Skills" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">Skills</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content p-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Skills</h2>
                <p className="max-w-2xl mx-auto">
                  TODO
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="win98-window"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="win98-titlebar flex items-center">
                      <div className="flex-1 flex items-center">
                        <img src={toolsGearIcon} alt="" className="w-4 h-4 mr-2" />
                        <span className="win98-titlebar-text">{skill.name}</span>
                      </div>
                      <div className="win98-titlebar-buttons">
                        <button className="win98-titlebar-button">_</button>
                        <button className="win98-titlebar-button">□</button>
                        <button className="win98-titlebar-button">×</button>
                      </div>
                    </div>
                    <div className="win98-content p-4">
                      <div className="w-full bg-[#c0c0c0] border-2 border-[#808080] border-b-[#ffffff] border-r-[#ffffff]">
                        <div 
                          className="h-2 bg-[#000080]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={userComputerIcon} alt="Experience" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">Work Experience</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content p-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
                <p className="max-w-2xl mx-auto">
                  My professional journey and roles I've held in different organizations.
                </p>
              </motion.div>
              
              <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="win98-window"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="win98-titlebar flex items-center">
                      <div className="flex-1 flex items-center">
                        <img src={userComputerIcon} alt="" className="w-4 h-4 mr-2" />
                        <span className="win98-titlebar-text">{exp.position}</span>
                      </div>
                      <div className="win98-titlebar-buttons">
                        <button className="win98-titlebar-button">_</button>
                        <button className="win98-titlebar-button">□</button>
                        <button className="win98-titlebar-button">×</button>
                      </div>
                    </div>
                    <div className="win98-content p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={userCalendarIcon} alt="Education" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">Education</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content p-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
                <p className="max-w-2xl mx-auto">
                  My academic background and qualifications.
                </p>
              </motion.div>
              
              <div className="max-w-3xl mx-auto space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="win98-window"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="win98-titlebar flex items-center">
                      <div className="flex-1 flex items-center">
                        <img src={userCalendarIcon} alt="" className="w-4 h-4 mr-2" />
                        <span className="win98-titlebar-text">{edu.degree}</span>
                      </div>
                      <div className="win98-titlebar-buttons">
                        <button className="win98-titlebar-button">_</button>
                        <button className="win98-titlebar-button">□</button>
                        <button className="win98-titlebar-button">×</button>
                      </div>
                    </div>
                    <div className="win98-content p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <p>{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
