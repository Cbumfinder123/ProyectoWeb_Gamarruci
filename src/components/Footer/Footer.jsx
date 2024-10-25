import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Gamarrucci</p>
        <div className="footer-links">
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </div>
        <div className="footer-social-media">
          <a href="https://facebook.com" className="footer-social-link">Facebook</a>
          <a href="https://twitter.com" className="footer-social-link">Twitter</a>
          <a href="https://instagram.com" className="footer-social-link">Instagram</a>
        </div>
        <p className="footer-copyright">&copy; 2024 Gamarrucci. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
