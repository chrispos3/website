import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import userCardIcon from "../components/assets/windows_icons/user_card.ico";
import notepad from "../components/assets/windows_icons/notepad.ico";
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
    { name: "Java", level: 90 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "CSS", level: 60 },
    { name: "HTML", level: 60 },
    { name: "JavaScript", level: 65 },
  ];

  const experiences = [
    {
      position: "UI/UX Design Intern",
      company: "RevSend",
      duration: "January 2025 - Present",
      description: "TODO",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science",
      institution: "Lehigh University",
      duration: "2023 - 2027",
      description: "Computer Science and Engineering",
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
              <div className="flex">
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                </button>
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
                <img src={notepad} alt="Who I Am" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">WhoIAm.txt - Notepad</span>
              </div>
              <div className="flex">
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                </button>
              </div>
            </div>
            <div className="win98-menubar flex text-sm border-b border-gray-400 bg-[#c0c0c0] px-1 py-0.5">
              <div className="mr-4">
                <span className="underline">F</span>ile
              </div>
              <div className="mr-4">
                <span className="underline">E</span>dit
              </div>
              <div className="mr-4">
                <span className="underline">S</span>earch
              </div>
              <div className="mr-4">
                <span className="underline">H</span>elp
              </div>
            </div>
            <div className="win98-content p-0">
              <div className="bg-white p-4 font-mono text-sm h-[700px] overflow-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <pre className="whitespace-pre-wrap">
{`PERSONAL PROFILE
===============

I am a passionate software developer and computer science student with a keen interest in creating innovative solutions and learning new technologies. My journey in technology is driven by curiosity and a desire to make a positive impact through code.

BACKGROUND
---------
* Second-year Computer Science and Engineering student at Lehigh University
* Focus on software development and cybersecurity
* Passionate about creating engaging web experiences
* Committed to continuous learning and professional growth

INTERESTS & SPECIALIZATIONS
-------------------------
* Web Development
* Software Engineering
* Cybersecurity
* UI/UX Design
* Mobile App Development

CURRENT FOCUS
------------
* Expanding full-stack development skills
* Learning advanced cybersecurity concepts
* Building personal projects
* Contributing to open-source
* Pursuing professional certifications

Connect with me on:
------------------`}</pre>
                  <div className="mt-4 flex gap-4">
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
              <div className="flex">
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                </button>
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
                      <div className="flex">
                        <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                        </button>
                        <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                        </button>
                        <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                        </button>
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
              <div className="flex">
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                </button>
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
                      <div className="flex">
                        <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                        </button>
                        <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                        </button>
                        <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                        </button>
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
              <div className="flex">
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                </button>
                <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                  <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                </button>
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
                      <div className="flex">
                        <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-2px] text-[#222222] font-bold">_</span>
                        </button>
                        <button className="w-[16px] h-[14px] flex items-center justify-center mr-[2px] bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-2px] text-[#222222] font-bold">□</span>
                        </button>
                        <button className="w-[16px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                          <span className="transform translate-y-[-1px] text-[#222222] font-bold">×</span>
                        </button>
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
