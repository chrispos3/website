import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface CursorPositions {
  name: number;
  email: number;
  message: number;
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

  const [cursorPositions, setCursorPositions] = useState<CursorPositions>({
    name: 0,
    email: 0,
    message: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setCursorPositions(prev => ({
      ...prev,
      [name]: value.length,
    }));
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const name = target.name;
    setCursorPositions(prev => ({
      ...prev,
      [name]: target.selectionStart || 0,
    }));
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-10 px-6">
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
              <div className="win98-titlebar">
                <span className="win98-titlebar-text">Email</span>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content">
                <a href="mailto:chrisposivak@gmail.com" className="win98-button">
                  chrisposivak@gmail.com
                </a>
              </div>
            </div>
            
            <div className="win98-window">
              <div className="win98-titlebar">
                <span className="win98-titlebar-text">Social Media</span>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content">
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/chris-posivak-954a96298" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="win98-button"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="win98-button"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div className="win98-window">
              <div className="win98-titlebar">
                <span className="win98-titlebar-text">Location</span>
                <div className="win98-titlebar-buttons">
                  <button className="win98-titlebar-button">_</button>
                  <button className="win98-titlebar-button">□</button>
                  <button className="win98-titlebar-button">×</button>
                </div>
              </div>
              <div className="win98-content">
                <p>Trenton,</p>
                <p>New Jersey</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="win98-window">
            <div className="win98-titlebar">
              <span className="win98-titlebar-text">Send Message</span>
              <div className="win98-titlebar-buttons">
                <button className="win98-titlebar-button">_</button>
                <button className="win98-titlebar-button">□</button>
                <button className="win98-titlebar-button">×</button>
              </div>
            </div>
            <div className="win98-terminal">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="win98-terminal-line">
                  <span className="win98-terminal-prompt">C:\&gt; Enter your name:</span>
                  <div className="win98-terminal-input-container">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onSelect={handleSelect}
                      className="win98-terminal-input"
                      placeholder="Your name"
                    />
                    <div 
                      className="win98-terminal-cursor"
                      style={{ 
                        left: `${(formData.name.length + 0) * 8}px`,
                        top: '0'
                      }}
                    />
                  </div>
                </div>

                <div className="win98-terminal-line">
                  <span className="win98-terminal-prompt">C:\&gt; Enter your email:</span>
                  <div className="win98-terminal-input-container">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onSelect={handleSelect}
                      className="win98-terminal-input"
                      placeholder="your.email@example.com"
                    />
                    <div 
                      className="win98-terminal-cursor"
                      style={{ 
                        left: `${(formData.email.length + 0) * 8}px`,
                        top: '0'
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
                      className="win98-terminal-input"
                      rows={4}
                      placeholder="Your message"
                    />
                    <div 
                      className="win98-terminal-cursor"
                      style={{ 
                        left: `${(formData.message.length % 80) * 8}px`,
                        top: `${Math.floor(formData.message.length / 80) * 20}px`
                      }}
                    />
                  </div>
                </div>

                <div className="win98-terminal-line flex items-center gap-2">
                  <span className="win98-terminal-prompt">C:\&gt;</span>
                  <button type="submit" className="win98-button">
                    SEND_MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
