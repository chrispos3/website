import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="win98-window">
        <div className="win98-titlebar">
          <span className="win98-titlebar-text">Footer</span>
          <div className="win98-titlebar-buttons">
            <button className="win98-titlebar-button">_</button>
            <button className="win98-titlebar-button">□</button>
            <button className="win98-titlebar-button">×</button>
          </div>
        </div>
        <div className="win98-content">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Portfolio</h3>
                <p className="text-sm mb-4">
                  Inspired by the Windows 98 interface. Thank you for visiting my portfolio website!
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Links</h3>
                <div className="flex gap-2">
                  <Link to="/" className="win98-button">
                    Home
                  </Link>
                  <Link to="/about" className="win98-button">
                    About
                  </Link>
                  <Link to="/projects" className="win98-button">
                    Projects
                  </Link>
                  <Link to="/contact" className="win98-button">
                    Contact
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-sm mb-4">
                  Feel free to reach out to me for any questions or opportunities.
                </p>
                <a href="mailto:chrisposivak@gmail.com" className="win98-button inline-block">
                  chrisposivak@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#808080] text-center text-sm">
              <p>© 2024 Chris Posivak. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
