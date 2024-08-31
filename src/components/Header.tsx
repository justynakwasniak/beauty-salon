import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { Modal, Button, Form } from "react-bootstrap"; // Importuj komponenty z react-bootstrap
import LanguageSwitcher from "./LanguageSwitcher";

// Import images for the slider
import bs1 from "../assets/bs1.webp";
import bs2 from "../assets/bs2.webp";
import bs3 from "../assets/bs3.webp";

const images = [bs1, bs2, bs3];

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); // Stan do zarządzania widocznością modala

  // Slider autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual slider controls
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

  // Funkcja obsługująca płynne przewijanie
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Funkcje do zarządzania modalem
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <header className="header-container">
      {/* NavBar */}
      <nav className="navbar d-flex justify-content-between">
        <ul className="nav">
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("home")}>Home</a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("about")}>O nas</a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("services")}>
              Usługi i cennik
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("team")}>Zespół</a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleScrollToSection("contact")}>Kontakt</a>
          </li>
        </ul>
        <LanguageSwitcher />
        <div className="nav-right">
          <a className="phone-number">Tel: +48 123 456 789</a>
          <button className="reserve-btn" onClick={handleShowModal}>
            REZERWACJA ONLINE
          </button>
        </div>
      </nav>

      {/* Main content with two sections */}
      <div className="main-content">
        {/* Left section with social links and text */}
        <div className="left-section">
          <div className="social-links">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              YouTube
            </a>
          </div>
          <div className="text-container">
            <p className="sub-title">Beauty Salon dla kobiet w Krakowie</p>
            <h1>BeautySalon</h1>
            <p className="slogan">
              Jesteśmy ekspertami od kobiecej urody. <br />
              Pracujemy uważnie i z poczuciem gustu.
            </p>
          </div>
        </div>

        {/* Right section with image slider */}
        <div className="right-section">
          <div className="slider">
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
              }}
            ></div>
            <div className="slider-nav">
              <button className="prev-btn" onClick={handlePrevClick}>
                Poprzednie
              </button>
              <div className="dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      currentImageIndex === index ? "active" : ""
                    }`}
                  ></span>
                ))}
              </div>
              <button className="next-btn" onClick={handleNextClick}>
                Następne
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Zostaw swoje dane, oddzwonimy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Imię</Form.Label>
              <Form.Control type="text" placeholder="Imię*" />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="tel" placeholder="Telefon*" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Wiadomość</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Wiadomość" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={handleCloseModal}>
            ZAMKNIJ
          </Button>
          <Button className="button">WYŚLIJ</Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
