import React from 'react';
import './footer.css'; 
import logo from './img2/logo.svg';
import image1 from './img2/image1.svg';
import image2 from './img2/image2.svg';
import image3 from './img2/image3.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

      
        <div className="footer-center">
          <p className="footer-contact">
            <strong>Контакты:</strong><br />
            +998971970771<br />
            +998970020771
          </p>
        </div>

       
        <div className="footer-right">
          <p>Будьте с нами:</p>
          <div className="social-icons">
            <img src={image1} alt="Social Icon 1" />
            <img src={image2} alt="Social Icon 2" />
            <img src={image3} alt="Social Icon 3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
