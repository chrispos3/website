import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import windowsIcon from "./assets/windows_icons/windows.ico";
import userCardIcon from "./assets/windows_icons/user_card.ico";
import userComputerIcon from "./assets/windows_icons/user_computer.ico";
import worldPhoneIcon from "./assets/windows_icons/world_phonereceiver.ico";
import windowsButtonIcon from "./assets/windows_icons/windows_button.ico";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", path: "/", icon: windowsIcon },
    { title: "About", path: "/about", icon: userCardIcon },
    { title: "Projects", path: "/projects", icon: userComputerIcon },
    { title: "Contact", path: "/contact", icon: worldPhoneIcon },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="win98-window">
        <div className="win98-titlebar flex items-center">
          <div className="flex-1 flex items-center">
            <img src={windowsButtonIcon} alt="Navigation" className="w-4 h-4 mr-2" />
            <span className="win98-titlebar-text">Navigation</span>
          </div>
          <div className="win98-titlebar-buttons">
            <button className="win98-titlebar-button">_</button>
            <button className="win98-titlebar-button">□</button>
            <button className="win98-titlebar-button">×</button>
          </div>
        </div>
        <div className="win98-content">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tight flex items-center">
              <img src={windowsIcon} alt="" className="w-5 h-5 mr-2" />
              <span className="text-[#000080]">Chris Posivak</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`win98-button flex items-center ${
                    location.pathname === link.path ? "bg-[#000080] text-white" : ""
                  }`}
                >
                  <img src={link.icon} alt="" className="w-4 h-4 mr-2" />
                  {link.title}
                </Link>
              ))}
            </nav>
            
            <div className="md:hidden">
              <button 
                className="win98-button flex items-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <img src={windowsButtonIcon} alt="" className="w-4 h-4 mr-2" />
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 z-50"
          >
            <div className="win98-window mx-4 mt-2">
              <div className="win98-titlebar flex items-center">
                <div className="flex-1 flex items-center">
                  <img src={windowsButtonIcon} alt="Menu" className="w-4 h-4 mr-2" />
                  <span className="win98-titlebar-text">Menu</span>
                </div>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content">
                <nav className="flex flex-col space-y-2 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`win98-button text-center flex items-center justify-center ${
                        location.pathname === link.path ? "bg-[#000080] text-white" : ""
                      }`}
                    >
                      <img src={link.icon} alt="" className="w-4 h-4 mr-2" />
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
