import './App.css';
import builderImage from './builder.png'; // Make sure to place your builder image in the src folder or adjust the path accordingly.
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram  } from 'react-icons/fa';
import logo from "./akpsiFullLogo.png"

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
            <h1 className="maintenance-message">We're Working on Something Awesome{dots}</h1>
            <p className="subtext">Our site is currently under maintenance. Please check back soon!</p>
          </div>
        </div>
      </header>
      <body>

          <div className="contact-container">
            <p className="contact-info">
              Follow us on social media or reach out via email:
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/akpsiuci" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://facebook.com/akpsiuci" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="mailto:akpsi.uci.rush@gmail.com" className="email-link">
                akpsi.uci.rush@gmail.com
              </a>
            </div>
          </div>
        </body>    </div>
  );
}

export default App;
