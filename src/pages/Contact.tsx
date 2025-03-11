import { useEffect, useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import worldPhoneIcon from "../components/assets/windows_icons/world_phonereceiver.ico";
import userCardIcon from "../components/assets/windows_icons/user_card.ico";
import worldIcon from "../components/assets/windows_icons/world.ico";
import writeCardPhone from "../components/assets/windows_icons/write_card_phone.ico";
import windowsIcon from "../components/assets/windows_icons/windows.ico";
import errorIcon from "../components/assets/windows_icons/eject_pc.ico";
import { sendToDiscord } from "./api/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface CaretPosition {
  position: number;
  line: number;
}

interface PopupState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [caretPositions, setCaretPositions] = useState<{ [key: string]: CaretPosition }>({
    name: { position: 0, line: 0 },
    email: { position: 0, line: 0 },
    message: { position: 0, line: 0 }
  });

  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: 'success',
    message: ''
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Please enter your name";
    }
    if (!formData.email.trim()) {
      return "Please enter your email";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return "The email address is not valid.\n\nAn email address must contain a single '@' character and a domain name (e.g., 'name@example.com').\n\nPlease check your email address and try again.";
    }
    if (!formData.message.trim()) {
      return "Please enter your message";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateForm();
    
    if (error) {
      setPopup({
        show: true,
        type: 'error',
        message: error
      });
      return;
    }

    try {
      // Show loading state
      setPopup({
        show: true,
        type: 'success',
        message: 'Sending your message...'
      });

      // Send directly to Discord
      const result = await sendToDiscord(formData);
      
      if (!result.success) {
        throw new Error('Failed to send message');
      }

      // If everything succeeded, show success message
      setPopup({
        show: true,
        type: 'success',
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setPopup({
        show: true,
        type: 'error',
        message: 'There was an error sending your message. Please try again later or contact me directly at chrisposivak@gmail.com'
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, selectionStart } = e.currentTarget;
    const currentPosition = selectionStart || 0;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (currentPosition > 0) {
          const newPos = currentPosition - 1;
          e.currentTarget.setSelectionRange(newPos, newPos);
          setCaretPositions(prev => ({
            ...prev,
            [name]: {
              position: newPos,
              line: Math.floor(newPos / 80)
            }
          }));
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (currentPosition < value.length) {
          const newPos = currentPosition + 1;
          e.currentTarget.setSelectionRange(newPos, newPos);
          setCaretPositions(prev => ({
            ...prev,
            [name]: {
              position: newPos,
              line: Math.floor(newPos / 80)
            }
          }));
        }
        break;
      case 'Home':
        e.preventDefault();
        const lineStart = Math.floor(currentPosition / 80) * 80;
        e.currentTarget.setSelectionRange(lineStart, lineStart);
        setCaretPositions(prev => ({
          ...prev,
          [name]: {
            position: lineStart,
            line: Math.floor(lineStart / 80)
          }
        }));
        break;
      case 'End':
        e.preventDefault();
        const currentLine = Math.floor(currentPosition / 80);
        const nextLineStart = (currentLine + 1) * 80;
        const lineEnd = Math.min(value.length, nextLineStart - 1);
        e.currentTarget.setSelectionRange(lineEnd, lineEnd);
        setCaretPositions(prev => ({
          ...prev,
          [name]: {
            position: lineEnd,
            line: currentLine
          }
        }));
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, selectionStart } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const newPosition = selectionStart || value.length;
    setCaretPositions(prev => ({
      ...prev,
      [name]: {
        position: newPosition,
        line: Math.floor(newPosition / 80)
      }
    }));
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, selectionStart } = target;
    const newPosition = selectionStart || 0;
    setCaretPositions(prev => ({
      ...prev,
      [name]: {
        position: newPosition,
        line: Math.floor(newPosition / 80)
      }
    }));
  };

  const closePopup = () => {
    setPopup(prev => ({ ...prev, show: false }));
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-10xl">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={worldPhoneIcon} alt="Contact" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">Contact Me</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-content">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Me</h1>
                <p className="text-lg mb-8">
                  Feel free to reach out! Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'm always happy to connect.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="win98-window">
              <div className="win98-titlebar flex items-center">
                <div className="flex-1 flex items-center">
                  <img src={worldPhoneIcon} alt="Email" className="w-4 h-4 mr-2" />
                  <span className="win98-titlebar-text">Email</span>
                </div>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content flex flex-col items-center justify-center p-6">
                <a href="mailto:chrisposivak@gmail.com" className="win98-button flex items-center">
                  <img src={writeCardPhone} alt="" className="w-4 h-4 mr-2" />
                  chrisposivak@gmail.com
                </a>
              </div>
            </div>
            
            <div className="win98-window">
              <div className="win98-titlebar flex items-center">
                <div className="flex-1 flex items-center">
                  <img src={worldIcon} alt="Social Media" className="w-4 h-4 mr-2" />
                  <span className="win98-titlebar-text">Social Media</span>
                </div>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content flex flex-col items-center justify-center p-6">
                <div className="flex justify-center gap-4">
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
                    <img src={userCardIcon} alt="" className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div className="win98-window">
              <div className="win98-titlebar flex items-center">
                <div className="flex-1 flex items-center">
                  <img src={worldIcon} alt="Location" className="w-4 h-4 mr-2" />
                  <span className="win98-titlebar-text">Location</span>
                </div>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content flex flex-col items-center justify-center p-6">
                <a 
                  href="https://www.google.com/maps?q=Trenton,+New+Jersey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="win98-button flex items-center"
                >
                  <img src={worldIcon} alt="" className="w-4 h-4 mr-2" />
                  Trenton, New Jersey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-10xl">
          <div className="win98-window">
            <div className="win98-titlebar flex items-center">
              <div className="flex-1 flex items-center">
                <img src={writeCardPhone} alt="Send Message" className="w-4 h-4 mr-2" />
                <span className="win98-titlebar-text">Send Message</span>
              </div>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-terminal p-6">
              <form onSubmit={handleSubmit} className="space-y-6 max-w-1xl mx-auto">
                <div className="win98-terminal-line">
                  <span className="win98-terminal-prompt flex items-left">
                  <span className="win98-terminal-prompt">C:\&gt; Enter your name:</span>

                  </span>
                  <div className="win98-terminal-input-container mt-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onSelect={handleSelect}
                      onKeyDown={handleKeyDown}
                      className="win98-terminal-input w-full"
                      placeholder="Your name"
                    />
                    <div 
                      className="win98-terminal-cursor"
                      style={{ 
                        left: `${(caretPositions.name.position % 80) * 8}px`,
                        top: `${caretPositions.name.line * 20}px`
                      }}
                    />
                  </div>
                </div>

                <div className="win98-terminal-line">
                  <span className="win98-terminal-prompt">C:\&gt; Enter your email:</span>
                  <div className="win98-terminal-input-container">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onSelect={handleSelect}
                      onKeyDown={handleKeyDown}
                      className="win98-terminal-input w-full"
                      placeholder="your.email@example.com"
                    />
                    <div 
                      className="win98-terminal-cursor"
                      style={{ 
                        left: `${(caretPositions.email.position % 80) * 8}px`,
                        top: `${caretPositions.email.line * 20}px`
                      }}
                    />
                  </div>
                </div>

                <div className="win98-terminal-line">
                  <span className="win98-terminal-prompt">C:\&gt; Enter your message:</span>
                  <div className="win98-terminal-input-container">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onSelect={handleSelect}
                      onKeyDown={handleKeyDown}
                      className="win98-terminal-input w-full min-h-[60px]"
                      rows={4}
                      placeholder="Your message"
                    />
                    <div 
                      className="win98-terminal-cursor"
                      style={{ 
                        left: `${(caretPositions.message.position % 80) * 8}px`,
                        top: `${Math.floor(caretPositions.message.position / 80) * 20}px`
                      }}
                    />
                  </div>
                </div>

                <div className="win98-terminal-line flex items-center gap-2">
                  <span className="win98-terminal-prompt">C:\&gt;</span>
                  <button type="submit" className="win98-button">
                    SEND_MESSAGE.EXE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="win98-window max-w-md w-full mx-4 shadow-lg"
            >
              <div className="win98-titlebar flex items-center bg-[#000080] text-white">
                <div className="flex-1 flex items-center px-2 py-1">
                  <img 
                    src={popup.type === 'success' ? windowsIcon : errorIcon} 
                    alt={popup.type === 'success' ? "Success" : "Error"} 
                    className="w-4 h-4 mr-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // 1x1 transparent GIF
                    }}
                  />
                  <span className="win98-titlebar-text font-bold">
                    {popup.type === 'success' ? 'Message Sent Successfully' : 'Error'}
                  </span>
                </div>
                <div className="win98-titlebar-buttons">
                  <button 
                    className="win98-titlebar-button hover:bg-red-600 hover:text-white px-2"
                    onClick={closePopup}
                  >×</button>
                </div>
              </div>
              <div className="win98-content p-6 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800">
                <div className="flex items-start mb-6">
                  <img 
                    src={popup.type === 'success' ? writeCardPhone : errorIcon} 
                    alt="" 
                    className="w-8 h-8 mr-4 mt-1"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    }}
                  />
                  <p className="text-lg whitespace-pre-line">{popup.message}</p>
                </div>
                <div className="flex justify-end pt-4 border-t border-gray-400">
                  <button
                    onClick={closePopup}
                    className="win98-button px-8 py-1 min-w-[100px] flex items-center justify-center hover:bg-gray-200 active:border-gray-800 active:border-t active:border-l active:border-b-white active:border-r-white"
                  >
                    <img 
                      src={windowsIcon} 
                      alt="" 
                      className="w-4 h-4 mr-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                      }}
                    />
                    OK
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Contact;
