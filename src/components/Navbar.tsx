import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="win98-window">
        <div className="win98-titlebar">
          <span className="win98-titlebar-text">Navigation</span>
          <div className="win98-titlebar-buttons">
            <button className="win98-titlebar-button">_</button>
            <button className="win98-titlebar-button">□</button>
            <button className="win98-titlebar-button">×</button>
          </div>
        </div>
        <div className="win98-content">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="text-[#000080]">Chris Posivak</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`win98-button ${
                    location.pathname === link.path ? "bg-[#000080] text-white" : ""
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            
            <div className="md:hidden">
              <button 
                className="win98-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
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
              <div className="win98-titlebar">
                <span className="win98-titlebar-text">Menu</span>
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
                      className={`win98-button text-center ${
                        location.pathname === link.path ? "bg-[#000080] text-white" : ""
                      }`}
                    >
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
