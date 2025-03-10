import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="win98-window">
          <div className="win98-titlebar">
            <span className="win98-titlebar-text">404 - Page Not Found</span>
            <div className="win98-titlebar-buttons">
              <button className="win98-titlebar-button">_</button>
              <button className="win98-titlebar-button">□</button>
              <button className="win98-titlebar-button">×</button>
            </div>
          </div>
          <div className="win98-content">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl mb-8">Oops! Page not found</p>
              <a href="/" className="win98-button">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
