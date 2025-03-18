import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import userComputerIcon from "../components/assets/windows_icons/user_computer.ico";
import myComputerIcon from "../components/assets/windows_icons/windows.ico";
import folderIcon from "../components/assets/windows_icons/directory_closed.ico";
import fileIcon from "../components/assets/windows_icons/file_program_group.ico";
import webIcon from "../components/assets/windows_icons/world.ico";
import codeIcon from "../components/assets/windows_icons/user_computer.ico";
import toolsIcon from "../components/assets/windows_icons/tools_gear.ico";
import backIcon from "../components/assets/windows_icons/address_book.ico";
import forwardIcon from "../components/assets/windows_icons/windows_button.ico";
import upIcon from "../components/assets/windows_icons/windows_title.ico";
import cutIcon from "../components/assets/windows_icons/write_red.ico";
import copyIcon from "../components/assets/windows_icons/write_file.ico";
import pasteIcon from "../components/assets/windows_icons/write_wordpad.ico";
import undoIcon from "../components/assets/windows_icons/xml_gear.ico";
import computerIcon from "../components/assets/windows_icons/computer.ico";
import desktopIcon from "../components/assets/windows_icons/desktop_w95.ico";

interface Project {
  name: string;
  description: string;
  icon: string;
  link: string;
  category: string;
  date: string;
}

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'desktop' | 'mycomputer' | 'category'>('desktop');

  const categories = [
    { name: "Web Development", icon: webIcon },
    { name: "Software Tools", icon: toolsIcon },
    { name: "Applications", icon: codeIcon },
  ];

  const projects: Project[] = [
    {
      name: "Portfolio Website",
      description: "A Windows 98 themed portfolio website built with React and Tailwind",
      icon: webIcon,
      link: "https://github.com",
      category: "Web Development",
      date: "2024"
    },
    {
      name: "Project Name",
      description: "Project description",
      icon: webIcon,
      link: "https://project-link.com",
      category: "Web Development",
      date: "2024"
    },
  ];

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  const renderTreeLines = (isLast: boolean) => (
    <div className="absolute left-[-16px] top-0 h-full">
      <div className={`border-l border-gray-400 h-full ${isLast ? 'h-1/2' : ''}`}></div>
      <div className="absolute top-[10px] left-0 border-t border-gray-400 w-3"></div>
    </div>
  );

  const renderFolderTree = () => (
    <div className="pl-4">
      <div 
        className={`flex items-center mb-1 cursor-pointer p-1 ${
          currentView === 'desktop' ? 'bg-[#000080] text-white' : 'hover:bg-[#000080] hover:text-white'
        }`}
        onClick={() => {
          setCurrentView('desktop');
          setCurrentFolder(null);
        }}
      >
        <img src={desktopIcon} alt="" className="w-4 h-4 mr-2" />
        <span className="text-sm font-bold">Desktop</span>
      </div>
      <div className="pl-4">
        <div className="relative">
          {renderTreeLines(true)}
          <div 
            className={`flex items-center p-1 cursor-pointer ${
              currentView === 'mycomputer' ? 'bg-[#000080] text-white' : 'hover:bg-[#000080] hover:text-white'
            }`}
            onClick={() => {
              setCurrentView('mycomputer');
              setCurrentFolder(null);
            }}
          >
            <img src={computerIcon} alt="" className="w-4 h-4 mr-2" />
            <span className="text-sm">My Computer</span>
          </div>
          <div className="pl-4">
            {categories.map((category, categoryIndex) => (
              <div key={category.name} className="relative">
                {renderTreeLines(categoryIndex === categories.length - 1)}
                <div
                  className={`flex items-center p-1 cursor-pointer relative ${
                    currentFolder === category.name ? 'bg-[#000080] text-white' : 'hover:bg-[#000080] hover:text-white'
                  }`}
                  onClick={() => {
                    setCurrentView('category');
                    setCurrentFolder(category.name);
                  }}
                >
                  <img src={folderIcon} alt="" className="w-4 h-4 mr-2" />
                  <span className="text-sm">{category.name}</span>
                </div>
                {currentFolder === category.name && (
                  <div className="pl-4">
                    {getProjectsByCategory(category.name).map((project, projectIndex) => (
                      <div key={project.name} className="relative">
                        {renderTreeLines(projectIndex === getProjectsByCategory(category.name).length - 1)}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-1 hover:bg-[#000080] hover:text-white"
                        >
                          <img src={fileIcon} alt="" className="w-4 h-4 mr-2" />
                          <span className="text-sm">{project.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-0 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={userComputerIcon} alt="Projects" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">My Projects</span>
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
      <div className="container mx-auto pt-32 pb-16 px-6">
        <div className="win98-window">
          <div className="win98-titlebar flex items-center bg-[#000080]">
            <div className="flex-1 flex items-center">
              <img src={userComputerIcon} alt="Projects" className="w-4 h-4 mr-2" />
              <span className="win98-titlebar-text text-white">My Projects</span>
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

          <div className="win98-menubar flex text-sm border-b border-gray-400 bg-[#c0c0c0] px-1 py-0.5 border-t border-black">
            <div className="mr-4"><span className="underline">F</span>ile</div>
            <div className="mr-4"><span className="underline">E</span>dit</div>
            <div className="mr-4"><span className="underline">V</span>iew</div>
            <div className="mr-4"><span className="underline">G</span>o</div>
            <div className="mr-4"><span className="underline">F</span>avorites</div>
            <div className="mr-4"><span className="underline">T</span>ools</div>
            <div className="mr-4"><span className="underline">H</span>elp</div>
          </div>

          <div className="toolbar flex items-center p-1 bg-[#c0c0c0] border-b border-gray-400 border-t border-black">
            <div className="flex items-center space-x-px mr-2 border-r border-gray-500 pr-2">
              <button 
                className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={currentView === 'desktop' || (currentView === 'mycomputer' && !currentFolder)}
              >
                <img src={backIcon} alt="Back" className="w-4 h-4" />
              </button>
              <button 
                className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={currentView === 'desktop' || (currentView === 'mycomputer' && !currentFolder)}
              >
                <img src={forwardIcon} alt="Forward" className="w-4 h-4" />
              </button>
              <button 
                className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={currentView === 'desktop'}
              >
                <img src={upIcon} alt="Up" className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-px border-r border-gray-500 pr-2 mr-2">
              <button className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <img src={cutIcon} alt="Cut" className="w-4 h-4" />
              </button>
              <button className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <img src={copyIcon} alt="Copy" className="w-4 h-4" />
              </button>
              <button className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <img src={pasteIcon} alt="Paste" className="w-4 h-4" />
              </button>
            </div>
            <button className="win98-toolbar-button p-1 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <img src={undoIcon} alt="Undo" className="w-4 h-4" />
            </button>
          </div>

          <div className="address-bar flex items-center p-1 bg-[#c0c0c0] border-b border-gray-400 border-t border-black">
            <span className="mr-2 text-sm">Address</span>
            <div className="flex-1 bg-white border border-gray-600 border-r-white border-b-white p-1 flex items-center">
              <img src={myComputerIcon} alt="" className="w-4 h-4 inline mr-2" />
              <span className="text-sm">
                {currentView === 'desktop' && "Desktop"}
                {currentView === 'mycomputer' && "Desktop > My Computer"}
                {currentView === 'category' && currentFolder && `Desktop > My Computer > ${currentFolder}`}
              </span>
            </div>
          </div>

          <div className="win98-content flex min-h-[600px] bg-[#c0c0c0] border border-black">
            {/* Left sidebar with folder tree */}
            <div className="w-64 flex flex-col">
              <div className="bg-[#c0c0c0] border border-[#808080] border-b-[#ffffff] border-r-[#ffffff] flex-1 m-0">
                <div className="flex items-center justify-between px-2 py-1 bg-[#c0c0c0] text-black border-b border-[#808080]">
                  <span className="text-sm">Folders</span>
                  <button className="w-[14px] h-[14px] flex items-center justify-center bg-[#c0c0c0] border border-[#ffffff] border-r-[#424242] border-b-[#424242] text-xs leading-none">
                    <span className="transform translate-y-[-1px] text-[#222222]">×</span>
                  </button>
                </div>
                <div className="bg-white border border-[#424242] border-b-[#ffffff] border-r-[#ffffff] h-[calc(100%-28px)] overflow-y-auto">
                  <div className="p-1">
                    {renderFolderTree()}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-r-2 border-[#808080]" />

            {/* Right content area */}
            <div className="flex-1 bg-white">
              <div className="p-4 h-[calc(100%-8px)]">
                {currentView === 'desktop' && (
                  <div className="grid grid-cols-4 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center cursor-pointer group p-2 rounded hover:bg-[#000080]"
                      onClick={() => {
                        setCurrentView('mycomputer');
                        setCurrentFolder(null);
                      }}
                    >
                      <div className="w-16 h-16 flex items-center justify-center mb-1">
                        <img src={computerIcon} alt="" className="w-12 h-12" />
                      </div>
                      <span className="text-center text-sm px-1 text-black group-hover:text-white">
                        My Computer
                      </span>
                    </motion.div>
                  </div>
                )}
                {currentView === 'mycomputer' && (
                  <div className="grid grid-cols-4 gap-8">
                    {categories.map((category) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center cursor-pointer group p-2 rounded hover:bg-[#000080]"
                        onClick={() => {
                          setCurrentView('category');
                          setCurrentFolder(category.name);
                        }}
                      >
                        <div className="w-16 h-16 flex items-center justify-center mb-1">
                          <img src={category.icon} alt="" className="w-12 h-12" />
                        </div>
                        <span className="text-center text-sm px-1 text-black group-hover:text-white">
                          {category.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
                {currentView === 'category' && currentFolder && (
                  <div className="grid grid-cols-4 gap-8">
                    {getProjectsByCategory(currentFolder).map((project) => (
                      <motion.a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center cursor-pointer group p-2 rounded hover:bg-[#000080]"
                      >
                        <div className="w-16 h-16 flex items-center justify-center mb-1">
                          <img src={project.icon} alt="" className="w-12 h-12" />
                        </div>
                        <span className="text-center text-sm px-1 text-black group-hover:text-white">
                          {project.name}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-200">
                          {project.date}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="win98-statusbar border-t border-gray-400 bg-[#c0c0c0] px-2 py-1 text-sm flex items-center border-t border-black">
            <div className="border-r border-gray-500 pr-2 mr-2">
              {currentView === 'desktop' && "1 object(s)"}
              {currentView === 'mycomputer' && `${categories.length} object(s)`}
              {currentView === 'category' && currentFolder && 
                `${getProjectsByCategory(currentFolder).length} object(s)`}
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
