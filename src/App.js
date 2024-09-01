import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import builderImage from './builder.png';
import logo from "./akpsiFullLogo.png";
import './App.css';

function App() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Alpha Kappa Psi Logo" />
        <div className="construction-animation">
          <img src={builderImage} className="builder-image" alt="builder" />
          <div className="message-container">
            <h1 className="maintenance-message">
              We're Working on Something Awesome{dots}
            </h1>
            <p className="subtext">
              Our site is currently under maintenance. Please check back soon!
            </p>
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="contact-container">
          <p className="contact-info">
            Follow us or reach out via email:
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/akpsiuci" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://facebook.com/akpsiuci" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
          </div>
          <a href="mailto:akpsi.uci.rush@gmail.com" className="email-link">
            akpsi.uci.rush@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;