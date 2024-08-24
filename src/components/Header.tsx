import React, { useState } from "react";
import "../styles/Header.css";

// Importowanie obrazów
import bs1 from "../assets/bs1.webp";
import bs2 from "../assets/bs2.webp";
import bs3 from "../assets/bs3.webp";

const images = [bs1, bs2, bs3];

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <header
      className="header-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <svg width="30" height="30">
              <circle
                cx="15"
                cy="15"
                r="12"
                stroke="white"
                strokeWidth="2"
                fill="pink"
              />
            </svg>
          </li>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <div className="reserve-section">
          <button className="reserve-btn">Rezerwacja Online</button>
          <p className="phone-number">Tel: +48 123 456 789</p>
        </div>
      </nav>
      <p className="small-paragraph">A BEAUTY SALON FOR WOMEN IN KRAKOW</p>
      <h1>BeautySalon</h1>
      <p className="small-paragraph">Transforming beauty into confidence.</p>
      <div className="slider-container">
        <button className="prev-btn" onClick={handlePrevClick}>
          Poprzednie
        </button>
        <div className="social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <div className="slider-nav">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImageIndex === index ? "active" : ""}`}
            ></span>
          ))}
        </div>
        <button className="next-btn" onClick={handleNextClick}>
          Następne
        </button>
      </div>
    </header>
  );
};

export default Header;
