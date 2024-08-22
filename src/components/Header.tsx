import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header-container">
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
        <button className="prev-btn">Poprzednie</button>
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
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="next-btn">Następne</button>
      </div>
    </header>
  );
};

export default Header;
