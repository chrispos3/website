import { Link } from "react-router-dom";
import windowsIcon from "./assets/windows_icons/windows.ico";
import userCardIcon from "./assets/windows_icons/user_card.ico";
import userComputerIcon from "./assets/windows_icons/user_computer.ico";
import worldPhoneIcon from "./assets/windows_icons/world_phonereceiver.ico";
import writeCardPhone from "./assets/windows_icons/write_card_phone.ico";
import windowsButtonIcon from "./assets/windows_icons/windows_button.ico";

const Footer = () => {
  const navLinks = [
    { title: "Home", path: "/", icon: windowsIcon },
    { title: "About", path: "/about", icon: userCardIcon },
    { title: "Projects", path: "/projects", icon: userComputerIcon },
    { title: "Contact", path: "/contact", icon: worldPhoneIcon },
  ];

  return (
    <footer className="mt-16">
      <div className="win98-window">
        <div className="win98-titlebar flex items-center">
          <div className="flex-1 flex items-center">
            <img src={windowsButtonIcon} alt="Footer" className="w-4 h-4 mr-2" />
            <span className="win98-titlebar-text">Footer</span>
          </div>
          <div className="win98-titlebar-buttons">
            <button className="win98-titlebar-button">_</button>
            <button className="win98-titlebar-button">□</button>
            <button className="win98-titlebar-button">×</button>
          </div>
        </div>
        <div className="win98-content p-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <div className="flex items-center">
                    <img src={windowsIcon} alt="" className="w-5 h-5 mr-2" />
                    <span>Portfolio</span>
                  </div>
                </h3>
                <p className="text-sm mb-4">
                  Inspired by the Windows 98 interface. Thank you for visiting my portfolio website!
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <div className="flex items-center">
                    <img src={windowsButtonIcon} alt="" className="w-5 h-5 mr-2" />
                    <span>Links</span>
                  </div>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className="win98-button flex items-center"
                    >
                      <img src={link.icon} alt="" className="w-4 h-4 mr-2" />
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <div className="flex items-center">
                    <img src={worldPhoneIcon} alt="" className="w-5 h-5 mr-2" />
                    <span>Contact</span>
                  </div>
                </h3>
                <p className="text-sm mb-4">
                  Feel free to reach out to me for any questions or opportunities.
                </p>
                <a href="mailto:chrisposivak@gmail.com" className="win98-button inline-flex items-center">
                  <img src={writeCardPhone} alt="" className="w-4 h-4 mr-2" />
                  chrisposivak@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#808080] text-center text-sm">
              <p className="flex items-center justify-center">
                <img src={windowsIcon} alt="" className="w-4 h-4 mr-2" />
                © 2024 Chris Posivak. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
