import React from "react";
import "../styles/Footer.css"; // Importuj plik CSS dla stopki

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p>Copyright © 2024</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
