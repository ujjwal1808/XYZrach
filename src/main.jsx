import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Preloader from './Components/Preloader.jsx';
import "./index.css";
import App from "./App.jsx";

const DelayedApp = () => {
  const [isReady, setIsReady] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setTimeout(() => {
        setIsPreloaderVisible(false);
      }, 1000);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* App Component */}
      <div className={`w-full transition-all duration-1000 ease-in-out ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}>
        <App />
      </div>

      {/* Preloader Overlay */}
      {isPreloaderVisible && (
        <div className={`fixed inset-0 bg-white z-50 transition-all duration-1000 ease-in-out ${
          isReady ? 'opacity-0' : 'opacity-100'
        }`}>
          <Preloader />
        </div>
      )}
    </div>
  );
};

// Ensure root div takes full height
const rootStyle = document.createElement('style');
rootStyle.innerHTML = `
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
document.head.appendChild(rootStyle);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DelayedApp />
  </StrictMode>
);